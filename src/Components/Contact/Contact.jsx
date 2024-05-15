import React from 'react'
import "./ContactModule.css"

const Contact = () => {
  return (
   <div id='Contact'>
    <div className='text-center mt-5'>
      <h1>Get In Touch</h1>
      
      <p style={{  lineHeight: ``,fontSize:`20px` }}>I am actively looking for new opportunities in <br/>React And Java</p>
      <p style={{ color: `blue`, lineHeight: ``,fontSize:`20px` }}>Email :- sharmaji336659@gmail.com</p>
      <p style={{ color: `blue`, lineHeight: ``,fontSize:`20px` }}>Mobile No. :- +91-8398870943</p>
      <p style={{ color: `blue`, lineHeight: ``,fontSize:`20px` }}>Location :- Yamuna Nagar, Haryana, India</p>
      <div
          className="contactOptions " 
        >
          <a
            href="tel:8398870943   "
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
           <i class="fa-solid fa-phone"></i>
          </a>
          <a
            href="mailto:sharmaji336659@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
         
          <a
            href="https://github.com/Pardeepsharma01"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/pardeep-sharma-03b5a7236/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
    </div>
   </div>
  )
}

export default Contact