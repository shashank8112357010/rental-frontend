import React, { useEffect, useState } from "react";
import { GetUserBookingService } from "../../services/api.service";

const BookingPage = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        GetUserBookingService()
            .then((response) => {
                setBookings(response.data);
                setError(null);
            })
            .catch(() => {
                setError("Failed to fetch bookings. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-36 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 text-center">
                Booking Details
            </h1>
            {loading ? (
                <p className="text-center text-gray-100">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-400">{error}</p>
            ) : bookings.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                    Item Type
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                    Appointment Date
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                    Preferred Time
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => {
                                return (
                                    <tr
                                        key={booking._id}
                                        className="hover:bg-gray-700 border-t border-gray-700"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {booking.itemType}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {booking.item?.title || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {new Date(
                                                booking.appointmentDate
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {booking.preferredTime || "N/A"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status.trim().toUpperCase() === "CONFIRMED"
                                                    ? "bg-green-600 text-green-100"
                                                    : booking.status.trim().toUpperCase() === "PENDING"
                                                        ? "bg-yellow-600 text-yellow-100"
                                                        : booking.status.trim().toUpperCase() === "REJECTED"
                                                            ? "bg-red-600 text-red-100"
                                                            : "bg-gray-600 text-gray-100"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-400">No bookings found.</p>
            )}
        </div>
    );
};

export default BookingPage;
