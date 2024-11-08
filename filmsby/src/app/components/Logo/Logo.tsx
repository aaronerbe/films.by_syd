import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
src?: string;
alt?: string;
href?: string;
text?: string;
className?: string;
}

const Logo: React.FC<LogoProps> = ({
src,
alt,
href = '/',
text = 'Films By Syd',
className = '',
}) => {
return (
    <Link href={href} aria-label={alt || text} className={`flex items-center ${className}`}>
    {src ? (
        <Image
        src={src}
        alt={alt || text}
        width={50}
        height={50}
        className="object-contain" // Ensures proper scaling
        />
    ) : (
        <span className="text-lg font-bold text-gray-900">{text}</span>
    )}
    </Link>
);
};

export default Logo;
