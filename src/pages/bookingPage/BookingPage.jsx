import React from "react";

const BookingPage = () => {
    const bookings = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "123-456-7890",
            date: "2025-01-20",
            time: "14:00",
            status: "Confirmed",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            phone: "987-654-3210",
            date: "2025-01-22",
            time: "10:00",
            status: "Pending",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alicej@example.com",
            phone: "456-789-1234",
            date: "2025-01-25",
            time: "16:00",
            status: "Cancelled",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-36 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Booking Details
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Phone Number
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Time
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr
                                key={booking.id}
                                className="hover:bg-gray-50 border-t border-gray-200"
                            >
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {booking.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {booking.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {booking.phone}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {booking.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {booking.time}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : booking.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingPage;
