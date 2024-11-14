"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
{ name: "Home", href: "/" },
{ name: "Portfolio", href: "/portfolio" },
{ name: "Contact", href: "/contact" },
{ name: "Packages", href: "/packages" },
{ name: "About", href: "/about" },
];

const MobileNavLinks = () => {
const [menuOpen, setMenuOpen] = useState(false);
const pathname = usePathname();

const toggleMenu = () => setMenuOpen((prev) => !prev);

return (
    <div className="relative flex justify-center items-center w-full">
    {/* Centered Hamburger / Close Icon */}
    <button
        onClick={toggleMenu}
        className="text-foreground focus:outline-none z-50"
        aria-label="Toggle menu"
    >
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
    </button>

    {/* Full-Screen Mobile Menu Overlay */}
    {menuOpen && (
        <div className="fixed inset-0 bg-background bg-opacity-90 flex flex-col items-center pt-20 h-screen space-y-8 text-foreground text-xl font-alt z-40">
        {links.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            className={`hover:text-gray-300 ${pathname === link.href ? "font-bold" : ""}`}
            onClick={() => setMenuOpen(false)} // Close menu on link click
            >
            {link.name}
            </Link>
        ))}
        </div>
    )}
    </div>
);
};

export default MobileNavLinks;
