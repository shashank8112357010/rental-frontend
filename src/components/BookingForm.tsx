import React, { useState } from "react";
import { Calendar } from "lucide-react";

const BookingForm = ({ itemId, itemType, disabled }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) return;

    book({
      itemId,
      itemType,
      appointmentDate: `${date}T${time}:00.000Z`,
    });
  };

  return (
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
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <Calendar className="h-5 w-5 mr-2" />
        {isLoading ? "Booking..." : "Book Appointment"}
      </button>

      {disabled && (
        <p className="text-sm text-red-600 text-center">
          This item is currently not available for booking
        </p>
      )}

     
    </form>
  );
};

export default BookingForm;
