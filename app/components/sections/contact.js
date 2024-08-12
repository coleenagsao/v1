"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FadeUp } from "@/app/components/utils";

export default function Contact(){
    return (
        <section id='contact' className="relative isolate px-6 lg:px-8 ">
            <div className="mx-auto max-w-4xl lg:max-w-5xl py-28 md:py-44">
                  {/* Section */}
                  <FadeUp> 
                    <div className="ml-3 flex-2 md:pt-5 space-y-4">
                        <h1 className="font-extrabold text-2xl lg:text-3xl flex justify-center w-full">
                            <p className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-300">Get in touch</p><span aria-hidden="true">👋🏻</span>
                        </h1>
                        <p className="text-xl text-gray-300 text-center leading-8">
                            I am seeking <span className="font-bold text-blue-300">work opportunities</span> that has a strong learning environmment. I also welcome <span className="font-bold text-blue-300">web application commissions</span> and excited to collaborate on any innovative projects. Feel free to reach out!
                        </p> 
                        
                        <div className="flex justify-center w-full py-4">
                            <Link 
                                href='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:coleentherese.agsao@gmail.com";
                                    e.preventDefault();
                                }}>
                                <div className="rounded px-5 py-3 text-sm leading-6 ring-1 ring-blue-900 hover:ring-blue-400 font-semibold text-blue-200 hover:text-blue-300 max-w-fit">
                                    Message me
                                </div>
                            </Link>
                        </div>
                    </div>
                    </FadeUp>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-20rem)] -z-20 transform-gpu overflow-hidden blur-3xl md:top-[calc(100%-38rem)]"
            >
              <div
                style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </section>
      )
}