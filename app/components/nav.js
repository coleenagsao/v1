import Link from "next/link";
import Image from "next/image";
import React from 'react';

import { navLinks } from '../config';

import { IconLogo } from "./icons";

export default function Nav(){
    return (
        <nav className="w-full border-0 py-6 lg:px-24 px-10 bg-gray-950 flex justify-between items-center">
            <div className="h-10 w-10">
                <IconLogo/>
            </div>
            <div className="flex items-center">
                <ol className="flex align-center p-0 m-0 list-none">
                    {navLinks &&
                    navLinks.map(({ url, name }, i) => (
                        <li key={i} className="mx-5 relative">
                            {name}
                        {/* <Link to={url}>{name}</Link> */}
                        </li>
                    ))}
                </ol>  
                <button className="bg-blue-600 text-white py-1 px-3 rounded mx-5">Resume</button>
            </div>

        </nav>
    )
}