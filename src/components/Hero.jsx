import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = ({ toggle, setToggle }) => {
  return (

    <section
      className={`${
        toggle ? "mt-[200px]" : "mt-0"
      } relative z-10 w-full h-screen mx-auto hero`}
    > 
    {/* yaha p changes krne h */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Divya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate web developer and <br className='sm:block hidden' />
            DSA enthusiast
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
    </div>
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-seconday flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero

// https://sketchfab.com/3d-models/galaxy-of-coder-561b2a5a775f49929420b72b405e9e3f