"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { navLinks } from '../config';
import { IconLogo } from "./icons";

export default function Nav(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            {/* Website Nav */}
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-10">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Coleen Agsao</span>
                  <div className="h-8 w-8 text-blue-300">
                    <IconLogo />
                  </div>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex lg:gap-x-12 items-center">
                {navLinks.map((item) => (
                  <a key={item.name} href={item.url} className="text-sm font-semibold leading-6 text-gray-200">
                    {item.name}
                  </a>
                ))}
                <a
                    href="#"
                    className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Resume
                </a>
              </div>
            </nav>
            {/* Mobile Nav */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Coleen Agsao</span>
                    <div className="h-8 w-8 text-blue-300">
                        <IconLogo />
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-200"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6">
                    <div className="space-y-2 py-6 text-center">
                      {navLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 "
                        >
                          <span className="hover:text-blue-300">{item.name}</span>
                        </a>
                      ))}
                    </div>
                    <div className="text-center">
                        <a
                            href="#"
                            className="rounded-md bg-blue-600 px-3.5 py-2  text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Resume
                        </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
      )
    // return (
    //     <nav className="w-full border-0 py-6 lg:px-24 px-10 bg-gray-950 flex justify-between items-center">
    //         <div className="h-10 w-10 text-blue-300 relative">
    //             <IconLogo/>
    //         </div>
    //         <div className="flex items-center">
    //             <ol className="flex align-center p-0 m-0 list-none">
    //                 {navLinks &&
    //                 navLinks.map(({ url, name }, i) => (
    //                     <li key={i} className="mx-5 relative">
    //                         {name}
    //                     {/* <Link to={url}>{name}</Link> */}
    //                     </li>
    //                 ))}
    //             </ol>  
    //             <button className="bg-blue-400 text-white py-1 px-3 rounded mx-5">Resume</button>
    //         </div>

    //     </nav>
    // )
}