'use client';

import Link from "next/link";
import { FaCalendarXmark } from "react-icons/fa6";

export default function NoAppointments() {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 sm:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center font-sans flex flex-col items-center justify-center">
      
      {/* Icon Badge */}
      <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-inner">
        <FaCalendarXmark className="text-3xl" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
        No Appointments Found
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-500 max-w-md mb-8 leading-relaxed">
        You haven&apos;t booked any doctor appointments yet. Find top-rated specialists and schedule your consultation in just a few clicks.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="py-3.5 px-8 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base rounded-full shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5"
      >
        Book An Appointment
      </Link>

    </div>
  );
}