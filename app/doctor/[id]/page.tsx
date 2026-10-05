import Image from 'next/image';
import React from 'react';
import { FiInfo } from 'react-icons/fi';
import { MdAppRegistration } from 'react-icons/md';
import Button from './Button';
import { notFound } from 'next/navigation';

interface DoctorDetailsType{
    params: Promise<{id:string}>
}

const getDoctorDetails = async() => {
    const res = await fetch(`https://cdn.jsdelivr.net/gh/Mahfuz1907/doctor-appoinment-b11-a08-api@master/doctors.json`)
    const data = await res.json()
    return data
}

export async function generateMetadata ({params}:DoctorDetailsType) {
    const {id} = await params
    const docID = Number(id.split("").slice(4).join(""))
    const docDetails = await getDoctorDetails()
    const doctor = docDetails[docID - 1]

    return {
        title: `${doctor?.name ?? 'Invalid URL'} | Phudu`,
        icons:{
            icon: '/assets/medical-appointment.png'
        }
    }
}

const getDay = () => {
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date().getDay()
    return weekDay[today]
}

const DoctorDetailsPage = async({params}:DoctorDetailsType) => {
    const {id} = await params
    const docID = Number(id.split("").slice(4).join(""))
    const docDetails = await getDoctorDetails()
    const doctor = docDetails[docID - 1]
    if(!doctor){
        notFound()
    }
    const today = getDay()
    const isAvailableToday = doctor?.availability.includes(today)
    return (
        <div className='mx-40 mb-20 mt-8 flex flex-col justify-between items-center gap-8'>
            {/* heading */}
            <div className='w-full bg-white px-40 py-18 flex flex-col justify-between items-center gap-3 rounded-2xl'>
                <h1 className='text-2xl font-bold text-center'>Doctor&apos;s Profile Details</h1>
                <p className='text-sm text-black font-normal text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis alias pariatur veniam incidunt dicta molestias enim in ipsa. Qui!</p>
            </div>
            {/* doctor info */}
            <div className="w-full bg-white rounded-2xl p-8 flex flex-row justify-start items-start gap-5">
                <div className="relative w-64 h-72 rounded-xl overflow-hidden">
                    <Image
                    src={doctor?.image ?? "https://images.unsplash.com/"}
                    alt={doctor?.name ?? 'no-image'}
                    fill
                    className="object-cover object-top"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                            {doctor?.name}
                        </h2>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">
                            {doctor?.education}
                        </p>
                        <p className="text-sm text-gray-500 font-medium mb-4">
                            {doctor?.speciality}
                        </p>
                        <div className="mb-4">
                            <span className="text-xs text-gray-400 block mb-0.5 font-normal">
                                Working at
                            </span>
                            <p className="text-sm sm:text-base font-bold text-gray-900">
                                {doctor?.workplace}
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="border-t border-dashed border-gray-200 my-3" />

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                        <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold">
                        <MdAppRegistration />
                        </span>
                        <span>Reg No: {doctor?.registrationNumber}</span>
                    </div>

                    <div className="border-t border-dashed border-gray-200 my-3" />
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-gray-900 mr-1">
                        Availability
                        </span>
                        {doctor?.availability?.map((day:string) => (
                        <span
                            key={day}
                            className="text-xs font-medium text-amber-600 bg-amber-50/80 px-3 py-1 rounded-full border border-amber-100"
                        >
                            {day}
                        </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <span className="font-bold text-gray-900">Consultation Fee:</span>
                        <span className="font-bold text-blue-600">
                        Taka : {doctor?.fee}
                        </span>
                        <span className="text-gray-400">(incl. Vat)</span>
                        <span className="text-blue-500 ml-1">Per consultation</span>
                    </div>
                    </div>

                </div>

            </div>
            {/* footer */}
            <div className="w-full bg-white rounded-2xl p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                    Book an Appointment
                </h3>
                <div className="border-t border-dashed border-gray-200 mb-6" />
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-base font-bold text-gray-900">Availability</span>
                        <span
                        className={`text-xs font-semibold px-4 py-1.5 rounded-full border ${
                            isAvailableToday
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                            : "bg-red-50 text-red-600 border-red-200"
                        }`}>
                            {isAvailableToday ? "Doctor Available Today" : "Doctor Unavailable Today"}
                        </span>
                    </div>

                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 mb-8 flex items-start sm:items-center gap-2.5 text-xs text-amber-700 font-medium">
                    <FiInfo className="text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0" />
                    <span>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </span>
                  </div>

                  <Button isAvailableToday={isAvailableToday} doctor={doctor} />

            </div>            
        </div>
    );
};

export default DoctorDetailsPage;