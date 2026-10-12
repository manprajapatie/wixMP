import { MoveRight } from 'lucide-react'
import React from 'react'

const Section1 = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 max-w-5xl mx-auto">

                {/* ---------------- Main heading ------------- */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl  text-gray-900 mb-6 flex flex-col">
                    <span className='mb-5'> Create your future on the</span>
                    <span> leading website builder</span>
                </h1>

                {/* ------------ Description --------------- */}
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 font-normal">
                    Wix Harmony is where you create a site that means business.
                </p>

                {/* --------------- Get Started Btn -------------- */}
                <button className="group flex items-center gap-2 bg-black text-white md:text-lg font-medium px-8 py-4 rounded-full shadow-md transition-all duration-200 mb-3 cursor-pointer">
                    <span>
                        Get Started
                    </span>

                    <div className='transition-transform duration-200
                    opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'>
                        <MoveRight size={20} />
                    </div>
                </button>

                {/* ------------- btn bottom text ----------- */}
                <p className="text-xs text-gray-500 mb-16">
                    Start for free. No credit card required.
                </p>

                {/* ------------- user Count -------------- */}
                <div className="flex justify-around py-7  w-full max-w-lg border-2 border-solid border-blue-100 rounded-2xl ">
                    <div className="flex flex-col items-center ">
                        <span className="text-3xl md:text-4xl  text-blue-700 tracking-tight mb-1">300M+</span>
                        <span className="text-sm text-gray-500 font-medium">Sites built on Wix</span>
                    </div>
                    <div className="w-0.5 h-12 bg-blue-200"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl  text-blue-700 tracking-tight mb-1">90K+</span>
                        <span className="text-sm text-gray-500 font-medium">Sites created daily</span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Section1
