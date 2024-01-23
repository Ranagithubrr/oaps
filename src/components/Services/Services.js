import React from 'react';
import './services.css';
import { BiSupport } from 'react-icons/bi';
import { FaChartBar,FaUsers } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineControl } from "react-icons/ai";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import SectionHeader from '../SectionHeader/SectionHeader'

const Services = ({ More, TopPara, Heading }) => {
    // const [showAll, setShowAll] = useState(false);
    // console.log(showAll)
    return (
        <section id='services'>
            {
                TopPara === "yes" &&
                <p className='ServicePageTopPara'>
                    OAPS specializes in Monitoring and Evaluation services across diverse sectors. With a client-centric ethos, OAPS collaborates with public and private entities, NGOs, governments, and donor agencies, delivering tailored solutions that magnify the impact of development initiatives. Embark on a transformative journey where innovation meets impact with OAPS</p>
            }
            {
                Heading === "yes" &&
                <div data-aos="fade-up" className='pb-4'>
                    <SectionHeader
                        HeaderName={["Services Offered by", <span> OA</span>, "PS"]}                        
                    />
                </div>
            }
            <div className='MySize services'>
                {/* <h3>Program Support Services</h3> */}
                <div className="line">
                    <div className="lineInner"></div>
                </div>
                <div className='row mt-3 serviceCardRow'>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="serviceCards" data-aos="flip-left">
                            <div className="box"></div>
                            <span className="icon"><BiSupport /></span>
                            <h5 className="serviceCardHeading">Program Support Services</h5>
                            <ul>
                                <li>Program Design and Development</li>
                                <li>Strategic Planning</li>
                                <li>Capacity Building</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-3 mt-md-0">
                        <div className="serviceCards" data-aos="flip-up">
                            <div className="box"></div>
                            <span className="icon"><FaRegEye /></span>
                            <h5 className="serviceCardHeading">Monitoring and Evaluation (M&E) Services</h5>
                            <ul>
                                <li>Performance Monitoring</li>
                                <li>Impact Assessment</li>
                                <li>Quality Assurance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-lg-4 mt-3 mt-md-0">
                        <div className="serviceCards" data-aos="flip-right">
                            <div className="box"></div>
                            <span className="icon"><FaChartBar /></span>
                            <h5 className="serviceCardHeading">Third-Party Monitoring (3PM) Services</h5>
                            <ul>
                                <li>Independent Evaluation</li>
                                <li>Transparency and Compliance</li>
                                <li>Risk Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MySize services mt-3 rightSideServices' data-aos="fade-up">
                {/* <h3 className=''>Monitoring and Evaluation (M&E) Services</h3> */}
                <div className="line">
                    <div className="lineInner"></div>
                </div>
                <div className='row mt-3 serviceCardRow'>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="serviceCards">
                            <div className="box"></div>
                            <span className="icon"><FaUsers /></span>
                            <h5 className="serviceCardHeading">Community Empowerment Initiatives</h5>
                            <ul>
                                <li>Local Employment Opportunities</li>
                                <li>Community Engagement Programs</li>
                                <li>Risk Management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-lg-4 mt-3 mt-md-0">
                        <div className="serviceCards">
                            <div className="box"></div>
                            <span className="icon"><AiOutlineControl /></span>
                            <h5 className="serviceCardHeading">Workforce Development Programs</h5>
                            <ul>
                                <li>Training and Skill Enhancement: </li>
                                <li>Employee Well-being</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-lg-4 mt-3 mt-md-0">
                        <div className="serviceCards">
                            <div className="box"></div>
                            <span className="icon"><HiOutlineCheckBadge /></span>
                            <h5 className="serviceCardHeading">Innovation and Technology Integration</h5>
                            <ul>
                                <li>Technological Solutions</li>
                                <li>Continuous Improvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services