//import Logo from '../Logo/Logo';
import NavLinks from './NavLinks';
import MobileNavLinks from './MobileNavLinks';

export default function Navbar() {
return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-md z-50 py-2">
    <div className="relative container mx-auto flex items-center justify-between px-4 min-h-10">
        {/* Left-aligned Logo */}
        <div className="flex-shrink-0">
        {/*<Logo src="/logos/logo-lg.jpeg" alt="Films By Syd Logo" href="/" />*/}
        </div>

        {/* Centered NavLinks for Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <NavLinks />
        </div>

        {/* Right-aligned Hamburger Icon for Mobile */}
        <div className="md:hidden flex justify-center items-center w-full">
        <MobileNavLinks />
        </div>
    </div>
    </nav>
);
}
