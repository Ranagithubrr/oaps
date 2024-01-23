import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Growth from '../Images/svgs/graph2.svg';
import { FaHandPointRight } from "react-icons/fa";
import './about.css';
import { Link } from 'react-router-dom';
import DataImg from '../Images/svgs/chart.svg'

const Aboutpage = () => {
  return (
    <div className="MySize pagePaddingTop">
      <div data-aos="fade-up">
        <div className="mainAreaInner">
          <div className="row d-flex align-items-center aboutPageArea">
            <div className="col-12 mainAreaLeft" data-aos="fade-up">
              {/* <h4 className='mt-4 mt-lg-0'>Hi! Welcome to OAPS</h4> */}
              <h3> <span>About OAPS</span> <br /></h3>
              <p className='description'>
                In 2009, OAPS was established as a Sole Proprietorship with a resolute mission—to transcend conventional boundaries in the realm of development interventions and ensure the resonance of local voices in the echelons of policymaking. Our journey, shaped by a commitment to innovation, has propelled us into a leading role in the development sector, particularly through the implementation of advanced technology-based performance management systems.
                <br />
                <br />
                Over the years, we have remained at the forefront of the industry, consistently challenging and surpassing conventional norms. OAPS has become synonymous with pioneering technology-based performance management systems that redefine the way development outcomes are measured. We believe in pushing boundaries and embracing innovation as a catalyst for lasting change.
                <br />
                <br />
                Recognizing that impactful performance requires advanced tools, OAPS places technology at the heart of our endeavors. Our technology-driven M&E solutions empower development interventions to meticulously document the intricate social and economic transformations occurring within the targeted communities. We champion the convergence of technology and social impact.
                <br />
                <br />
                OAPS specializes in providing innovative M&E services across a spectrum of key sectors, including but not limited to agriculture and economic growth, governance and rule of law, education, gender and women’s empowerment, and security and stability.
                As a Sole Proprietorship, OAPS takes pride in our client-centric ethos. Our clientele spans public and private sector entities, non-governmental organizations (NGOs), governments, and donor agencies. Our collaborative approach ensures that each client’s unique needs are met with tailored solutions, fostering sustainable and impactful development.Embark on a transformative journey with OAPS—where innovation meets impact, and development is measured, managed, and magnified. Contact us today to explore how OAPS can elevate the effectiveness of your development initiatives.
                <br />
                <br />
                <b>
                OUR MISSION STATEMENT
                </b>
                <br />
                The overarching mission of Overseas Advisers for Partners Support (OAPS) is dedicated to providing specialized Program and Monitoring and Evaluation (M&E) services to our esteemed partners on a global scale. This commitment is realized through the implementation of a secure, efficient, and perpetually advancing professional process. In tandem with delivering high-quality services, OAPS strives to create a positive impact at the local level by fostering employment opportunities within communities. Additionally, we are deeply committed to nurturing the ongoing development of its workforce, recognizing that a skilled and motivated team is integral to achieving sustained excellence.
                <br />
                <br />
                Furthermore, OAPS is resolute in its dedication to generating tangible value for its stockholders, ensuring that the benefits of its endeavors are maximized for all stakeholders involved.
                <br />
                <b>
                Vision
                </b>
                <br />
                To be a premier provider of integrated Program Support and Monitoring & Evaluation (M&E) solutions, establishing ourselves as a trusted Third-Party Monitoring Partner (3PM). We aspire to deliver quality services, fostering positive impact and contributing to the success of our clients through innovation, transparency, and excellence

              </p>
              {/* <div className='pt-4'>
                <a href="#moreabout" className='commonBtn mt-5'>Learn More</a>
              </div> */}
            </div>
            {/* <div className="col-12 col-lg-4 mainAreaRight text-center mt-5 mt-md-0" data-aos="fade-left">
              <img src={DataImg} alt="" className='img-fluid' />
            </div> */}
          </div>
        </div>
        {/* <section id="moreabout">

          <SectionHeader
            HeaderText='OAPS is dedicated to delivering specialized and high-quality Program Support and Monitoring & Evaluation solutions. Our mission is to contribute to positive local impact, maximizing benefits for all stakeholders'
            HeaderName={["About", <span> OA</span>, "PS"]}
            SectionName='About Us'
          />
        </section> */}
      </div>
      <div className='row my-5'>
        <div className="col-12 col-md-6" data-aos="fade-right">
          <ul className='aboutLists'>
            <li><span><FaHandPointRight /></span>Innovating Development Measurement through Technology</li>
            <li><span><FaHandPointRight /></span>Tailored Solutions for Sustainable Global Impact</li>
            <li><span><FaHandPointRight /></span>Empowering Communities Through Jobs and Engagement</li>
            <li><span><FaHandPointRight /></span>Investing in Skills and Well-being for Excellence</li>
            <li><span><FaHandPointRight /></span>Premier Tech-Driven Program Support Worldwide</li>
            <li><span><FaHandPointRight /></span>Continuous Innovation for Efficient Monitoring and Evaluation</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 text-center" data-aos="fade-left">
          <img src={Growth} alt="growth" className="img-fluid w-75" />
        </div>
      </div>
    </div>
  )
}

export default Aboutpage