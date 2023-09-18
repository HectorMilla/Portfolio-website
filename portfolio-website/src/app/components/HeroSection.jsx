'use client';
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hector',
                                1600, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Software Engineer',
                                1600,
                                'A Full-Stack Developer',
                                1600,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        I am a software engineer and life long learner
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate=800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py2'>Download Resume</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>

                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        className='rounded-full'
                        width={300} s
                        height={300}
                    />

                </div>
            </div>
        </section>
    )
}

export default HeroSection

// <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative">
// absolute transform -translate-x-1/5 -trasnlate-y-1/5 top-1/2 