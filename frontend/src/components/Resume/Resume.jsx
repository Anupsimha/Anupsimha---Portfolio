import React from 'react'
import { assets } from '../../assets/assets.js'
import toast from 'react-hot-toast';

const Resume = () => {
  return (
    <div className='w-[100%] h-screen -mt-11 flex flex-col justify-center items-start'>
      <div className='relative left-6 top-20 w-[97.5%]'>
        <p className='text-3xl font-semibold'>Resume - Professional <span className='text-[#E79600]'>Profile</span></p>
        <div className="relative top-1 right-0 w-14 h-0.5 bg-white rounded-b-lg"></div>
        <div className='overflow-y-auto h-[65vh] mt-5'>
          <div className="text-white px-3 -py-1 rounded-xl w-full max-w-md mt-3">
            <h2 className="text-3xl font-thin flex items-start gap-2">
              <span className="rounded-full">
                <img src={assets.education} alt="education" className='h-11 w-11' />
              </span>
              Education
            </h2>
            <div className="flex flex-col gap-2 relative left-5 -top-1 border-l-2 border-white pl-0">
              <div className="mb-6 relative top-2">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                <h3 className="text-xl font-bold relative left-3 top-2">Chitkara University</h3>
                <p className="text-xl relative left-3 top-2">Bachelor of Engineering - CSE</p>
                <span className="text-orange-400 text-lg font-bold relative left-3 top-3">2023-2027</span>
              </div>
              <div className="mb-6 relative top-2">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                <h3 className="text-xl font-bold relative left-3 top-2">N.M.K.R.V PU College</h3>
                <p className="text-xl relative left-3 top-2">Pre-University Course - PCMC's</p>
                <span className="text-orange-400 text-lg font-bold relative left-3 top-3">2020-2022</span>
              </div>
            </div>
          </div>
          <div className="text-white px-3 py-4 rounded-xl w-full max-w-md mt-3">
            <h2 className="text-3xl font-thin flex items-start gap-2">
              <span className="rounded-full">
                <img src={assets.experience} alt="education" className='h-11 w-11' />
              </span>
              Technical Experience
            </h2>
            <div className="flex flex-col gap-2 relative left-5 -top-1 border-l-2 border-white pl-0">
              <div className="mb-6 relative top-2">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                <h3 className="text-xl font-bold relative left-3 top-2">DSA Learner – Self-Paced Practice </h3>
                <span className="text-orange-400 text-lg font-bold relative left-3 top-3">Sept. 2023 – Present</span>
              </div>
              <div className="mb-6 relative top-2">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                <h3 className="text-xl font-bold relative left-3 top-2">MERN Stack Developer</h3>
                <span className="text-orange-400 text-lg font-bold relative left-3 top-3">Sept. 2023 – Present</span>
              </div>
            </div>
          </div>  
        </div>
        <div className='fixed bottom-5 right-12 flex gap-2 z-10'>
          {/* Download CV Button */}
          <button
            className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
            onClick={() => toast.error("Not Uploaded Yet" , {duration: 1000})}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
            </svg>
            CV File
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              Download
            </div>
          </button>
          {/* Download Resume Button */}
          <a
            href="../../../M_N_Anupsimha.pdf"
            download
            className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
            </svg>
            Resume
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              Download
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
