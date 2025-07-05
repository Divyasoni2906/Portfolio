import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="relative w-full py-10">

      {/* ✨ Background blob */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 opacity-20 rounded-full blur-2xl" />

      {/* 🛠️ Tech icons */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="relative z-10 flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.5)}
            className="group flex flex-col items-center"
          >
            <div
              className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-lg
                hover:bg-white/20 transition-all duration-300 ease-in-out
                shadow-lg shadow-white/10 hover:shadow-white/20
                flex items-center justify-center hover:scale-105"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* 👇 Hover name appears below */}
            <span className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");



// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");