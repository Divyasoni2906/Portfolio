import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
//it is a hoc that basically animates the section and applies staggered animation to its child components. several properties are defined such as starting hiden then wheninview show when scrolled about 25% then show the staggered animation.
//A Higher-Order Component (HOC) is a function that takes a component as input and returns a new, enhanced component.Think of it as a wrapper that adds extra functionality to a component without modifying its original structure.

