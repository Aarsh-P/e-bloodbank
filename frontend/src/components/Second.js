import React from 'react'

function Second() {
  return (
    <div className='w-screen flex justify-center '>
     
    <div className='w-[1100px] text-center '>
      <h2 className='text-red-600 text-xl mt-2'>LEARN ABOUT DONATION</h2>
      <div className='flex justify-evenly text-center object-cover '>

      <img className='mt-3 h-[300px] max-w-[400px] object-cover block'src="../second-icons/boold donation 1.png" alt="" />
        <div className='h-[300px] justify-center max-w-[400px] iteam-center flex flex-col gap-1'>
            <p className='text-yellow-400'>one</p>
            <p>blood donation can save upto</p>
            <p className='text-yellow-400'>Three</p>
            <p>patient lives</p>
        </div>

      <img className=' mt-3 h-[300px] max-w-[400px] object-cover'src="../second-icons/blood type 1.png" alt="" />
      </div>
 
    </div>

    </div>
  )
}

export default Second;