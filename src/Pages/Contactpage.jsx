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
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <textarea rows={5} cols={10} placeholder='Type Your Message . . .' />
            <button>Submit</button>
          </div>
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left">
          <img src={ContactImg} alt="growth" className="img-fluid" />
        </div>
      </div>
      <div className="socialIcons mt-3">
        <a href="/"><FaFacebookF /></a>
        <a href="/"><FaTwitter /></a>
        <a href="/"><FaLinkedinIn /></a>
        <a href="/"><FaPinterest /></a>
        <a href="/"><FaRss /></a>
      </div>
    </div>
  )
}

export default Contactpage