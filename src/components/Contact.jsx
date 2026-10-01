import React from 'react';
import { useState,useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import {EarthCanvas} from'./canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef=useRef();
  const [form, setform] = useState({
    name:'',
    email:'',
    message:'',
  }
  );
  const [loading, setloading] = useState(false);
  const handleChange=(e) => {
    const {name,value} =e.target;
    setform({...form, [name]: value});
  }

  const handleSubmit=(e) => {
    e.preventDefault();
    setloading(true);
    emailjs.send('service_qdpgosm','template_bad031o',
      {
        from_name:form.name,
        to_name:'Vardan Jawanda',
        from_email:form.email,
        to_email:'balwinderjawanda0@gmail.com',
        message:form.message,
      },
      'Wy3lbw18oq85ACPro'
    )
    .then(()=>{
      setloading(false);
      alert('Thank You. I will get back to you as soon as possible.');
      setform({
        name:'',
        email:'',
        message:''
      })
    },(error) => {
      setloading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }
  return (
    <div className='xl:mt-12 lg:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
         <p className={styles.sectionSubText}>Get in touch...</p>
         <h3 className={styles.sectionHeadText}>Contact.</h3>
         <form action="" ref={formRef}
         onSubmit={handleSubmit }
         className='mt-12 flex flex-col gap-8 '
         >
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='What is your name?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='What is your email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea rows="7"  name='message' value={form.message} onChange={handleChange} placeholder='What do you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
           {loading ? 'Sending...' : 'Send'}
          </button>
           
         </form>
      </motion.div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className='lg:flex-1 lg:h-auto md:h-[550px] h-[350px]'
      >
       <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");