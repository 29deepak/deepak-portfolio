import React from 'react'
import './footer.css'
import ME1 from '../../assets/deepak1.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {RiTwitterFill} from 'react-icons/ri'
import {FaDribbble} from 'react-icons/fa'
import {BsBehance} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <div class="me1">
      <img src={ME1} alt="ME1"  />
      </div>
      

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
            <a href="https://www.linkedin.com/in/deepak-kumar-484970192/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/29deepak" target="_blank"><FaGithub/></a>
            <a href="https://www.facebook.com/deepak545608" target="_blank"><FaFacebookF/></a>
            <a href="https://www.instagram.com/_deepak_2910/" target="_blank"><FaInstagramSquare/></a>
            <a href="https://www.youtube.com/@user-in4jh3wz4q" target="_blank"><BsYoutube/></a>
            <a href="https://twitter.com" target="_blank"><RiTwitterFill/></a>
            <a href="https://dribbble.com/29deepak/about" target="_blank"><FaDribbble/></a>
            <a href="https://www.behance.net/7d982d60" target="_blank"><BsBehance/></a>

        </div>
        <div className="footer__copyright">
            <small>&copy; Deepak Kumar</small>
        </div>
        
    </footer>
  )
}

export default Footer