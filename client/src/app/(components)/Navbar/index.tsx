'use client';

import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';
import Image from 'next/image';

const Navbar = () => {
	const dispatch = useAppDispatch();
	const { isDarkMode, isSidebarCollapsed } = useAppSelector((state) => state.global);

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const toggleDarkMode = () => {
		dispatch(setIsDarkMode(!isDarkMode));
	};

	return (
		<div className="mb-7 flex w-full items-center justify-between">
			{/* LEFT AREA */}
			<div className="flex items-center justify-between gap-5">
				<button
					className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<Menu className="h-4 w-4" />
				</button>
				<div className="relative">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Start type to search groups &amp; products"
						className="w-50 rounded-lg border-2 border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none md:w-60"
					/>
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Bell className="text-gray-400" size={20} />
					</div>
				</div>
			</div>
			{/* RIGHT AREA */}
			<div className="flex items-center justify-between gap-5">
				<div className="hidden items-center justify-between gap-5 md:flex">
					<div>
						<button onClick={toggleDarkMode}>
							{isDarkMode ? (
								<Moon size={24} className="text-yellow-500" />
							) : (
								<Sun size={24} className="text-gray-500" />
							)}
						</button>
					</div>
					<div className="relative">
						<Bell size={24} className="text-gray-500" />
						<span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-red-400 px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100">
							3
						</span>
					</div>
					<hr className="border-1 mx-3 h-7 w-0 border border-solid border-gray-300" />
					<div className="flex cursor-pointer items-center gap-3">
						<Image
							src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/profile.jpg"
							alt="Profile"
							width={50}
							height={50}
							className="h-full rounded-full object-cover"
						/>
						<span className="font-semibold">Amandeep</span>
					</div>
				</div>
				<Link href={'/settings'}>
					<Settings size={24} className="cursor-pointer text-gray-500" />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
