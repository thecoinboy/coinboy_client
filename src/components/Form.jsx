import axios from 'axios'
import React from 'react'
import '../css/Form.css'
import Form_img from '../image/heart.png'
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({...data, [name]:value });
    }


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name, email, message, subject} = data;

        try {
            if(!name || !email || !message){
                toast("please fill required field")
            }else{
              const sendData =  await axios.post("/api/v1/contact", {name, email, subject, message})
              console.log(sendData)
            }
        } catch (error){
        }
    }
    
    return (
        <div className="form_contaienr" id='contact'>
            <div>
                <div className="form_r">
                    <motion.img
                        initial={{ opacity: 0, x: -100, rotate: 360 }}
                        whileInView={{ opacity: 1, x: 0, rotate: [0, 180, 0] }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ delay: 0 }}
                        src={Form_img} alt="" />
                    <form onSubmit={handleSubmit}>
                        <div className="form_control">
                            <ToastContainer />
                            <h2>  <span style={{ color: "var(--text)" }}> Get </span>   in  touch </h2>
                            <input placeholder='*Full name' value={data.name} name="name" className='inpu' onChange={handleChange} />
                            <input  type="email" placeholder='*E-mail' value={data.email} name='email' className='inpu' onChange={handleChange} />
                            <input type="text" placeholder='Subject' name='subject' value={data.subject} className='inpu' onChange={handleChange} />
                            <textarea  name="message" className='inpu' onChange={handleChange} value={data.message} cols="30" rows="3" placeholder='*Message' />
                            <input type="submit" className='button f_button' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;