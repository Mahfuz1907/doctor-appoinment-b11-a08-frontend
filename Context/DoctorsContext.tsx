'use client'

import { DoctorPromiseTypes } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface DoctorContextTypes{
    viewAll: boolean,
    setViewAll: Dispatch<SetStateAction<boolean>>,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    bookDoctors: DoctorPromiseTypes[],
    setBookDoctors: Dispatch<SetStateAction<DoctorPromiseTypes[]>>
}

export const DoctorsContext = createContext<DoctorContextTypes>({
    viewAll: false,
    setViewAll: () => {},
    searchValue: '',
    setSearchValue: () => {},
    bookDoctors: [],
    setBookDoctors: () => {}
})

const DoctorsProvider = ({children}:{children: ReactNode}) => {
    const [viewAll, setViewAll] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [bookDoctors, setBookDoctors] = useState<DoctorPromiseTypes[]>(() => {
        if (typeof window !== 'undefined'){
            const saved = localStorage.getItem('doctor_booking')
            return saved ? JSON.parse(saved) : []
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('doctor_booking', JSON.stringify(bookDoctors))
    },[bookDoctors])

    const sharedData = {
        viewAll,
        setViewAll,
        searchValue,
        setSearchValue,
        bookDoctors,
        setBookDoctors
    }
    return (
        <DoctorsContext.Provider value={sharedData}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsProvider;