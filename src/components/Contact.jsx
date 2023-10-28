import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
  {/* Contact information */}
      <div className="flex mt-4">
        <p className="mr-4">Email: bilalsnasir@gmail.com</p>
        <p className="mr-4">Phone: 909-663-7611</p>
      </div>
      <div><Link to="https://www.linkedin.com/in/bilal-nasir-563504240/" style={{color: '#7dd3ff', fontWeight: 600, fontStyle: 'italic'}}>LinkedIn</Link></div>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");