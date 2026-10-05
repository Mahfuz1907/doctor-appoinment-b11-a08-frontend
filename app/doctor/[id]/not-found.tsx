'use client';

import Link from "next/link";
import { FaUserDoctor, FaMagnifyingGlass, FaHouse, FaArrowLeft } from "react-icons/fa6";

export default function DoctorNotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-8 font-sans bg-gray-50/50">
      
      <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center">
        
        {/* Doctor Badge Icon with Warning Tag */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
            <FaUserDoctor className="text-3xl sm:text-4xl" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <FaMagnifyingGlass className="text-xs" />
          </div>
        </div>

        {/* Doctor-Specific Error Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Doctor Profile Not Found
        </h1>

        {/* Descriptive Helper Text */}
        <p className="text-sm sm:text-base text-gray-500 max-w-md mb-8 leading-relaxed">
          We couldn&apos;t find a specialist matching this profile ID. The doctor may no longer be listed in our directory or the link might be inaccurate.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs">
          
          <Link
            href="/"
            className="w-full py-3.5 px-2 gap-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-full shadow-md shadow-blue-100 transition-all flex items-center justify-center"
          >
            <FaHouse className="text-xs" />
            Browse All Doctors
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full py-3.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm rounded-full border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}