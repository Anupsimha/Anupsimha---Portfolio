import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='w-[100%] h-screen -mt-11 flex flex-col justify-center items-start'>
      <div className='relative top-20 p-5 overflow-y-auto h-[80vh]'>
        <div className='mb-10'>
          <p className='text-3xl font-semibold'>About Me - Know the <span className='text-[#E79600]'>Tech</span> Side of <span className='text-[#E79600]'>Me</span></p>
          <div className="relative top-1 right-0 w-16 h-0.5 bg-white rounded-b-lg"></div>
          <div className='text-xl mt-5 w-[95%] tracking-wider'>
            <p>
              A passionate MERN developer with expertise in cross-platform applications, REST APIs, UI/UX, widgets, and state management. Skilled in crafting high-performance solutions, seamlessly integrating APIs, optimizing third-party libraries, and enhancing app responsiveness. A problem-solver with a keen eye for debugging, ensuring smooth, high-quality user experiences.
            </p>
            <p>
              An agile collaborator who stays ahead of industry trends, I bring innovation and precision to every project. If you're looking for a dedicated MERN developer to bring your vision to life and exceed expectations, let’s connect and create something extraordinary together!
            </p>
          </div>
        </div>

        <div>
          <p className='text-3xl font-semibold'><span className='text-[#E79600]'>Skilled</span> Enough to do</p>
          <div className="relative top-1 right-0 w-16 h-0.5 bg-white rounded-b-lg"></div>
          <div className='h-72 flex justify-center gap-16 mt-8'>
            {/* Box 1 */}
            <div className='w-72 flex flex-col items-center justify-center gap-5 bg-gray-500/55 cursor-pointer rounded-xl shadow-lg border-4 border-white'>
              <img src={assets.appdev} alt="app development" className='w-24 h-24'/>
              <p className='text-3xl mt-2 font-bold text-center'>App Crafting</p>
            </div>

            {/* Box 2 */}
            <div className='w-72 flex flex-col items-center justify-center gap-5 bg-gray-500/55 cursor-pointer rounded-xl shadow-lg border-4 border-white'>
              <img src={assets.webdev} alt="web development" className='w-24 h-24'/>
              <p className='text-3xl mt-2 font-bold text-center'>Web Development</p>
            </div>

            {/* Box 3 */}
            <div className='w-72 flex flex-col items-center justify-center gap-5 bg-gray-500/55 cursor-pointer rounded-xl shadow-lg border-4 border-white'>
              <img src={assets.uiux} alt="UI/UX Design" className='w-24 h-24'/>
              <p className='text-3xl mt-2 font-bold text-center'>UI/UX Design</p>
            </div>

            {/* Box 4 */}
            <div className='w-72 flex flex-col items-center justify-center gap-5 bg-gray-500/55 cursor-pointer rounded-xl shadow-lg border-4 border-white'>
              <img src={assets.backend} alt="Backend Development" className='w-24 h-24'/>
              <p className='text-3xl mt-2 font-bold text-center'>Backend Development</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About