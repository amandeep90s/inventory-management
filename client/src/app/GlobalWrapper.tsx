'use client';

import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from '@/app/redux';
import React, { useEffect } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const { isSidebarCollapsed, isDarkMode } = useAppSelector((state) => state.global);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.add('light');
		}
	}, [isDarkMode]);

	return (
		<div
			className={`flex min-h-screen w-full bg-gray-50 text-gray-900 ${
				isDarkMode ? 'dark' : 'light'
			}`}
		>
			<Sidebar />
			<main
				className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 ${
					isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'
				}`}
			>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

const GlobalWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<StoreProvider>
			<DashboardLayout>{children}</DashboardLayout>
		</StoreProvider>
	);
};

export default GlobalWrapper;
