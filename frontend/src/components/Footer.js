import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-[200px] bg-slate-800 mt-3 flex justify-center'>

      <div className='flex w-[1100px] justify-evenly mt-6'>
        <div className='text-white'>
        <pre>Contact Us</pre>
        <pre>9714030703</pre>
        <pre>sdsaddc@gmail.com</pre>
        </div>
        <div className='text-white'>
        <pre>Address</pre>
        <pre>A.D.Patel Institute Of Technology</pre>
        </div>

        <a href="https://maps.app.goo.gl/1QGJMyKGMFxMTPUL6">
            <img className='h-[150px] flex justify-center items-center'src="../second-icons/flat-map-icon-28.jpg" alt="" />
        </a>
      </div>
        
      
    </div>
  )
}

export default Footer