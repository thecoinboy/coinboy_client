import React from 'react'
import '../css/Projects.css'
import image1 from '../image/developer.jpg'
import { motion } from 'framer-motion'
import burgerwala from '../image/burger.jpg'
import tea from '../image/tea.jpg'
import nextshine from '../image/nextshine.jpg'

const prodata = [
    {
        "url":"https://mbateaclone.netlify.app/",
        "title": "Mbachiawala",
        "pic":tea
    },
    {
        "url": "https://burgerwalaui.onrender.com/",
        "title": "burgerwala ecommerce",
        "pic":burgerwala
    },
    {
        "url": "https://nextshine.onrender.com/",
        "title": "nextshine agency",
        "pic":nextshine
    }
]

export const Projects = () => {
    return (
        <div className="pro_container" id='projects'>
            <div className="project">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                > <span style={{ color: "var(--text)" }}> Our   </span> Project</motion.h2>
                <div className="container_pro">
                    {
                        prodata.map((data, index) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="box_pro" key={index}>
                                    <a href={data.url} target='_black'>
                                    <span className='titles'> {data.title}</span> </a>
                                    <img src={data.pic}  />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
