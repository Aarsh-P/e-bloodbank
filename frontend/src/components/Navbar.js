import React from 'react'
import {NavLink}from 'react-router-dom';


function Navbar() {
  return (
    <div className='w-screen overflow-hidden scroll-mx-0'>
      <div className='bg-red-700 w-screen flex flex-row justify-center flex-wrap min-h-12'>
        <div className='w-[1100px] flex justify-between mt-2 text-white flex-wrap'>
            <div className='flex gap-2'>
            <img  className='h-8 w-8'src="../second-icons/microscope.png" alt="" />
           
            <div className='text-xl'>Blood Donation</div>
            </div>
            
            <div className='flex gap-10 flex-wrap'>
                <div className='hover:text-green-400'><NavLink className="nav-link" id="Home" aria-current="page" to="/">Home</NavLink></div>
                <div className='hover:text-green-400'><NavLink className="nav-link" id="About" to="/Add">Add Request</NavLink></div>
                <div className='hover:text-green-400'><NavLink className="nav-link" id="About" to="/About">About Us</NavLink></div>
                <div className='hover:text-green-400'><NavLink className="nav-link" id="Login" aria-current="page" to="/Login">Login</NavLink></div>
                <div className='hover:text-green-400'><NavLink className="nav-link" id="SignUp" aria-current="page" to="/SignUp">Sign Up</NavLink></div>
            </div>
        </div>
            
      </div>
    </div>
  )
}

export default Navbar