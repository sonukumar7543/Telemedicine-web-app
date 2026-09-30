import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify--center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome To Prescripto, Your Trusted Partner in Managing Your helthcares Need Conveniently And Efficiently.
            At Prescripto, We Understand The Challenges individuals face When it comes to schedule Doctor 
            Appointments And Managing Their Helth Records.
          </p>
          <p>
            Prescripto is Commitled to Excllence in Helthcare Technolgy. We Continously Strive To Enhance Oor 
            Platform,Integrating The Latest Advancement To Improve User Experience And Deliver Superior Services.
            Whether You're Booking Your First Appointment Or Managing Ongoing Care. Prescripto Is Here To You Every Step
            Of The Way
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our Vision At Prescripto Is To create A Seamless Helthcare Experience for Every User. We Aim To Bridge The 
            Gap Between Patent And Helthcare Providers. Making it Easier For you To Access The Care You Need,When You Need it.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className=''>EFFICIENCT:</b>
          <p>Stramlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Acess To A Network of Trusted Helthcare Professionals In Your Area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Helth.</p>
        </div>
      </div>
    </div>
  )
}

export default about
