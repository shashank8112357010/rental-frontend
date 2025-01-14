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
                // console.log(response.data)
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
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Booking Details
            </h1>
            {loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-600">{error}</p>
            ) : bookings.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Item Type
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Appointment Date
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Preferred Time
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => {
                                console.log(booking.status);
                                return (
                                    <tr key={booking._id} className="hover:bg-gray-50 border-t border-gray-200">
                                        <td className="px-6 py-4 text-sm text-gray-700">{booking.itemType}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{booking.item?.title || "N/A"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {new Date(booking.appointmentDate).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{booking.preferredTime || "N/A"}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status.trim().toUpperCase() === "CONFIRMED"
                                                    ? "bg-green-100 text-green-700"
                                                    : booking.status.trim().toUpperCase() === "PENDING"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : booking.status.trim().toUpperCase() === "REJECTED"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-gray-100 text-gray-700" // fallback color
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
                <p className="text-center text-gray-600">No bookings found.</p>
            )}
        </div>
    );
};

export default BookingPage;