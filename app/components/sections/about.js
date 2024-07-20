"use client"

import Link from "next/link";
import Image from "next/image";

export default function About(){
    return (
        <section id='about' className="relative isolate px-6 lg:px-8 h-screen">
            <div className="mx-auto max-w-4xl lg:max-w-5xl pt-20 lg:py-28 ">
              <div>
                {/* Section */}
                <h1 className="text-xl font-bold tracking-tight text-gray-200 lg:text-2xl font-mono">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400">About Me</span>.
                </h1>
                {/* Photo Description */}
                <div className="lg:flex">
                  {/* Photo */}
                  <div className="pt-6 lg:order-2">
                    {/* <Image
                      src="/me.jpg"
                      width={500}
                      height={300}
                      alt="Picture of the author"
                    /> */}
                    
                  </div>
                  {/* Description */}
                  <div className="lg:order-1 max-w-lg">
                    <p className="lg:mt-6 text-m m:text-lg leading-8 text-gray-400">
                    I’m currently a freelance full-stack web developer working with {' '} 
                    <Link href="https://pcs.org.ph/" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer" >PCS</Link> {' '} and {' '} 
                    <Link href="https://jrrmmc.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">JRRMMC </Link> {' '} to revolutionize the use of electronic medical records in the Philippines as I am awaiting graduation at the {' '}
                    <Link href="https://uplb.edu.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">University of the Philippines Los Banos</Link>. While studying, I have worked with a {' '}
                    <Link href="https://whitewidget.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">software design and engineering agency</Link>, a {' '}
                    <Link href="https://help.dashlabs.ai/#who-are-we" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">start up</Link> through {' '} 
                    <Link href="https://www.kadakareer.com/virtual-apprenticeship/home" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">KadaKareer</Link>, and a {' '}
                    <Link href="https://www.mycode.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">coding academy for kids</Link>.
                  </p>
                  <p className="mt-6 text-m m:text-lg leading-8 text-gray-400">
                  I enjoy planning and making things function efficiently behind the scenes. While my primary love is for backend development, I take pride in transforming designs into living, breathing realities when working on the frontend. My goal is to build applications that are robust and scalable that stand the test of time, while providing an engaging and intuitive user experience. 
                  </p>
                  <p className="mt-6 text-m m:text-lg leading-8 text-gray-400">
                  <span className="font-semibold">When I’m not working</span>, you’ll find me learning how to cook, organizing my room, eating anything with cheese, or figuring out how to make my second brain system better.
                  </p>
                  </div>
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