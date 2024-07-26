"use client"

import Link from "next/link";
import Image from "next/image";
import { skills, navLinks } from '@/app/config';

export default function Skills(){
    return (
        <section id="skills" className="relative isolate px-6 lg:px-8 h-screen">
            {/* Gradient Background */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div/>
              </div>

            <div className="mx-auto max-w-4xl lg:max-w-5xl py-32 sm:py-48 lg:py-56 ">
              {/* Name and Description */}
              <div>
                {/* Greeting */}
                <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400">Skills.</span>
                </h1>
                
                {/* Description */}
                <p className="mt-6 text-m md:text-lg leading-8 text-gray-400 max-w-2xl md:max-w-3xl lg:max-w-4xl">
                    Here are a few technologies I have worked with in the past:  
                </p>
              </div>
              <div className="md:ml-4 mt-2">
              {Object.entries(skills).map(([key, value]) => (
                    <div key={key} className="md:flex items-center space-y-4">
                        <div className="mr-5 mt-4 text-gray-200 font-semibold ">
                            {key}:
                        </div>
                        <span className="flex flex-wrap">
                            {value.map((item) => (
                                <div key={item} className="my-1 mr-3 w-max relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-blue-900 hover:ring-blue-800 text-center flex items-center justify-center">
                                <div className="font-semibold text-blue-200 hover:text-blue-300 text-center">
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {item}
                                </div>
                              </div>
                            ))}
                        </span>
                    </div>

                ))}
              </div>
              <div className="flex sm:mb-8 pt-6 space-x-3">
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
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </section>
      )
}