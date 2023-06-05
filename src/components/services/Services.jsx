import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
            {/* fullstack */}
            <article className="service">
                <div className="service__head">
                    <h3>Full Stack Developer</h3>
                </div>
                <ul className='service__list'> 
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Frontend Development</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Backend Development</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Database Configuration</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Authentication</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Pagination</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Frontend -Backend Integration</p>
                    </li>
                    
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>API Integration</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Payment(Razorpay Integration)</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Forgot password(sendgrid Integration)</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Report Generation(Download)</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>AWS(Integration)Such as EC2 instances,RDS connection,S3 Bucket and many more....</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>AWS(Integration)Such as AWS Lambda ,cloudwatch</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>And Many More.........</p>
                    </li>
                </ul>
            </article>
            {/* tools */}
            <article className="service">
                <div className="service__head">
                    <h3>Tools</h3>
                </div>
                <ul className='service__list'> 
                <li>
                        <BiCheck className='service__list-icon' />
                        <p>Slack</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>DBeaver</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>AWS</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Vs Code</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>MySQL</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Mongo DB Atlas</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Postman</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Jupyter Notebook</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Nginx</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Firebase</p>
                    </li>
                    
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Online Compiler</p>
                    </li>


                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services