'use client';

import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href || (pathname === '/' && href === '/dashboard');

	return (
		<Link href={href}>
			<div
				className={`flex cursor-pointer items-center py-4 ${isCollapsed ? 'justify-center' : 'justify-start px-8'} gap-3 transition-colors hover:bg-blue-100 hover:text-blue-500 ${isActive ? 'bg-blue-200' : ''}`}
			>
				<Icon className="h-6 w-6 !text-gray-700" />
				<span className={`${isCollapsed ? 'hidden' : 'inline-block'} font-medium text-gray-700`}>
					{label}
				</span>
			</div>
		</Link>
	);
};

export default SidebarLink;
