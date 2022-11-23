import React from 'react'
import '../css/About.css'
import myPic from '../image/image dev.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='about' id='about'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="a_left">
        <img src={myPic} alt="coinboy" />
      </motion.div>
      <div className="a_right">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: .5 }}
          className="a_title">
          <span>ABOUT ME </span>
        </motion.div>
        <div className="a_intro">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: .1 }}
            className="intro_detail">
            <span> Hello there! My name is Rahul. I am a Reactjs developer, and I’m very passionate and dedicated to my work.
              With 1 years experience as a personal Reactjs development, I have acquired the skills and knowledge necessary to make your project a success.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="a_detail">
            <div className='flex_detail' style={{ color: "var(--text)" }}>
              <span>    Name:    </span>
              <span>    Address:</span>
              <span>    Study:   </span>
              <span>    Degree:  </span>
              <span>    E-mail:  </span>
              <span>    Phone:  </span>
            </div>
            <div className='flex_detail' style={{ color: "var(--white)" }}>
              <span> Rahul kumar (coinboy) </span>
              <span> Bareilly, India </span>
              <span> Mjpru </span>
              <span>  b.com </span>
              <span> **********@gmail.com </span>
              <span> +9190******** </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About;