'use client'

interface ButtonTypes{
    doctor: DoctorPromiseTypes
}

import { DoctorsContext } from '@/Context/DoctorsContext';
import { DoctorPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const Button = ({doctor}:ButtonTypes) => {
    const {bookDoctors, setBookDoctors} = useContext(DoctorsContext)
    
    const handleCancel = (id:string) => {
        const afterCancel = bookDoctors.filter((item) => item.id !== id)
        setBookDoctors(afterCancel)
        toast.info(`Appoinment with ${doctor.name} is cancelled`)
    }

    return (
        <button
        onClick={() => handleCancel(doctor.id)}
        className="w-full py-2.5 px-6 border border-red-500 text-red-500 font-medium text-sm rounded-full hover:bg-red-50 active:bg-red-100 transition-colors cursor-pointer"
        >
            Cancel Appointment
        </button>
    );
};

export default Button;