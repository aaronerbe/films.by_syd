import React from 'react';
import { FaInstagram, FaVimeo } from 'react-icons/fa';

const SocialIcons = () => {
return (
    <div className="flex gap-4 text-gray-300">
    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
        <FaInstagram size={24} />
    </a>
    <a href="https://vimeo.com" aria-label="Vimeo" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
        <FaVimeo size={24} />
    </a>
    </div>
);
};

export default SocialIcons;
