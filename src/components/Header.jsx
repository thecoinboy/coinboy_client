import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa'
import Yourpic from '../image/boy.png'
import ReactTypingEffect from 'react-typing-effect';
import '../css/Header.css'
import resume from '../new.docx'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="hero">
        <motion.div
          initial={{ scale: 0, opacity:0 }}
          whileInView={{ scale:1, opacity:1, rotate: [0, 10, 0] }}
          transition={{ delay:.1 }}
          className="l_hero">
          <motion.div
            initial={{ y: -100, opacity:0}}
            whileInView={{ y:0, opacity:1}}
            transition={{delay: 0.3 }} 
            className="social">
            <div className="icon">
              <Link to="//www.github.com/thecoinboy" target="_blank">
                <FaGithub className='icons' />
              </Link>
              <Link to="//www.linkedin.com/in/coinboy" target="_blank">
                <FaLinkedinIn className='icons' />
              </Link>
              <Link to="//twitter.com/thecoinboys" target="_blank">
                <FaTwitter className='icons' />
              </Link>
              <Link to="//www.facebook.com/thecoinboy/" target="_blank">
                <FaFacebookF className='icons' />
              </Link>
            </div>
            <div
              className="her_span">
              <h2>
                Hello. I am <b>  @coinboy  </b>
              </h2>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y:-100, opacity: 0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{ delay:1 }}
          >
            <ReactTypingEffect
              text={["Updated Skills", "Quick Learner", "Workaholic"]}
              eraseSpeed="100"
              speed="100"
              typingDelay="800"
              eraseDelay="800"
            />
          </motion.h1>
          <p> I am frontend developer(reactjs, tailwind css, framer-motion) also worked in mern stack project. </p>
          <motion.button
            initial={{ y:100, opacity:0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay: 1.4 }}
            className='button btn_hero'> <a href={resume} download > Get resume  </a> </motion.button>
        </motion.div>
        <motion.div
          initial={{ x:100, opacity: 0 }}
          whileInView={{ x:0, opacity: 1, rotate: [0, 90, 0] }}
          transition={{delay: 1.2 }}
          className="r_hero">
          <img src={Yourpic} alt="@thecoinboy" />
        </motion.div>
      </div>
    </header>
  )
}
export default Header;
