import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import hlogin from '../assets/hlogin1.jpg'
import dlogin from '../assets/dlogin1.png'

const Registration = () => {
  const [userType, setUserType] = useState('hospital');


  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalId: '',
    donorName: '',
    email: '',
    password: '',
    cnfPassword: '',
    address: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
    pinCode: ''
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
    return userType === 'hospital' ? '100px' : '1000px';
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
    <div className={`flex flex-row ${userType === 'hospital' ? 'bg-sky-100' : 'bg-rose-100'}`}>
      <div className='flex-1 m-1 p-5 w-[50px] h-[1100px] items-center flex flex-col rounded-3xl'>
        <form onSubmit={handleSubmit} className={`flex flex-col gap-3 p-4 text-justify border-1 border-black rounded-3xl ${userType === 'hospital' ? 'bg-green-400' : 'bg-sky-950'} w-[500px]`}>
          <div className={`text-center ${userType === 'hospital' ? 'text-black' : 'text-white'} text-3xl mb-4`}><h3>Registration</h3></div>
          <div className='ml-10 flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <label className={`${userType === 'hospital' ? 'text-lg text-black' : 'text-lg text-white'}`}>Register As:</label>
              <div className='flex gap-4 justify-center'>
                <label className='flex items-center cursor-pointer'>
                  <input
                    type="radio"
                    name='user'
                    value='hospital'
                    checked={userType === 'hospital'}
                    onChange={handleUserTypeChange}
                    className='mr-2'
                  />
                  <span className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Hospital</span>
                </label>
                <label className='flex items-center cursor-pointer'>
                  <input
                    type="radio"
                    name='user'
                    value='donor'
                    checked={userType === 'donor'}
                    onChange={handleUserTypeChange}
                    className='mr-2'
                  />
                  <span className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Donor</span>
                </label>
              </div>
            </div>
            {userType === 'hospital' ? (
              <>
                <div className='flex flex-col gap-1 mt-4'>
                  <label className='text-black'>Hospital Name:</label>
                  <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className='input-field px-2 py-1 rounded-tl-lg rounded-br-xl' required />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='text-black'>Hospital Id:</label>
                  <input type="text" name="hospitalId" value={formData.hospitalId} onChange={handleChange} className='input-field px-2 py-1 rounded-tl-lg rounded-br-xl' required />
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col gap-1'>
                  <label className='text-white'>Donor Name:</label>
                  <input className='px-2 py-1 rounded-tl-lg rounded-br-xl' type="text" name="donorName" value={formData.donorName} onChange={handleChange} />
                </div>
                <div className='flex gap-4'>
                  <label className='text-white'>Gender:</label>
                  <label className='text-white gap-2'>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    <span className='text-white'>Male</span>
                  </label>

                  <label className='text-white'>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                    />
                    <span className='text-white'>Female</span>
                  </label>

                  <label className='text-white'>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === 'other'}
                      onChange={handleChange}
                    />
                    <span className='text-white'>Other</span>
                  </label>
                </div>
                <div className='flex gap-3 ml-1'>
                  <label className='text-white'>Blood Group:</label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className='px-2 py-1 rounded-lg'
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    {/* Add other blood groups */}
                  </select>
                </div>
                <div className='flex gap-3 ml-1'>
                  <label className='text-white'>Date of Birth:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className='px-2 py-1 rounded-lg'
                  />
                </div>
              </>
            )}
            <div className='flex flex-col gap-1'>
              <label className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Email Id:</label>
              <input className='px-2 py-1 rounded-tl-lg rounded-br-xl' type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
              <label className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Pin Code:</label>
              <input className='px-2 py-1 rounded-tl-lg rounded-br-xl' type="number" name="pinCode" value={formData.pinCode} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
              <label className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Address:</label>
              <textarea className='px-2 py-1 rounded-tl-lg rounded-br-xl' id="address" name="address" rows="3" cols="29" value={formData.address} onChange={handleChange}></textarea>
            </div>
            <div className='flex flex-col gap-1'>
              <label className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Password:</label>
              <input className='px-2 py-1 rounded-tl-lg rounded-br-xl' type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
              <label className={`${userType === 'hospital' ? 'text-black' : 'text-white'}`}>Confirm Password:</label>
              <input className='px-2 py-1 rounded-tl-lg rounded-br-xl' type="password" name="cnfPassword" value={formData.cnfPassword} onChange={handleChange} />
            </div>
          </div>
          <div className='flex gap-4 mt-4 justify-center'>
            <button className={`w-full md:w-[120px] h-[40px] ${userType === 'hospital' ? 'bg-gradient-to-r from-sky-600 to-blue-950' : 'bg-gradient-to-r from-green-400 to-green-600'} text-white rounded-md shadow-md`}>Sign Up</button>
          </div>
          <hr className={`${userType === 'hospital' ? 'mr-5' : 'text-white'}`}></hr>
          <div className={`${userType === 'hospital' ? 'text-black' : 'text-white'} flex gap-2 justify-center`}>
            Already have an account? <NavLink className="nav-link text-blue-500" id="Login" aria-current="page" to="/Login">
              <span className={`${userType === 'hospital' ? 'text-blue-900' : 'text-green-500'} hover:underline font-bold`}>
                Login
              </span>
            </NavLink>
          </div>
        </form>
      </div>
      <div className='w-[670px] flex  items-center'>
        <img className='w-[620px] h-[450px] object-cover rounded-full' src={userType === 'hospital' ? hlogin : dlogin} alt="" />
      </div>
    </div>
  );

};

export default Registration;
