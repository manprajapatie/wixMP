import React from 'react'
import wix from '../../../public/logo/wix.png'
import { ChevronDown, Globe, GlobeCode } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm'>

        {/* ----------- Left Side ----------- */}
        <div className='flex items-center space-x-8' >

          {/* ----------- Logo ----------- */}
          <div className='flex items-center cursor-pointer'>
            <img src={wix} alt="wix" className='w-20 object-contain' />
          </div>

          {/* ----------- Navigation ----------- */}
          <nav className='flex items-center space-x-6 text-sm font-medium text-gray-700' >

            <div className='flex items-center cursor-pointer hover:text-black' >Product <ChevronDown size={14} className="text-gray-500" /> </div>
            <div className='flex items-center cursor-pointer hover:text-black' >Solution <ChevronDown size={14} className="text-gray-500" /> </div>
            <div className='flex items-center cursor-pointer hover:text-black' >Resources <ChevronDown size={14} className="text-gray-500" /> </div>
            <div className='flex items-center cursor-pointer hover:text-black' >Domains <ChevronDown size={14} className="text-gray-500" /> </div>
            <div className='flex items-center cursor-pointer hover:text-black' >Pricing  </div>
            <div className='flex items-center cursor-pointer hover:text-black' >wix Studio  </div>
            <div className='flex items-center cursor-pointer hover:text-black' >Enterprise  </div>
          </nav>
        </div>


        {/* ----------- Right Side ----------- */}
        <div className='flex items-center space-x-5'>


          {/* ----------- Webside icon ----------- */}
          <button className="text-gray-600 hover:text-blue-700 p-1 cursor-pointer flex items-center" >
            <Globe size={20} />
          </button>

          {/* --------------- Login Btn ----------- */}
          <button className="text-sm font-medium text-gray-800 hover:text-blue-700 cursor-pointer px-3 py-2">
            Log In
          </button>


          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 hover:pointer">
            Get Started
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
