import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { UserBookingService } from "../services/api.service";
import { toast } from "react-toastify";
import { getToken } from "../helper/tokenHelper";
import Login from "./auth/Login";
import Register from "./auth/Register";

const BookingForm = ({ itemId, itemType, disabled }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Modal control
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!getToken()) {
      toast.info("You need to log in first!");
      setIsLoginModalOpen(true); // Open the login/register modal
      return;
    }

    if (!date || !time) {
      setError("Please select both a date and time.");
      return;
    }

    setError("");
    setIsLoading(true);

    const bookingDetails = {
      itemType,
      item: itemId,
      appointmentDate: `${date}T${time}:00.000Z`,
      preferredTime: time,
    };

    try {
      await UserBookingService(bookingDetails);
      toast.success("Appointment booked successfully!");
      setDate("");
      setTime("");
    } catch (err) {
      console.error("Booking Error:", err);
      setError("An error occurred while booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Close the modal when clicking outside
  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsLoginModalOpen(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={disabled || isLoading}
          className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
            isLoading ? "opacity-70" : ""
          }`}
        >
          <Calendar className="h-5 w-5 mr-2" />
          {isLoading ? "Booking..." : "Book Appointment"}
        </button>

        {error && (
          <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
        )}

        {disabled && (
          <p className="text-sm text-red-600 text-center">
            This item is currently not available for booking.
          </p>
        )}
      </form>

      {/* Login/Register Modal */}
      {isLoginModalOpen && (
        <div
          id="modal-overlay"
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
            onClick={(e) => e.stopPropagation()} 
          >
            {isLogin ? (
              <Login
                closeDialog={() => setIsLoginModalOpen(false)}
                switchToRegister={() => setIsLogin(false)} 
              />
            ) : (
              <Register
                switchToLogin={() => setIsLogin(true)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
