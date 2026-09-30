import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>


        {/* center section */}
        <div>
            <p className='font-medium text-xl mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>



        {/* right section */}
        <div>
            <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1 234 567 890</li>
                <li>info@company.com</li>
            </ul>
        </div>


      </div>
      <div>
        {/* copyright  */}
        <hr />
        <p className='py-5 text-sm text-center '>&copy; 2026 Prescripto. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
