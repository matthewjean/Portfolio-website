import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7444e79a-8ab8-416e-b38c-1268111e62ce" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#db0606] text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'> // submit the form below or shoot me an email - myemail</p>
            </div>
            <input className='bg-gray-300 p-2' type="text " placeholder= "Name "name="name"  />
            <input className='my-4 p-2 bg-gray-300' type="email " placeholder= "Email "name="email" />
            <textarea className='bg-gray-300 p-2' name="message"  cols="30" rows="10" placeholder='Message'></textarea>
            <button className=' text-white border-2 hover:bg-gray-600 px-4 py-3 my-8 mx-auto flex items-center'> Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact