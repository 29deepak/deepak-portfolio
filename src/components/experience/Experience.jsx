import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaRegHandPointRight} from 'react-icons/fa'
import {FiCornerUpRight} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='skills'>
      <h2> My Experiences</h2>
      <div className="container experience__container">
        {/* frontend */}
        <div className='experience__frontend'>
          <h1>Pointers Digitech Pvt. Ltd</h1>
          <h2>Node Js Developer</h2>
          <h3>(03-04-2023 - Present)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Currently working on Slack Integration</h2>
              <h4> <FaRegHandPointRight /> Real-time communication through channels, direct messages, and group chats.</h4>
              <h4> <FaRegHandPointRight /> Facilitates collaboration and file sharing</h4>
              <h4> <FaRegHandPointRight /> Organizes conversations into channels for better focus and easy retrieval</h4>
              <h4> <FaRegHandPointRight /> Customizable notifications and alerts.</h4>
              <h4> <FaRegHandPointRight /> Improved organization and easy access to important information</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Feedback</h2>
              <h4> <FaRegHandPointRight /> <b>Feedback Request</b></h4>
              <h5><FiCornerUpRight/>Clients can send feedback requests to my Slack App, which I have created.</h5>
              <h5><FiCornerUpRight/>with the help of Slack Apis .</h5>
              <h5><FiCornerUpRight/>Queries is written in the form of <b>PL-SQL</b> that is stored in the database.</h5>
              <h4> <FaRegHandPointRight /> <b>Feedback Recieved</b></h4>
              <h5><FiCornerUpRight/>Clients can send feedback recieved to my Slack App, which I have created.</h5>
              <h5><FiCornerUpRight/>with the help of Slack Apis and fetching the data from the database.</h5>
              <h5><FiCornerUpRight/>Queries is written in the form of <b>PL-SQL</b> that is stored in the database</h5>
              </div>

            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Goal/OKR's</h2>
              <h4> <FaRegHandPointRight /> <b>worked on Objective Approval Request</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Objective Approval</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Objective Deadline</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Objective cancelled</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Objective Update Request</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Goal Documents</b></h4>
              

              </div>
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Review</h2>
              <h4> <FaRegHandPointRight /> <b>worked on Review Feedback</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Review Goal</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Review Survey</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Review File Attachment</b></h4>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Survey</h2>
              <h4> <FaRegHandPointRight /> <b>worked on Survey Target</b></h4>
              <h4> <FaRegHandPointRight /> <b>worked on Survey Response</b></h4>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Recoginition</h2>
              <h4> <FaRegHandPointRight /> <b>currently working on Recoginition</b></h4>
              </div>
              
            </article>

          </div>
        </div>
        {/* backend */}
        <div className='experience__backend'>
        <h1>Sharpener Tech</h1>
        <h2>Full Stack Developer</h2>
        <h3>(28-10-2022 - 03-03-2023)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Expense Tracker</h2>
              <h4> <FaRegHandPointRight /> Created an expense tracker where a user can login, signup , add and
remove expenses and also download the reports of expenses </h4>

              <h5><FiCornerUpRight/> Added authentication for the user using JWT token.</h5>
              <h5><FiCornerUpRight/> Used Bcrypt library for encryption to store passwords in the database.</h5>
              <h5><FiCornerUpRight/> Integrated Razorpay payment gateway.</h5>
              <h5><FiCornerUpRight/> Integrated SendGrid for reset password link</h5>
              <h5><FiCornerUpRight/> Added pagination for the expenses page.</h5>
              <h5><FiCornerUpRight/> Added report generation using AWS S3 Bucket for premium users.</h5>
              <h5><FiCornerUpRight/> Added a leaderboard list for premium Users.</h5>
              <h3 className="hoo"><a href="https://github.com/29deepak/expensetracking-backend"><AiOutlineLink/> Expense Tracker </a></h3>

              </div>
              
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Group Chat Application</h2>
              <h4> <FaRegHandPointRight /> Created a group chat application where a users can login and send and
receive messages. </h4>
              <h5><FiCornerUpRight/> Used Bcrypt library for encryption to store passwords in the database.</h5>
              <h5><FiCornerUpRight/> Designed schema for chats, users, and groups and set up associations
among them.</h5>
              <h5><FiCornerUpRight/>  Followed MVC [Model View Controller] pattern.
</h5>
              <h5><FiCornerUpRight/> User can create and delete multiple groups.</h5>
              <h5><FiCornerUpRight/> Implemented an Admin feature for the group that can add and remove
users.</h5>
              <h5><FiCornerUpRight/> Users also can make other users admin and give them admin features.</h5>
              <h3 className="hoo"><a href="https://github.com/29deepak/group-chat-one-to-one-chat"> <AiOutlineLink/>   Group Chat App </a></h3>

              </div>
              
            </article>
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>E-Commerce Website</h2>
              <h4> <FaRegHandPointRight /> Created an ecommerce website where a user can add and remove
products to the cart and place an order. </h4>
              <h5><FiCornerUpRight/> Set up routes to add products and display them on the front end. </h5>
              <h5><FiCornerUpRight/> Designed schema for users, products, carts, and orders and setup
associations among them.
 </h5>
              <h5><FiCornerUpRight/> Added pagination for the products page. </h5>
              <h5><FiCornerUpRight/> Users can add and remove products from their cart and place orders. </h5>
              <h3 className="hoo"><a href="https://github.com/29deepak/e-commerce-website"> <AiOutlineLink/>   E-commerce Website </a></h3>

              </div>
              
            </article>

          </div>
          </div>
          {/* otherskills */}
          <div className='experience__otherskills'>
          <h1>Tekatron Pro Solutions</h1>
          <h2>AI/ML(Internship)</h2>
          <h3>(11-03-2022 - 12-04-2022)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaRegHandPointRight className='experience__details-icon'/>
              <div>
              <h2>Diabetes Prediction</h2>
              <h5><FiCornerUpRight/> to detect diabetes large volume of the database is collected.</h5>
              <h5><FiCornerUpRight/> -to
implement KNN, Random Forest Algorithm is used.</h5>
              <h5><FiCornerUpRight/> Training and Testing
datasets should be collected</h5>
              </div>
              
            </article>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience