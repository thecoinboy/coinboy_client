import React, { useState } from 'react'
import '../css/Navbar.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="navbar">
            <div className="nav">
                <motion.div 
                initial={{x:-50}}
                animate={{x:0}}
                whileHover={{scale:1.1}}
                className="logo">
                    <Link to='/'> Coinboy <small>( RAHUL KUMAR) </small> </Link>
                </motion.div>
                <div className="list">
                <span className='toggler' onClick={() => setToggle(!toggle)} > {toggle ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}  </span>
                    <ul className={toggle ? '' : "toggle"}>
                        <li> <Link to="/" > Home  </Link>  </li>
                        <li> <a href='#services'> Services </a>  </li>
                        <li> <a href="#skills"  > Skills </a>  </li>
                        <li> <a href="#about"> About </a>  </li>
                        <li> <a href="#projects" > Projects</a>  </li>
                        <li> <a href="#contact"  > Contact   </a>  </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


