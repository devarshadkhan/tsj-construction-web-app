
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
    
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