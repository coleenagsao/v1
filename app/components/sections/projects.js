"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { skills, navLinks, work, featured, projects } from '@/app/config';
import { Github, ExternalLink } from "lucide-react";
import { FadeUp } from "@/app/components/utils";

export default function Projects(){
    const min = 4;
    const [count, setCount] = useState(min); 

    return (
        <section id='projects' className="relative isolate px-6 lg:px-8 py-20">
            <div className="mx-auto max-w-4xl lg:max-w-5xl">
                <div 
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-120rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-120rem)]">
                    <div
                        style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80c8ff] to-[#89a8fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"/>
                </div>
                
              <div>
                {/* Section */}
                <FadeUp>
                <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                  <span className="text-blue-200">Projects.</span>
                </h1>
                </FadeUp>
                {/* List of Featured Projects */}
                <div className="w-full py-4">
                    {featured.map((item, index)=> (
                        <FadeUp key={index}>
                            <div className="group md:flex md:px-4 py-3 md:py-6">
                                <div className="relative lg:max-w-[500px]">
                                    <div className="z-50 absolute inset-0 bg-blue-950 opacity-30 hover:opacity-5"></div>
                                    <Image src={item.image} className="object-cover w-full h-full rounded-md" alt="Screengrab of a project" width={500} height={500} />
                                </div>
                                <div className="py-4 md:py-0 md:ml-9 flex-wrap justify-between">
                                    {/* Project Type */}
                                    <div className="w-full text-sm text-blue-300 font-semibold md:text-right">
                                        {item.type}
                                    </div>

                                    {/* Title of Project */}
                                    <div className="flex text-xl md:text-2xl text-gray-300 group-hover:text-gray-300 w-full md:text-right md:justify-end font-bold py-2 lg:py-4 items-center">
                                        <p>{item.title}</p> 
                                        {/* Links */}
                                        <div className="md:hidden flex text-base text-gray-400 font-normal max-w-lg gap-x-2 space-x-2 items-start px-4">
                                            {item.github && 
                                            <div>
                                                <Link key={item.title} href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                    <Github className="w-5 h-5"/>
                                                </Link>
                                            </div> }
                                            {item.external && 
                                            <div>
                                                 <Link key={item.title} href={item.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                    <ExternalLink className="w-5 h-5"/> 
                                                </Link>
                                            </div> }
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="flex-1 text-base text-gray-400 font-normal max-w-lg md:text-right pb-4 ">
                                        {item.description}
                                    </div>

                                    {/* Technologies Used */}
                                    <div className="flex flex-wrap md:justify-end text-right w-full pb-3 md:pb-4 ">
                                            {item.tech.map((item) => (
                                                <div key={item} className="ml-0 mr-3 md:ml-3 md:mr-0 w-max relative rounded-full px-3 my-1 py-1 text-sm leading-6 text-gray-600 ring-1 ring-blue-900 hover:ring-blue-800 text-center flex items-center justify-center">
                                                    <div className="font-semibold text-xs text-blue-200 hover:text-blue-300 text-center">
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {item}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    {/* Links */}
                                    <div className="hidden md:flex flex-1 text-base text-gray-400 font-normal max-w-lg md:text-right md:justify-end gap-x-2 space-x-2 items-center">
                                        {item.github && 
                                        <div>
                                            <Link key={item.title} href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 w-2 h-2 hover:text-blue-300">
                                                <Github className="w-6 h-6"/>
                                            </Link>
                                         </div> }
                                        {item.external && 
                                        <div>
                                            <Link key={item.title} href={item.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                <ExternalLink className="w-6 h-6"/> 
                                            </Link>
                                        </div> }
                                    </div>


                                </div>
                            </div>
                        </FadeUp>
                    ))}
    
                </div>
              </div>

              <div className="md:px-4">
                <FadeUp>
                    <h3 className="text-xl font-bold tracking-tight lg:text-xl md:py-4 text-blue-100 font-mono">
                        Other Projects.
                    </h3>
                </FadeUp>

                {/* List of Other Projects */}
                {projects.slice(0,count).map((item, index) => (
                    <FadeUp key={index}> 
                        <div className="flex-wrap py-4 space-y-2.5">
                            {/* Title of Project */}
                            <div className="flex text-lg text-gray-300 group-hover:text-gray-300 w-full md:text-right font-bold items-center flex-wrap space-x-2 ">
                                <span className="mr-2 md:mr-3">{item.title}</span> 

                                {item.github && 
                                        <div>
                                            <Link key={item.title} href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                <Github className="w-5 h-5"/>
                                            </Link>
                                         </div> }
                                        {item.external && 
                                        <div>
                                            <Link key={item.title} href={item.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
                                                <ExternalLink className="w-5 h-5"/> 
                                            </Link>
                                        </div> }
                            
                               
                            </div>

                            {/* Description */}
                            <div className="flex-1 text-base text-gray-400 font-normal">
                                {item.description}
                            </div>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap w-full">
                                {item.tech.map((item) => (
                                    <div key={item} className="mr-3 w-max relative rounded-full px-3 my-1 py-1 text-sm leading-6 text-gray-600 ring-1 ring-blue-900 hover:ring-blue-800 text-center flex items-center justify-center">
                                        <div className="font-semibold text-xs text-blue-200 hover:text-blue-300 text-center">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                                {item}
                                        </div>
                                    </div>
                                ))}
                           </div>

                        </div>       
                    </FadeUp>
                ))}  
                
                <div className="relative w-full flex justify-center my-3 z-20">
                    {count == min && <FadeUp><div 
                        className="rounded px-5 py-3 text-sm leading-6 ring-1 ring-blue-900 hover:ring-blue-400 font-semibold text-blue-200 hover:text-blue-300 max-w-fit" 
                        onClick={() => {
                            setCount(projects.length)
                        }}>
                        Show more
                    </div> </FadeUp>}
                    {count == projects.length && <FadeUp><div 
                        className="rounded px-5 py-3 text-sm leading-6 ring-1 ring-blue-900 hover:ring-blue-400 font-semibold text-blue-200 hover:text-blue-300 max-w-fit" 
                        onClick={() => {
                            setCount(min)
                        }}>
                        Show less
                    </div></FadeUp>}
                </div>   
              </div>

            </div>
            <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]">
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