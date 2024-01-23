import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { MdCall, MdEmail } from 'react-icons/md';
import Logo from '../../Images/oapsLogo.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollToTop(window.scrollY > 1000);
        });
    }, []);

    //sidebar click event
    const [sidebar, setSidebar] = useState('');            
    return (
        <section id="home">
            <div className='navbarArea'>
                <div className="scrolTopBtn">
                    <a href='#home' className={`scrollBtn ${scrollToTop && 'showBtn'}`}><MdKeyboardArrowUp /></a>
                </div>
                {/* topbar area design */}

                <div className={`topbar ${scroll && 'topbarBgColor'}`}>
                    <div className="topbarInner MySize">
                        <div className="topbarLeft d-none d-lg-block">
                            <h4>Tech-Driven Solutions for Empowering Development</h4>
                        </div>
                        <div className="topbarRight">                            
                            <div><span> <MdEmail /></span> <a href="mailto:dev@gmail.com">overseasadvisors@gmail.com</a> </div>
                        </div>
                    </div>
                </div>
                {/* navbar area design  */}
                <div className={`navbar ${scroll && 'navbarBgColor'}`} data-aos="fade-down">
                    <div className="navbarInner row MySize">
                        <div className="navbarLogo col-5 col-lg-3 d-flex align-items-center">
                            <img src={Logo} alt="" className='oapslogo' />
                            <h2 className='d-none d-lg-block'><span>OA</span> PS</h2>
                        </div>
                        <div className={`navbarItems col-7 pb-5 pb-lg-0 d-lg-block ${sidebar}`}>
                            <ul>
                                <li onClick={()=>setSidebar('')}><Link to="/">Home</Link></li>
                                <li onClick={()=>setSidebar('')}><Link to="/about">About Us</Link></li>
                                <li onClick={()=>setSidebar('')}><Link to="/service">Services </Link></li>
                                <li onClick={()=>setSidebar('')}><Link to="/insights">Insights </Link></li>
                                <li onClick={()=>setSidebar('')}><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="navbarFreeTrail col-7 col-lg-2 mr-3">
                            {/* <a href="#contact">
                                <button className='commonBtn float-right'>Contact Us</button>
                            </a> */}
                            <button onClick={() => sidebar === '' ? setSidebar('showSideBar') : setSidebar('')} className='float-right barBtn d-md-none mr-3' ><FaBars /></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;