"use client"

import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
            {/* Gradient Background */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>

            <div className="mx-auto max-w-4xl lg:max-w-5xl py-32 sm:py-48 lg:py-56 ">
              {/* Name and Description */}
              <div>
                {/* Greeting */}
                <h1 className="font-mono tracking-tight text-gray-200 text-xl lg:text-2xl mb-6">
                  Halo!<span aria-hidden="true">👋🏻</span>
                </h1>
                {/* Name */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-200 md:text-6xl lg:text-7xl">
                  I<span aria-hidden="true">&apos;</span>m <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-400">Coleen Agsao</span>.
                </h1>
                {/* Description */}
                <p className="mt-6 text-lg m:text-xl leading-8 text-gray-400 max-w-2xl md:max-w-3xl lg:max-w-4xl">
                  A software engineer focused on building above-average digital experiences. Currently, I’m focused on building a national trauma registry on the side with  <span>
                  <Link href="https://pcs.org.ph/" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer" >Philippine College of Surgeons</Link>
                  </span> and <span>
                  <Link href="https://jrrmmc.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Jose R. Reyes Memorial Medical Center</Link>
                  </span>.
                </p>

              </div>
              <div className="hidden sm:mb-8 sm:flex py-6 space-x-3">
                <div className="sm:w-auto relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 hover:ring-gray-100/20">
                  <a href="#" className="font-semibold text-gray-500">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Bicol, Philippines
                  </a>
                </div>
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 hover:ring-gray-100/20">
                  <a href="#" className="font-semibold text-gray-500">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Backend Development
                  </a>
                </div>
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-200/10 hover:ring-yellow-100">
                  <a href="#" className="font-semibold text-gray-500 hover:text-yellow-200">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Turophile
                  </a>
                </div>
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
          </div>
      )
}