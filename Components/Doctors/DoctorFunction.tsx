'use client'

import { DoctorPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import DoctorCard from './DoctorCard';
import { DoctorsContext } from '@/Context/DoctorsContext';

interface DoctorInfoTypes{
    doctorsInfo: DoctorPromiseTypes[]
}

const DoctorFunction = ({doctorsInfo}: DoctorInfoTypes) => {
    const {viewAll, setViewAll, searchValue} = useContext(DoctorsContext)

    const afterSearch = doctorsInfo.filter((doctor) => doctor.name.toLowerCase().includes(searchValue))

    let totalDoctors = 0

    const handleAllButton = () => {
        setViewAll(!viewAll)
    }

    if(!viewAll){
        totalDoctors = 6
    }else{
        totalDoctors = doctorsInfo.length
    }


    return (
        <div className='flex flex-col justify-between items-center gap-5'>
            <div className='grid grid-cols-3 justify-between items-start gap-5'>
                {
                    afterSearch.slice(0,totalDoctors).map((doctor:DoctorPromiseTypes) => <DoctorCard key={doctor.id} doctor={doctor} />)
                }
            </div>
            <button 
            onClick={() => handleAllButton()}
            className={`px-7.5 py-2 bg-[#176ae5] hover:bg-white hover:border hover:border-[#176ae5] 
            rounded-[99px] text-white hover:text-[#176ae5] font-bold text-md cursor-pointer`}>
                {viewAll ? 'View Less' : 'View All Doctors'}
            </button>
        </div>
    );
};

export default DoctorFunction;