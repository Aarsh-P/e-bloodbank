import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Login = () => {

  const [userType, setUserType] = useState('hospital');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  }

  return (
    
    <div className='flex justify-center h-[525px] items-center'>
      <div className=' w-[950px] flex gap-[150px] '>
        <form method='post' className='w-[330px] h-[400px] bg-red-500 border-solid border-2 border-black rounded-3xl flex flex-col gap-4 text-justify ml-10'>
          <div className='text-center text-white text-xl mt-3'><h3>Log In</h3></div>
          <div className=' flex flex-col gap-4 ml-6'>
            <div className='text-white flex gap-3 ml-6'>
              <input type="radio"
                name='user'
                value='hospital'
                checked={userType === 'hospital'}
                onChange={handleUserTypeChange} />As Hospital
              <input type="radio" name='user' value='donor'
                checked={userType === 'donor'}
                onChange={handleUserTypeChange} />As Donor
            </div>

            {userType === 'hospital' ? (
              <>
              
                <div className='flex gap-1'>
                  <label className='text-white ml-0'>Hospital Id:</label>
                  <input type="text" />
                </div>
                
              
              </>
            ) : (
              <>
                <div className='flex gap-1 '>
                  <label className='text-white ml-6'>User Id:</label><input type="text" />
                </div>
                
                
              </>
            )}

            <div className='flex gap-1'>
              <label className='text-white ml-2'>Password:</label><input type="password" />
            </div>
            
            <div className='flex'>
              <button className='w-[100px] h-[30px] bg-violet-500 text-white rounded-md shadow-2xl m-auto'>Log In</button>
            </div>
            <hr className='mr-5 mt-0'></hr>
            <div className='flex gap-2 text-black ml-6'>
              Dont have an account? <NavLink className="nav-link text-white" id="SignUp" aria-current="page" to="/Sign Up">Sign Up</NavLink>
            </div>
          </div>
        </form>

        {userType === 'hospital' ? (
                <img className='w-[350px] h-[300px] mt-5' src="../second-icons/hlogin.jpg" alt="" />
        ) : (
          <img className='w-[350px] h-[300px] mt-5' src="../second-icons/dlogin.jpg" alt="" />
        )}
        
      </div>
    </div>
   
  )
}

export default Login;