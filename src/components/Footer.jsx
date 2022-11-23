import React from 'react'
import '../css/Footer.css'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {

  return (
    <div className='footer'>
      <div className="fotter_social">
        <a target="_blank" href="https://github.com/thecoinboy">
          <FaGithub className='foot_icons' />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/coinboy">
          <FaLinkedinIn className='foot_icons' />
        </a>
        <a target="_blank" href="https://twitter.com/thecoinboys">
          <FaTwitter className='foot_icons' />
        </a>
        <a target="_blank" href="https://www.facebook.com/thecoinboy/">
          <FaFacebookF className='foot_icons' />
        </a>
      </div>
      <span> Web application, Dashboard, Api development </span>
      <p> ⒸCopyright coinboy. </p>
    </div>
  )
}

export default Footer