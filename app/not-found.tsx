'use client';

import Link from "next/link";
import { FaUserDoctor, FaArrowLeft, FaHouse } from "react-icons/fa6";

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-4 sm:p-8 font-sans">
      
      <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center">
        
        {/* Medical / Doctor Badge Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
            <FaUserDoctor className="text-3xl sm:text-4xl" />
          </div>
          <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full border-2 border-white">
            404
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 max-w-md mb-8 leading-relaxed">
          The requested page could not be found. They may have moved, updated their schedule, or the link might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs">
          
          <Link
            href="/"
            className="w-full py-3.5 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-full shadow-md shadow-blue-100 transition-colors flex items-center justify-center gap-2"
          >
            <FaHouse className="text-xs" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full py-3.5 px-5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm rounded-full border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}