import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [userType, setUserType] = useState('hospital');

  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalId: '',
    donorName: '',
    email: '',
    password: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const getFormHeight = () => {
    return userType === 'hospital' ? '520px' : '500px';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (userType === 'hospital') {
        await axios.post('http://localhost:5000/api/register/hospital', formData);
      } else {
        await axios.post('http://localhost:5000/api/register/donor', formData);
      }

      // Handle successful registration, e.g., redirect or show a success message
    } catch (error) {
      console.error(error);
      // Handle registration failure, e.g., show an error message
    }
  }; 

  return (
    <div className='flex justify-center h-[524px] items-center'>
      <div className='w-[950px] flex gap-[100px]'>
        <form onSubmit={handleSubmit} method='post' className={`w-[390px] h-[${getFormHeight()}] bg-red-500 border-solid border-2 border-black rounded-3xl flex flex-col gap-4 text-justify ml-10 mt-3`}>
          <div className='text-center text-white text-xl mt-4'><h3>Registration</h3></div>
          <div className='flex flex-col gap-3 ml-6'>
            <div className='text-white flex gap-3 ml-12'>
              <input
                type="radio"
                name='user'
                value='hospital'
                checked={userType === 'hospital'}
                onChange={handleUserTypeChange}
              />
              As Hospital
              <input
                type="radio"
                name='user'
                value='donor'
                checked={userType === 'donor'}
                onChange={handleUserTypeChange}
              />
              As Donor
            </div>
            {userType === 'hospital' ? (
              <>
                <div className='flex gap-1'>
                  <label className='text-white'>Hospital Name:</label>
                  <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} />
                </div>
                <div className='flex gap-2'>
                  <label className='text-white ml-6'>Hospital Id:</label>
                  <input type="text" name="hospitalId" value={formData.hospitalId} onChange={handleChange} />
                </div>
              </>
            ) : (
              <>
                <div className='flex gap-1'>
                  <label className='text-white ml-3'>Donor Name:</label>
                  <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} />
                </div>
                <div className='flex gap-1'>
                  <label className='text-white ml-3'>Blood Group:</label>
                  <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
                </div>
                
              </>
            )}

            {/* Common fields for both Hospital and Donor */}
            <div className='flex gap-2'>
              <label className='text-white ml-11'>Email Id:</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='flex gap-2'>
              <label className='text-white ml-9'>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className='flex gap-2'>
              <label className='text-white ml-11'>Address:</label>
              <textarea id="address" name="address" rows="3" cols="29" value={formData.address} onChange={handleChange}></textarea>
            </div>
            <div className='flex gap-1'>
              <button className={`w-[100px] h-[30px] bg-violet-500 text-white rounded-md shadow-2xl m-auto`} >Sign Up</button>
            </div>
            <hr className='mr-5 mt-2'></hr>
            <div className='flex gap-2 text-black ml-12'>
              Already have an account? <NavLink className="nav-link text-white" id="Login" aria-current="page" to="/Login">Login</NavLink>
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
  );
};

export default Registration;
