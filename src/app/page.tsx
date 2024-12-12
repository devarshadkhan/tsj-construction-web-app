
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className=''>
      <nav className="py-8 flex justify-between items-center pl-6 pr-6 lg:pl-16 lg:pr-20">
        <h1 className="text-2xl font-bold text-blue-900">Logo</h1>
        <button
          className="lg:hidden flex flex-col space-y-1"
          // onClick={toggleMenu}
        >
           {/* <FaBars className="text-2xl text-blue-900" />  */}
        </button>
        <ul
          className={` absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:flex lg:space-x-6 font-semibold text-gray-400 z-10`}
        >
          <li className="p-4 lg:p-0">
            <a href="#home" className="hover:text-blue-900">
              Home
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#about" className="hover:text-blue-900">
              About us
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#work" className="hover:text-blue-900">
              Work
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#info" className="hover:text-blue-900">
              Info
            </a>
          </li>
          <li className="p-4 lg:p-0 text-blue-900">
            <a href="#contact" className="hover:text-gray-400">
              Contact us
            </a>
          </li>
        </ul>
      </nav>

      <section className="py-12 px-12 container mx-auto">
        <div className="  flex flex-col lg:flex-row items-center px-4 justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-6xl font-extrabold mb-4 text-blue-950">
              Oops! <br />
              <span className="font-bold text-4xl">Under construction</span>
            </h2>
            <p className="text-gray-600 mb-6">
            We&apos;re hard at work building something amazing for you! Our new website is under construction and will be launching soon. Stay tuned for updates, and thank you for your patience as we prepare to bring you an exceptional experience.
            </p>
           
          </div>
            <Image
              src="/underImage.jpg"
              alt="Hero"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
      
      </section>
    </div>
    </>
  )
}

export default Home