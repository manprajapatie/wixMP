import React from 'react'
import { MoveRight } from 'lucide-react'
import AnimatedButton from '../../utils/GetStartBtn'

const Section2 = () => {
  return (
    <>
      <>

        {/* Section 2 */}
        <section className="flex flex-col items-center text-center px-4 py-24 max-w-full mx-auto space-y-24">


          {/* top Data */}
          <div className="flex flex-row items-center justify-between max-w-full space-x-24">
            <div className='w-2xl'>
              <h2 className="text-3xl md:text-5xl font-bold  text-gray-900 ">Website creation, as natural as thinking</h2>
            </div>
            <div className='w-xl'>
              <p className="md:text-lg text-gray-600 text-left font-normal">Experience Wix Harmony, the AI website builder that lets you flow between instant generation and hand-crafted design</p>
              <AnimatedButton className='my-3' />
            </div>
          </div>

          {/* bottom data */}

          <div className="flex flex-row items-center justify-between max-w-full space-x-24">
            <div className='w-2xl'>
              <h2 className="text-3xl md:text-5xl font-bold  text-gray-900 ">Solutions to fuel every business move</h2>
            </div>
            <div className='w-xl'>
              <p className="md:text-lg text-gray-600 text-left font-normal">Solutions to fuel every business move
                Tap into a stack of ready-to-go business tools so your vision can grow and evolve in any which way</p>
              <AnimatedButton className='my-3' />
            </div>
          </div>

        </section>

      </>
    </>
  )
}

export default Section2
