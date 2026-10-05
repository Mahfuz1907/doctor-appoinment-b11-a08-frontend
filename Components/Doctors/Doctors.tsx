import React from 'react';
import DoctorFunction from './DoctorFunction';
import Search from './Search';

const getDoctorsInformation = async() => {
    const res = await fetch('https://cdn.jsdelivr.net/gh/Mahfuz1907/doctor-appoinment-b11-a08-api@master/doctors.json')
    const data = await res.json()
    return data
}

const Doctors = async() => {
    const doctorsInfo = await getDoctorsInformation()
    return (
        <div className='flex flex-col justify-between items-center gap-5 mx-40'>
            <h1 className='text-2xl text-center font-bold text-black'>Our Best Doctors</h1>
            <p className='text-center text-sm font-normal'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it&amp;s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <Search />
            <div>
                <DoctorFunction doctorsInfo={doctorsInfo} />
            </div>
        </div>
    );
};

export default Doctors;