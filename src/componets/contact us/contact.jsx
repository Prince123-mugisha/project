import React from "react";
import './contact.css'
import message from '../../assets/message.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
function Contact (){

    return(
        <div className="contact">

     <div className="contact-col">
        <h3>send us a message <img src={message} alt="" /></h3>
        <p>Fell free to reach out to us through contact from or
            find our contact information below. your feedback, quetion ,and
            suggetion are important to us. 
        </p>

        <ul>
            <li><img src={email} alt="" />thedreamers@gmail.com</li>
            <li><img src={phone} alt="" />+250794568708</li>
        </ul>


     </div>

     <div className="contact-col">

        <form>
    <label>Your name</label>
    <input type="text" name="name" placeholder="enter your name" required />
    <label>Phone Number</label>
    <input type="tel" name="phone" placeholder="enter your mobile number" required />
    <label>write your message here</label>
    <textarea name="message"  rows="6" placeholder="enter your message" required></textarea>
    <button type="submit" className="button">Submit</button>

    
        </form>

        <span></span>

     </div>

     </div>

    )



}

export default Contact