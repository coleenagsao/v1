"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { navLinks, socialMedia } from '../config';
// import { IconLogo, Icon } from "/icons";

import { FadeUp, FadeDown } from "@/app/components/utils";

export default function Nav(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // hide nav when scroll down, set to visible when scroll up
    
    if (typeof window !== 'undefined') {
      var prevScrollpos = window.pageYOffset;

      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        
        if (currentScrollPos == 0) {
          document.getElementById("nav").style.backgroundColor = "rgba(3,7,18, 0)";
          document.getElementById("nav").style.transitionDuration = "500ms";
        }
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("nav").style.top = "0";
        } else {
          document.getElementById("nav").style.top = "-75px";
          document.getElementById("nav").style.backgroundColor = "rgba(3,7,18, 0.75)";        
        }
  
        prevScrollpos = currentScrollPos;
      }
    }

    

    return (
        <header id="nav" className="fixed inset-x-0 top-0 z-50">
            {/* Website Nav */}
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-10">
              <div>
                <FadeUp>
                <a href="#">
                  <span className="sr-only">Coleen Agsao</span>
                  <div className="h-8 w-8 text-blue-300">
                    {/* <IconLogo /> */}
                  </div>
                </a>
                </FadeUp>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex lg:gap-x-12 items-center">
                {navLinks.map((item) => (
                  <FadeDown key={item.name}>
                  <Link href={item.url} className="text-sm font-semibold leading-6 text-gray-200 hover:text-blue-300">
                    {item.name}
                  </Link>
                  </FadeDown>
                ))}
                <FadeDown>
                <div className="relative rounded px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-blue-900 hover:ring-blue-400">
                  <a href="/AgsaoCT_resume.pdf" 
                        download="AgsaoCT_resume.pdf" className="font-semibold text-blue-200 hover:text-blue-300">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Resume
                  </a>
                </div>
                </FadeDown>
                
              </div>

              {/* Social Media Links */}
              <div className="hidden lg:flex gap-x-8 px-6">
                    {socialMedia.map((item) => (
                    <Link key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="size-5 text-gray-300 hover:text-blue-300 z-10">
                      <FadeDown>
                        {/* <Icon name={item.name} /> */}
                      </FadeDown>
                        
                    </Link>
                    ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Open main menu</span>
                  <FadeDown>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </FadeDown>
                </button>
              </div>
            </nav>
            {/* Mobile Nav */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-screen overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Coleen Agsao</span>
                    <div className="h-8 w-8 text-blue-300">
                        {/* <IconLogo /> */}
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
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 "
                        >
                          <span className="hover:text-blue-300">{item.name}</span>
                        </a>
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <button className="relative rounded text-center px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-blue-900 hover:ring-blue-400">
                        <a href="/AgsaoCT_resume.pdf" 
                              download="AgsaoCT_resume.pdf" className="font-semibold text-blue-200 hover:text-blue-300">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Resume
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
            
          </header>
      )
}