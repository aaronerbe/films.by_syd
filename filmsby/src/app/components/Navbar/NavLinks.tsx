"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu open/close

const links = [
{ name: "Home", href: "/" },
{ name: "Portfolio", href: "/portfolio" },
{ name: "Contact", href: "/contact" },
{ name: "Packages", href: "/packages" },
{ name: "About", href: "/about" },
];

const NavLinks = () => {
const [menuOpen, setMenuOpen] = useState(false);
const pathname = usePathname();

const toggleMenu = () => setMenuOpen((prev) => !prev);

return (
    <div className="relative">
    {/* Hamburger Icon for Mobile */}
    <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
    >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>

    {/* Links for Desktop and Mobile */}
    <div
        className={clsx(
        "absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent",
        "md:flex md:flex-row gap-6 md:gap-20 items-center",
        {
            "flex flex-col": menuOpen,
            "hidden": !menuOpen && !menuOpen && "md:flex",
        }
        )}
    >
        {links.map((link) => (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
            "hover:text-gray-300 text-white transition-colors text-l font-alt",
            {
                "text-white font-bold hover:text-gray-300": pathname === link.href,
            }
            )}
            onClick={() => setMenuOpen(false)} // Close menu on click (mobile)
        >
            {link.name}
        </Link>
        ))}
    </div>
    </div>
);
};

export default NavLinks;
