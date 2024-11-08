"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
{ name: "Home", href: "/" },
{ name: "Portfolio", href: "/portfolio" },
{ name: "Contact", href: "/contact" },
{ name: "Packages", href: "/packages" },
];

const NavLinks = () => {
const pathname = usePathname();

return (
    <div className="flex gap-20">
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
        >
            {link.name}
        </Link>
    ))}
    </div>
);
};

export default NavLinks;
