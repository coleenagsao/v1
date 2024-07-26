"use client"

import Link from "next/link";
import Image from "next/image";
import { skills, navLinks, work } from '@/app/config';
import { Polygon, Arrow } from '@/app/components/icons'


export default function Experiences(){
    return (
        <section id='jobs' className="relative isolate px-6 lg:px-8 h-full">
            <div className="mx-auto max-w-4xl lg:max-w-5xl pt-20 lg:py-32">
              <div>
                {/* Section */}
                <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400">Work Experience.</span>
                </h1>
                {/* List of Experiences */}
                <div className="w-full py-4">
                    {work.map((item)=> (
                        <Link 
                            key={item} 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group md:flex md:px-4 md:py-5 md:hover:bg-blue-100/5 md:hover:ring-1 md:hover:ring-blue-100/10 md:hover:rounded-lg duration-300"
                            onClick={(e) => {
                                if (!item.url) {
                                e.preventDefault();
                                }
                            }}>
                            {/* Work Duration */}
                            <div className="w-64 lg:w-40 text-sm text-gray-400 font-medium font-mono mt-1">
                                {item.range}
                            </div>

                            <div className="lg:flex-1 flex-start py-2 md:py-0 lg:px-10 font-semibold">
                                {/* Title and Company */}
                                <div className="flex flex-wrap text-lg text-gray-300 group-hover:text-blue-300">
                                    <div href={item.url} className="flex flex-wrap">
                                        <p>{item.title}</p>
                                        <div className="ml-1 flex ">
                                            @ {item.company}
                                            <span className="inline-block h-1 w-1 md:ml-1 text-gray-300 mt-1 group-hover:text-blue-300 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300">
                                             {item.url && <Arrow className="inline-block w-full h-full"/>}
                                        </span>
                                        </div> 
                                        
                                    </div> 
                                    
                                </div>

                                {/* Description */}
                                <div className="pt-4 flex flex-col ml-4">
                                    {item.description.map((desc) => (
                                        <div key={desc} className="flex flex-2 align-top py-1">
                                            <div className="h-3 w-3 text-blue-300 mt-1">
                                                <Polygon className="w-full h-full"/>
                                            </div>
                                            
                                            <div className="pl-6 flex-1 text-base text-gray-400 font-normal max-w-4xl">
                                                {desc}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Technologies Used */}
                                    <div className="flex flex-wrap pt-3.5 pl-9">
                                        {item.skills.map((item) => (
                                            <div key={item} className="mr-3 w-max relative rounded-full px-3 my-1 py-1 text-sm leading-6 text-gray-600 ring-1 ring-blue-900 hover:ring-blue-800 text-center flex items-center justify-center">
                                            <div className="font-semibold text-xs text-blue-200 hover:text-blue-300 text-center">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {item}
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Link>
                    ))}

                  
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