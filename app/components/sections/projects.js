"use client"

import Link from "next/link";
import Image from "next/image";
import { skills, navLinks, work, projects } from '@/app/config';
import { Redirect, Arrow, Icon } from '@/app/components/icons'
import { FadeUp } from "@/app/components/utils";

export default function Projects(){
    return (
        <section id='projects' className="relative isolate px-6 lg:px-8 h-full">
            <div className="mx-auto max-w-4xl lg:max-w-5xl pt-20 lg:py-32">
              <div>
                {/* Section */}
                <FadeUp>
                <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400">Projects.</span>
                </h1>
                </FadeUp>
                {/* List of Experiences */}
                <div className="w-full py-4">
                    {projects.map((item)=> (
                        <FadeUp key={item}>
                            <div className="group md:flex md:px-4 md:py-6">
                                <div className="relative lg:max-w-[500px]">
                                    <div className="z-50 absolute inset-0 bg-blue-950 opacity-30 hover:opacity-5"></div>
                                    <Image src={item.image} className="object-cover w-full h-full rounded-md" alt="Screengrab of a project" width={500} height={500} />
                                </div>
                                <div className="lg:ml-9 flex-wrap justify-between">
                                    {/* Work Duration */}
                                    <div className="w-full text-sm text-blue-300 font-semibold md:text-right">
                                        {item.type}
                                    </div>

                                    {/* Title and Company */}
                                    <div className="text-2xl text-gray-300 group-hover:text-gray-300 w-full md:text-right font-bold py-4">
                                        <p>{item.title}</p> 
                                    </div>

                                    {/* Description */}
                                    <div className="flex-1 text-base text-gray-400 font-normal max-w-lg md:text-right pb-4 ">
                                        {item.description}
                                    </div>

                                    {/* Technologies Used */}
                                    <div className="flex flex-wrap md:justify-end text-right w-full pb-4 ">
                                            {item.tech.map((item) => (
                                                <div key={item} className="ml-3 w-max relative rounded-full px-3 my-1 py-1 text-sm leading-6 text-gray-600 ring-1 ring-blue-900 hover:ring-blue-800 text-center flex items-center justify-center">
                                                    <div className="font-semibold text-xs text-blue-200 hover:text-blue-300 text-center">
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {item}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    {/* Links */}
                                    <div className="flex flex-1 text-base text-gray-400 font-normal max-w-lg md:text-right md:justify-end gap-x-2 space-x-2 items-center">
                                        {item.github && 
                                        <div className="size-5">
                                            <Link key={item.title} href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                <Icon name="GitHub" />
                                            </Link>
                                        </div> }
                                        {item.external && 
                                        <div>
                                            <Link key={item.title} href={item.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                <Redirect  />
                                            </Link>
                                        </div> }
                                    </div>


                                    </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
              </div>

              <div className="md:px-4 py-10">
              <FadeUp>
                <h3 className="text-lg font-bold tracking-tight text-gray-200 lg:text-xl ">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 font-mono">Other Projects.</span>
                </h3>
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
                className="relative left-0 aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-0 sm:w-[72.1875rem]"
              />
            </div>
          </section>
      )
}