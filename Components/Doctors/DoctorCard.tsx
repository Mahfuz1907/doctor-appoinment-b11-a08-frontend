'use client'

import Image from "next/image";
import Link from "next/link";
import { MdAppRegistration } from "react-icons/md";
import { DoctorPromiseTypes } from '@/type';
import React from 'react';

interface DoctorProp{
    doctor: DoctorPromiseTypes
}

const DoctorCard = ({doctor}:DoctorProp) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailableToday = doctor.availability?.includes(today);
    return (
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full font-sans">
      
      {/* Doctor Image Container */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-teal-500">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        {/* Availability Badge */}
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border ${
            isAvailableToday
              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
              : "bg-red-50 text-red-600 border-red-200"
          }`}
        >
          {isAvailableToday ? "Available Today" : "Unavailable Today"}
        </span>

        {/* Experience Badge */}
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
          {doctor.experience} Experience
        </span>
      </div>

      {/* Doctor Name & Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-snug mb-1">
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {doctor.education} - {doctor.speciality}
          </p>
        </div>

        <div>
          {/* Dashed Separator */}
          <div className="border-t border-dashed border-gray-200 my-4" />

          {/* Registration Number */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center font-serif text-[10px] font-bold text-gray-600">
              <MdAppRegistration />
            </span>
            <span>Reg No: {doctor.registrationNumber}</span>
          </div>

          {/* View Details Button */}
          <Link
            href={`/doctor/${doctor.id}`}
            className="w-full block text-center py-2.5 px-4 rounded-full border border-blue-500 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>

    </div>
    );
};

export default DoctorCard;