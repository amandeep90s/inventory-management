'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import {
	Archive,
	CircleDollarSign,
	Clipboard,
	Layout,
	Menu,
	SlidersHorizontal,
	User,
} from 'lucide-react';
import React from 'react';
import SidebarLink from './SidebarLink';
import Image from 'next/image';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const { isSidebarCollapsed } = useAppSelector((state) => state.global);

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

	return (
		<div className={sidebarClassNames}>
			{/* TOP LOGO */}
			<div
				className={`flex items-center justify-between gap-3 pt-8 md:justify-normal ${isSidebarCollapsed ? 'px-5' : 'px-8'}`}
			>
				<Image
					src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png"
					alt="edstock-logo"
					width={27}
					height={27}
					className="w-8 rounded"
				/>
				<h1 className={`text-2xl font-extrabold ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
					ESTOCK
				</h1>
				<button
					className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
					onClick={toggleSidebar}
				>
					<Menu className="h-4 w-4" />
				</button>
			</div>

			{/* LINKS */}
			<div className="mt-8 flex-grow">
				<SidebarLink
					href={'/dashboard'}
					icon={Layout}
					label={'Dashboard'}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href={'/inventory'}
					icon={Archive}
					label={'Inventory'}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href={'/products'}
					icon={Clipboard}
					label={'Products'}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink href={'/users'} icon={User} label={'Users'} isCollapsed={isSidebarCollapsed} />
				<SidebarLink
					href={'/settings'}
					icon={SlidersHorizontal}
					label={'Settings'}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href={'/expenses'}
					icon={CircleDollarSign}
					label={'Expenses'}
					isCollapsed={isSidebarCollapsed}
				/>
			</div>

			{/* FOOTER */}
			<div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
				<p className="text-center text-xs text-gray-500">&copy; 2024 ESTOCK</p>
			</div>
		</div>
	);
};

export default Sidebar;
