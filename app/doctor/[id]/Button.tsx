'use client'

import { DoctorsContext } from '@/Context/DoctorsContext';
import { DoctorPromiseTypes } from '@/type';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface ButtonType{
    isAvailableToday: boolean,
    doctor: DoctorPromiseTypes
}

const Button = ({isAvailableToday, doctor}:ButtonType) => {
    const {bookDoctors, setBookDoctors} = useContext(DoctorsContext)
    const router = useRouter()

    const alreadyBooked = bookDoctors.some((thing) => thing.id === doctor?.id)
    const isDisabled = !isAvailableToday || alreadyBooked

    const handleBookButton = (item:DoctorPromiseTypes):void => {
        if(!isAvailableToday){
            toast.error(`${item.name} is not available today`)
        }else if(!alreadyBooked){
            const afterBook = [...bookDoctors, item]
            setBookDoctors(afterBook)
            toast.success(`${item.name} is booked successfully`)
            router.push('/bookings')
        }else if(alreadyBooked){
            toast.error(`${item.name} is booked already`)
        }
    }

    return (
        <button
        onClick={() => handleBookButton(doctor)}
        aria-disabled={isDisabled}
        className={`w-full ${!isDisabled ? 'cursor-pointer bg-blue-600 hover:bg-blue-700 text-white' : 'cursor-not-allowed bg-gray-400 text-black'} py-3.5 px-6  
             font-semibold text-base rounded-full shadow-sm`}
        >
            {!isAvailableToday ? 'Doctor Not Available Today' : !alreadyBooked ? 'Book Appointment Now' : 'Booked Already'} 
        </button>
    );
};

export default Button;