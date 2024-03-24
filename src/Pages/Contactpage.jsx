import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ContactImg from '../Images/svgs/contact.svg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaRss } from 'react-icons/fa'

const Contactpage = () => {
  return (
    <div className="MySize pagePaddingTop">
      <div data-aos="fade-up">
        <SectionHeader
          HeaderName={["Get in touch with", <span> OA</span>, "PS"]}
          SectionName='Contact Us'
        />
      </div>
      <div className='row my-5'>
        <div className="col-12 col-md-6" data-aos="fade-right">
          <div className="contactForm">
            <form action="https://formsubmit.co/mr6430119@gmail.com" method="POST">
              <input type="hidden" name="_next" value="http://localhost:3001/thankyou" />
              <input type="text" placeholder='Your Name' name='name' />
              <input type="text" placeholder='Your Email' name='email' />
              <textarea rows={5} cols={10} placeholder='Type Your Message . . .' name='message' />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left">
          <img src={ContactImg} alt="growth" className="img-fluid" />
        </div>
      </div>
      <div className="socialIcons mt-3">
        <a href="https://web.facebook.com/profile.php?id=61555184981720&mibextid=LQQJ4d&_rdc=1&_rdr" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        <a href="/"><FaTwitter /></a>
        <a href="https://www.linkedin.com/company/the-oaps" target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
        <a href="/"><FaPinterest /></a>
        <a href="/"><FaRss /></a>
      </div>
    </div>
  )
}

export default Contactpage