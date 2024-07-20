import React from 'react';
import { socialMedia } from '../config';

import { Icon } from './icons';

export default function Footer(){
    return(
        <footer>
            {/* Website Nav */}
            <nav aria-label="Global" className="lg:flex lg:justify-between lg:align-center grid place-items-center w-full py-10 lg:py-6 lg:px-8 space-y-3">
              
              {/* Navigation Links */}
                <div className="flex gap-x-8 items-center lg:order-2">
                    {socialMedia.map((item) => (
                    <a key={item.name} href={item.url} className="size-6 text-gray-400 hover:text-blue-300 z-10">
                        <Icon name={item.name} />
                    </a>
                    ))}
                </div>
                <div>
                    <text className="text-sm text-gray-400 lg:order-2"> 
                        © 2024 Designed & Built by Coleen Agsao 
                    </text>
                </div>
                
                

            </nav>
        </footer>
    )
}