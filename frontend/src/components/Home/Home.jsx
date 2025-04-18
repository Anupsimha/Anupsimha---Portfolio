import React from 'react'
import { useNavigate } from 'react-router-dom'

import { assets } from '../../assets/assets.js'
import Button from '../UI/Button.jsx'

const Home = () => {

  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/contact'); 
  };


  return (
    <div className='w-[100%] -mt-11 flex flex-col justify-center items-center h-screen'>
      <div className='flex items-center justify-center w-[97.5%]'>
        <div className='flex flex-col tracking-widest w-[68%] h-72'>
          <p className='text-5xl bg-gray-500/55 w-fit py-1.5 px-2 font-bold rounded-lg'>M.N. Anupsimha</p>
          <p className='text-[128px] font-semibold  font-josefin'>UNIQ<span className='text-[#E79600] font-bold'>FLARE.</span></p>
          <div className="w-[72%] grid grid-cols-2 gap-2 gap-x-[6px] -mt-4">
            <p className="text-3xl text-left bg-gray-500/55 py-1.5 rounded-lg font-bold w-fit px-6 cursor-pointer">Web Developer</p>
            <p className="text-3xl text-left bg-gray-500/55 py-1.5 rounded-lg font-bold w-fit px-6 cursor-pointer">App Developer</p>
            <p className="text-3xl text-left bg-gray-500/55 py-1.5 rounded-lg font-bold w-fit px-6 cursor-pointer">UI/UX Designer</p>
            <p className="text-3xl w-[114%] text-left bg-gray-500/55 py-1.5 rounded-lg font-bold px-6 cursor-pointer">Software Developer</p>
          </div>
        </div>
        <div className='bg-black h-80 w-[45%] rounded-3xl flex justify-center items-center'>
          <img className='h-96 w-96' src= {assets.heroImage} alt="" />
        </div>
      </div>
      <div>
        <Button onClick={handleNavigate}></Button>
      </div>
      <div className='absolute bottom-2 left-0 w-full flex justify-center items-center'>
        <p>Copyright &copy; 2025 M N Anupsimha</p>
      </div>
    </div>
  )
}

export default Home
