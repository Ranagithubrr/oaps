import React from 'react';
import './thankyou.css';
import Sent from '../Images/send.png';
import { Link } from 'react-router-dom';


const ThankyouPage = () => {
  return (
    <div className='MySize pagePaddingTop ThankYouPage'>
        <div className="thankyou">
            <img src={Sent} alt="sent" className='sentImage'/>
            <span className="thankyouText">Thank You</span>
            <span className="receivedmsg">We've received your message</span>
            <Link to="/" className='backButton'>Back to Home</Link>
        </div>
    </div>
  )
}

export default ThankyouPage