import React from 'react'
import '../css/Services.css'
import { FaReact } from 'react-icons/fa'
import { SiFastapi } from 'react-icons/si'
import { MdEvent } from 'react-icons/md'
import { motion } from 'framer-motion'

const servData = [
    {
        "icon": <FaReact />,
        "title": "Reactjs",
        "subtitle": "Build web application with contextapi/redux component."
    },
    {
        "icon": <SiFastapi />,
        "title": "Javascript",
        "subtitle": "Build modern web application, ecommerce, portfolio, etc."
    },
    {
        "icon": <MdEvent />,
        "title": "Mern Project",
        "subtitle": "Build modern web application using nodejs, expressjs, reactjs, mongodb."
    }
]

export const Services = () => {
    return (
        <div className='service' id='services'>
            <div className="ser_container">
                <div className="service_title">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay:0}}
                    >Services</motion.h1>
                    <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay:0.3}}
                    >We work with creativity</motion.span>
                </div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay:0.2}}
                    className="service_contain">
                    {
                        servData.map((data,i) => {
                            return (
                                <motion.div
                                    initial={{ scale:1, opacity:0}}
                                    whileInView={{opacity:1}}
                                    whileHover={{ scale: 1.1 }}
                                    className="ser_box" key={i}>
                                    <motion.span
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1}}
                                    > {data.icon}  </motion.span>
                                    <motion.span
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.3 }}
                                    > {data.title} </motion.span>
                                    <motion.span
                                        initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.5 }}
                                    > {data.subtitle}  </motion.span>
                                    <a href="#project"> <button className='button ser_button'>View</button> </a>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}
