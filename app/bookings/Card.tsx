import { DoctorPromiseTypes } from '@/type';
import React from 'react';
import Button from './Button';

interface CardTypes{
    doctor: DoctorPromiseTypes
}

const Card = ({doctor}:CardTypes) => {
    return (
        <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm font-sans">
            {/* Top Details Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                {/* Left: Doctor Name & Education */}
                <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {doctor.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-normal">
                    {doctor.education} - {doctor.speciality}
                </p>
                </div>

                {/* Right: Fee details */}
                <div className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">
                Appointment Fee : {doctor.fee} Taka + Vat
                </div>
            </div>

            {/* Dashed Separator */}
            <div className="border-t border-dashed border-gray-200 my-4" />

            {/* Cancel Appointment Pill Button */}
            <Button doctor={doctor} />
            </div>
    );
};

export default Card;