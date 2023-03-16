import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import npm from '../assets/npm.png'
import FireBase from '../assets/firebase.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
 
        {/*container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#db0606] '> Skills </p>
                <p className='py-6'> These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="CSS icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="NODE JS icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={npm} alt="NPM icon" />
                  <p className='my-4'>NPM</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#db0606] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="FIREBASE icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills