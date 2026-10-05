'use client'

import { DoctorsContext } from '@/Context/DoctorsContext';
import { SearchField } from '@heroui/react';
import React, { useContext } from 'react';

const Search = () => {
    const {searchValue, setSearchValue} = useContext(DoctorsContext)
    return (
        <div className='flex flex-row justify-center items-center gap-5'>
            <SearchField name="search" className={'py-3.75'}>
                <SearchField.Group className={'rounded-[99px] py-3.75'}>
                    <SearchField.Input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-70 px-7.5 py-3.75" 
                    placeholder="Search any doctor..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default Search;