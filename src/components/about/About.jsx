import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/d3.jpeg'
import {FaAward} from 'react-icons/fa'
import {GiSpellBook} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="aboutme">
                <div className="about__me-image">
                    <img src={ME} alt="About mypic"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <h3>1+</h3>
                    </article>

                    <article className='about__card'>
                        <GiSpellBook className='about__icon'/>
                        <h5>Internship</h5>
                        <h3>2+<small> projects</small></h3>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                       <h3>10+ <small> Completed</small></h3>
                    </article>
                </div>
                <p>
                    My name is Deepak Kumar. My highest Education Qualification is B.E from
                    S.J.B INSTITUTE OF TECHNOLOGY,Bengaluru,Karnataka.My Stream is Computer Science and Engineering.
                    I am a Back-end Developer who has currently working on the company of Pointers Digitech Pvt. Ltd .

                    
                    
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About