"use client"
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';


const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState( false )
  const text = "Say Hello";

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, {
        publicKey: process.env.NEXT_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true)
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
   <motion.div className='h-full' initial={{y: "-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
     <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-between">

      {/* Text container */}
      <div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
      <motion.div>
        {
          text.split("").map((letter, index)=>{
           return <motion.span key={`Skill_${index}`} initial={{opacity:1}} animate={{opacity:0}} transition={{ duration:3, repeat:Infinity, delay: index*0.1}}>{letter}</motion.span>
          })}
          😊
      </motion.div>
      </div>

      {/* Form Container */}
      <form ref={form} onSubmit={sendEmail} className='flex flex-col h-2/3 lg:h-full  lg:w-1/2 bg-red-100 rounded-md text-xl gap-8 justify-center p-24'>
      <span>Dear Nausheen,</span>
      <textarea name="user_message" id="" rows={6} className='bg-transparent border-b-2 border-b-black outline-none resize-none'/>

      <span className=''>My mail address is:</span>
      <input name='user_email' type="text" className='bg-transparent border-b-2 border-b-black outline-none' />
      
      
      <span className="">Regards,</span>
      <button className='bg-purple-300 font-semibold text-gray-600 p-2 rounded-md' >Submit</button>
       {success && <span className='text-green-400 font-semibold text-base'>Your Message has been sent successfully!</span>}
       {error && <span className='text-red-400 font-semibold text-base'>Something Went wrong!</span>}
       </form>

    </div> 
   </motion.div>   
    )
  }
  
  export default ContactMe
  