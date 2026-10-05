'use client'

import { DoctorsContext } from '@/Context/DoctorsContext';
import React, { useContext } from 'react';
import NoAppointments from './NoAppoiment';
import Card from './Card';

const List = () => {
    const {bookDoctors} = useContext(DoctorsContext)
    return (
        <div className='w-full flex flex-col justify-between items-center gap-3'>
            {
                bookDoctors.length === 0 ? <NoAppointments /> : 
                bookDoctors.map((doctor) => <Card key={doctor.id} doctor={doctor} />)
            }
        </div>
    );
};

export default List;