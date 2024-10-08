"use client"

import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/app/components/utils";

export default function Hero(){
    return (
        <div className="relative isolate px-6 lg:px-8 h-screen flex items-center">
            {/* Gradient Background */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
              {/* py-20 sm:py-48 lg:py-56 */}
              <div className="flex flex-col  mx-auto max-w-4xl lg:max-w-5xl ">
                {/* Name and Description */}
                <div>
                  {/* Greeting */}
                  <FadeUp>
                    <h1 className="font-mono tracking-tight text-gray-200 text-xl lg:text-2xl mb-6">
                        Halo!<span aria-hidden="true">👋🏻</span>
                    </h1>
                  </FadeUp>
                  
                  {/* Name */}
                  <FadeUp>
                    <h1 className="text-5xl font-bold tracking-tight text-gray-200 md:text-6xl lg:text-7xl">
                      {/* I<span aria-hidden="true">&apos;</span>m <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-400">Coleen Agsao</span>. */}
                      I<span aria-hidden="true">&apos;</span>m <span className=" text-blue-300">Coleen Agsao</span>.
                    </h1>
                  </FadeUp>
                  
                  
                  {/* Description */}
                  <FadeUp>
                    <p className="mt-6 text-m md:text-lg leading-8 text-gray-400 max-w-2xl md:max-w-3xl lg:max-w-4xl">
                      A software engineer focused on building above-average digital experiences. Currently, I’m focused on collaborating on the side with <span>
                      <Link href="https://jrrmmc.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Jose R. Reyes Memorial Medical Center (JRRMMC)</Link></span>, the leading trauma center in the Philippines, to revolutionize the use of electronic medical records in the country.
                    </p> 
                  </FadeUp>

                </div>
                
                <div className="flex sm:mb-8 pt-6 space-x-3">
                  <FadeUp>
                    <div className="sm:w-auto relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 hover:ring-gray-100/20 text-center flex items-center justify-center">
                        <a href="#" className="font-semibold text-gray-500 lg:hidden">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Bicol, PH
                        </a> 
                        <a href="#" className="font-semibold text-gray-500 hidden m:block lg:block text-center">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Bicol, Philippines
                        </a>
                    </div>
                  </FadeUp>
                  <FadeUp>
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 hover:ring-gray-100/20 text-center align-middle flex items-center justify-center">
                        <a href="#" className="font-semibold text-gray-500 lg:hidden">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Backend
                        </a> 
                        <a href="#" className="font-semibold text-gray-500 hidden m:block lg:block text-center">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Backend Development
                        </a>
                    </div>
                  </FadeUp>
                  <FadeUp>
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 text-center flex items-center justify-center hover:ring-gray-100/20">
                      
                        <div className="font-semibold text-gray-500  hover:cursor-cheese  ">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Turophile
                        </div>  
                    </div>
                  </FadeUp>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              >
              <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"  />
              </div>
        </div>
      )
}