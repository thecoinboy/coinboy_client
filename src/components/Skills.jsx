import React from 'react'
import '../css/Skills.css'
import {motion } from 'framer-motion'


const Skills = () => {

    const skills = [
        {
            title: "Basics",
            details:
                [
                    <li>Html and html5 - list, forms, tags, id, classes, button, event, img, maps, video, svg </li>,
                    <li>css and css3 - variable, flex, media query, grid, animation, transition </li>,
                    <li>Project - responsive website, google map project, responsive form, video application, </li>,
                ],
        },
        {
            title: "reactjs",
            details:
                [
                    <li>Jsx and props - jsx allows us to write html data in javscript files and props use to pass data between components.</li>,
                    <li>React hooks - useState , useEffect, useRef, useContext, useReducer, useMemo, createCustom hooks </li>,
                    <li>Important topics - Events handling, conditional rendring, async function, trycatch block, if else statement, loops, map fucntion, array destructring, object destructure  </li>,
                    <li>Forms and validation - formik, yup, for handle forms  </li>,
                    <li> Api's and data handling - fetch api and axios for data handling and manage api's </li>,
                    <li> Importent library - React-toastify, swiperslider, dotenv, react-icons, </li>,
                    <li> Advance topics - routing, api, reduxjs/toolkit,</li>,
                    <li> learning more </li>,


                ],

        },
        {
            title: "Javascript",
            details:
                [
                    <li> datatypes, oprators, arrays(mapping, reducing, filtring), objects, forloops, api, promises, classes  </li>,
                    <li> form validation, toggle,  </li>,
                    <li> learning more </li>,

                ],
        },
        {
            title: "tailwind css",
            details:
                [
                    <li>installation and configratutoin for production envirment </li>,
                    <li> Working with breakpoits, theame customization </li>,
                    <li> classes for styling </li>,
                    <li> learning more </li>,

                ],
        },
        {
            title: "node js",
            details:
                [
                    <li>knowladge of npm, nodejs </li>,
                    <li> express - server configratutoin, routing, data handling, </li>,
                    <li> nodemailer, jsonwebtoken, </li>,
                    <li> knowladge of mongodb </li>,
                    <li> learning more </li>,
                ],
        },
        {
            title: "other",
            details:
                [
                    <li> git, github, </li>,
                    <li>knowladge of hosting, domain parking, </li>,
                    <li> knowladge of blockchain, metamsk, web3.0, metaverse, nft, token</li>,
                    <li> knowladge of linux, window,</li>,
                    <li> knowladge of photoshop, microsoft office, </li>,
                ],
        },

    ]

    return (

        <div className="skills" id='skills'>
            <motion.h1
                initial={{x:-150, opacity:0}}
                whileInView={{x: 0, opacity:1}}
            > My Skills </motion.h1>
            <div className="contain">
                {
                    skills.map((data, i) => {
                        return (
                            <motion.div
                                initial={{scale: 0, opacity: 0 }}
                                whileInView={{ scale:1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className='containterSkills' key={i}>
                                <motion.h1
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                > {data.title} </motion.h1>
                                <motion.ul
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    {data.details}
                                </motion.ul>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;