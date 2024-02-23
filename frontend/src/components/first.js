import React from 'react'
import redBloodCell from '../assets/redBloodCell.jpg'
function First() {
  return (
    <>
    <div className='relative flex justify-center m-auto items-center '> 
    <div className='absolute text-white text-center  w-[1100px] justify-center flex flex-col items-center m-auto'>
        <h1 className='text-center text-4xl'>Heading 1</h1>
        <p className='mt-8 m-auto text-center text-2xl justify-center w-[800px]'>Blood donation is a vital act of generosity, saving lives in emergencies, surgeries, and medical treatments. Donating blood is safe, simple, and greatly impactful. One donation can potentially save up to three lives, fostering a sense of community and solidarity in healthcare</p>
    </div>
    
      <img className='w-screen h-[421px] object-cover box-content' src={redBloodCell} alt="" />
      
    </div>
    </>
  )
}

export default First