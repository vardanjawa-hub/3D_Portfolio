import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn,textVariant } from '../utils/motion';
import { achievements } from '../constants';
const AchievementCard=({index,title,description,date})=>{
  return(
 <motion.div
  variants={fadeIn("","spring",index*0.5,0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full ' 
 >
  <p className='text-[24px] text-white' >{title}</p>
  <p className='mt-7 text-[18px] text-secondary tracking-wider '>{description}</p>
  <p className='mt-7 text-secondary'>{date}</p>
     
 </motion.div>
  )
}
const Achievements = () => {
  return (
   <div className='mt-12 bg-black-100 rounded-[20px]'>
     <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
       <p className={styles.sectionSubText}>
        What I have achieved so far...
       </p>
       <h2 className={styles.sectionHeadText}> Achievements </h2>
      </motion.div>
     </div>
     <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
       {achievements.map((description,index)=>(
         <AchievementCard 
         key={description.title}
         index={index}
         {...description}
         />
       ))}
     </div>
   </div>
  )
}

export default SectionWrapper(Achievements,"");
