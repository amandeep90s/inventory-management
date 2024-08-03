'use client';

import {Bell, Menu, Moon, Settings, Sun} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {useAppDispatch, useAppSelector} from "@/app/redux";
import {setIsDarkMode, setIsSidebarCollapsed} from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const {isDarkMode, isSidebarCollapsed} = useAppSelector((state) => state.global);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode))
  }

  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/* LEFT AREA */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4'/>
        </button>
        <div className='relative'>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Start type to search groups &amp; products'
            className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell className='text-gray-400' size={20}/>
          </div>
        </div>
      </div>
      {/* RIGHT AREA */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <Moon size={24} className='text-yellow-500'/> : <Sun size={24} className='text-gray-500'/>}
            </button>
          </div>
          <div className='relative'>
            <Bell size={24} className='text-gray-500'/>
            <span
              className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              3
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-1 border-gray-300 mx-3'/>
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-9 h-9'>image</div>
            <span className='font-semibold'>Amandeep</span>
          </div>
        </div>
        <Link href={'/settings'}>
          <Settings size={24} className='text-gray-500 cursor-pointer'/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
