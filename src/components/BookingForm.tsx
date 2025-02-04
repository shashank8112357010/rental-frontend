import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { UserBookingService } from "../services/api.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getToken } from "../helper/tokenHelper";
import Login from "./auth/Login";
import Register from "./auth/Register";

const BookingForm = ({ itemId, itemType, disabled }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsLoginModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!getToken()) {
      toast.info("You need to log in first!");
      setIsLoginModalOpen(true);
      return;
    }

    if (!date || !time) {
      setError("Please select both a date and time.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const bookingDetails = {
        itemType,
        item: itemId,
        appointmentDate: `${date}T${time}:00.000Z`,
        preferredTime: time,
      };
      await UserBookingService(bookingDetails);
      toast.success("Appointment booked successfully!");
      setDate("");
      setTime("");
      navigate("/booking");
    } catch (err) {
      toast.error("An error occurred while booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsLoginModalOpen(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full rounded-md border-gray-100 border bg-transparent text-white shadow-sm focus:border-white focus:ring-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-100 mb-1">
            Preferred Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-md border border-gray-100 bg-transparent text-white shadow-sm focus:border-white focus:ring-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={disabled || isLoading}
          className={`w-full border-2 text-white px-4 py-2 rounded-md hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
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

      {isLoginModalOpen && (
        <div
          id="modal-overlay"
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
        >
          <div
            className="bg-white p-2 md:p-6 rounded-md shadow-md w-[80%] md:h-auto mt-72 md:mt-0 max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {isLogin ? (
              <Login  closeDialog={() => setIsLoginModalOpen(false)} switchToRegister={() => setIsLogin(false)}/>
            ) : (
              <Register switchToLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
