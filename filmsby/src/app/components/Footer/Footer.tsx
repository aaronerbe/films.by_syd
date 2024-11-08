import Logo from '../Logo/Logo';
import {SocialIcons} from '../SocialIcons';

export default function Footer() {
    return (
        <div className="w-full bg-black backdrop-blur-md z-50 py-2">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Logo src="/logos/logo-lg.jpeg" alt="Films By Syd Logo" href="/" />
                <p className="text-sm text-white font-alt">
                    &copy; {new Date().getFullYear()} Films By Syd. All rights
                    reserved.
                </p>
                <SocialIcons />
            </div>
        </div>
    );
}