"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FadeUp } from "@/app/components/utils";

export default function About(){
    return (
        <section id='about' className="relative isolate px-6 lg:px-8 h-full">
            <div className="mx-auto max-w-4xl lg:max-w-5xl pt-20 lg:py-32">
                <div>
                  {/* Section */}
                  <FadeUp>
                    <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                      <span className="text-blue-100">About Me.</span>
                    </h1>
                  </FadeUp>

                  {/* Photo Description */}
                  <div className="lg:flex">
                    {/* Description */}
                    <div className="flex-2 max-w-2xl md:max-w-3xl lg:max-w-4xl mr-6 text-md md:text-lg pt-6 md:pt-1">
                      <FadeUp>
                        <p className="lg:mt-6 leading-8 text-gray-400">
                          I’m currently in contact with {' '}
                          <Link href="https://jrrmmc.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">JRRMMC </Link> {' '} to transition my undergraduate thesis to an integrated system within the trauma health sector. I earned my BS Computer Science degree from the {' '}
                          <Link href="https://uplb.edu.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">University of the Philippines Los Banos</Link> last August. While in the university, I have worked with a {' '}
                          <Link href="https://whitewidget.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">software design and engineering agency</Link>, a {' '}
                          <Link href="https://help.dashlabs.ai/#who-are-we" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">start up</Link> through {' '} 
                          <Link href="https://www.kadakareer.com/virtual-apprenticeship/home" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">KadaKareer</Link>, and a {' '}
                          <Link href="https://www.mycode.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">coding academy for kids</Link>.
                        </p> 
                        <p className="mt-6 text-m m:text-lg leading-8 text-gray-400">
                        I enjoy planning and making things function efficiently behind the scenes. While my primary love is for backend development, I take pride in transforming designs into living, breathing realities when working on the frontend. My goal is to build applications that are robust and scalable that stand the test of time, while providing an engaging and intuitive user experience. 
                        </p>
                        <p className="mt-6 text-m m:text-lg leading-8 text-gray-400">
                        <span className="font-semibold text-gray-300">When I’m not working</span>, you’ll find me learning finance and cooking, switching up my productivity apps, eating anything with cheese, or figuring out how to make my second brain system better.
                        </p>
                    </FadeUp>
                    </div>
                    {/* Photo */}
                    <FadeUp>
                      <div className="flex-1 w-full flex justify-center lg:justify-start">
                        <div className="flex-1 p-6 max-w-xs lg:w-[400px] h-auto">
                          <div className="relative">
                            <div className="z-50 absolute inset-0 bg-blue-950 opacity-30 hover:opacity-5"></div>
                            <Image src="/me-2.jpeg" className="object-cover w-full h-full rounded-md" alt="Picture of the author" width={500} height={500} />
                          </div>
                        </div> 
                      </div>
                    </FadeUp>
                    
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
                className="relative left-0 aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-0 sm:w-[72.1875rem]"
              />
            </div>
          </section>
      )
}