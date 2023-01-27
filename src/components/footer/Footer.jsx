import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Deepak Kumar</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#tcontact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.facebook.com/deepak545608" target="_blank"><FaFacebookF/></a>
            <a href="https://www.instagram.com/_deepak_2910/" target="_blank"><FaInstagramSquare/></a>
            <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle/></a>

        </div>
        <div className="footer__copyright">
            <small>&copy; Deepak Kumar</small>
        </div>
    </footer>
  )
}

export default Footer