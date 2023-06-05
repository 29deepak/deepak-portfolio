import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/deepak-kumar-484970192/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/29deepak" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/@user-in4jh3wz4q" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials