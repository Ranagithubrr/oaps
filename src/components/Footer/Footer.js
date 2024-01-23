import React from 'react';
import './Footer.css';
import Logo from '../../Images/oapsLogo.png';

const Footer = () => {
    return (
        <footer id='contact'>
            <div className="footerInner MySize mt-5">
                <div className="row pb-5">
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4">
                        <div className="footerLogo">
                            <img src={Logo} alt="" className='img-fluid' />
                            <h2><span>OA</span>PS</h2>

                        </div>
                        <p>
                        OAPS specializes in Monitoring and Evaluation services across diverse sectors. With a client-centric ethos, OAPS collaborates with public and private entities, NGOs, governments, and donor agencies, delivering tailored solutions that magnify the impact of development initiatives. Embark on a transformative journey where innovation meets impact with OAPS</p>                        
                    </div>
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4">
                        {/* <h4>Newsletter</h4>
                        <p>Signup for our newsletter to get the latest news in your inbox.</p>
                        <div className="emailBox my-3">
                            <input type="text" placeholder='enter your email' />
                            <button><BsArrowRight /></button>
                        </div>
                        <p><small>Your email is safe with us. We don't spam.</small></p> */}
                        <h4>Follow Us on</h4>                       
                    </div>
                    <div className="col-12 pt-5 pt-lg-0 col-lg-4 HostingAndCompany contactForm">
                        <h4>Contact Us</h4>
                        <p>Please fillup this form bellow, we will get in touch soon</p>
                        <input type="text" placeholder='Your Name'/>
                        <input type="text" placeholder='Your Email'/>
                        <textarea rows={5} cols={10} placeholder='Type Your Message . . .'/>
                        <button>Submit</button>
                    </div>
                    
                </div>
            </div>        
        </footer>
    )
}

export default Footer
