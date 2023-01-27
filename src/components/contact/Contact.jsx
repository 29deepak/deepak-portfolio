import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n4gu874', 'template_3xxxw94', form.current, 'zefmN922fIpOvOx7G')
        e.target.reset()
      };
    
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>
        <div className="container contact__container">
            {/* contact options */}
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>deepak545608@gmail.com</h5>
                    <a href="mailto:deepak545608@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messanger</h4>
                    <h5>Deepak Kumar</h5>
                    <a href="https://www.facebook.com/deepak545608" target="_blank">Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+91-9939401834</h5>
                    <a href="https://api.whatsapp.com/send?phone=919939401834" target="_blank">Send a message</a>
                </article>
            </div>

            {/* form action */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Enter Your Full Name' required />
                <input type="email" name="email" placeholder='Enter EmailID'required />
                <textarea name="message" id="mssg" rows="7" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>


            </form>

        </div>
    </section>
  )
}

export default Contact