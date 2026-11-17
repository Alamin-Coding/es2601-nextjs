"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
	href,
	children,
	className = "",
	activeClassName = "",
	inactiveClassName = "",
	exact = false,
	onClick,
}) {
	const pathname = usePathname();

	// "/" and any link marked `exact` must match the path exactly
	const isActive =
		exact || href === "/" ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			onClick={onClick}
			aria-current={isActive ? "page" : undefined}
			className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
		>
			{children}
		</Link>
	);
}
