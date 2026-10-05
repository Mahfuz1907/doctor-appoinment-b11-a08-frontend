import React from 'react';
import List from './List';
import { Metadata } from 'next';
import Chart from './Chart';


export const metadata: Metadata = {
  title: "My Bookings | Phudu",
  icons:{
    icon: '/assets/medical-appointment.png'
  }
};



const BookingsPage = () => {
    return (
        <div className='mx-40 my-25 flex flex-col justify-between items-center'>
            {/* recharts */}
            <div className='w-full'>
                <Chart />
            </div>
            {/* booking list */}
            <div className='flex flex-col justify-between items-center gap-3 w-full'>
                <h1 className='text-2xl font-bold'>My Today Appoinments</h1>
                <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam.</p>
                {/* bookings list */}
                <List />
            </div>
        </div>
    );
};

export default BookingsPage;