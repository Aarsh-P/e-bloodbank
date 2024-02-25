import React from 'react'
import donation from '../assets/donation.png'
import chart from '../assets/chart.png'
function Second() {
  return (
    <div className='w-screen flex justify-center overflow-hidden items-center'>
     
    <div className='w-[1100px] text-center overflow-hidden'>
      <h2 className='text-red-600 text-xl mt-2'>LEARN ABOUT DONATION</h2>
      <div className='flex justify-between text-center object-cover '>

      <img className='mt-5 h-[250px] max-w-[400px] object-cover block'src={donation} alt="" />
        <div className='h-[250px] justify-center max-w-[400px] iteam-center flex flex-col gap-4'>
            <p className='text-yellow-400'>one</p>
            <p>blood donation can save upto</p>
            <p className='text-yellow-400'>Three</p>
            <p>patient lives</p>
        </div>

      <img className=' h-[250px] mt-5 max-w-[400px] object-cover'src={chart} alt="" />
      </div>
 
    </div>

    </div>
  )
}

export default Second;