'use client';

import {LucideIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({href, icon: Icon, label, isCollapsed}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center py-4 ${isCollapsed ? 'justify-center' : 'justify-start px-8'} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200' : ''}`}>
        <Icon className="w-6 h-6 !text-gray-700"/>
        <span className={`${isCollapsed ? 'hidden' : 'inline-block'} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  )
}

export default SidebarLink;