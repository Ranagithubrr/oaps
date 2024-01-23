import React from 'react';
import './MainArea.css';
import DataImg from '../../Images/svgs/undraw_data_report_re_p4so.svg'
import { Link } from 'react-router-dom';

const MainArea = () => {
  return (
    <div className='MainArea' >
      <div className="mainAreaInner MySize">
        <div className="row d-flex align-items-center mt-5">
          <div className="col-12 col-lg-12 mainAreaLeft" data-aos="fade-up">
            {/* <h4 className='mt-4 mt-lg-0'>Hi! Welcome to OAPS</h4> */}
            <h2> <span>Global Partnerships, Local Expertise:</span> <br /> Your Success, Our Commitment</h2>
            {/* <p className='description'>OAPS, established in 2009, is a pioneering Sole Proprietorship committed to revolutionizing development interventions through cutting-edge technology-based performance management systems. Renowned for pushing boundaries and fostering innovation, OAPS specializes in Monitoring and Evaluation services across diverse sectors. With a client-centric ethos, OAPS collaborates with public and private entities, NGOs, governments, and donor agencies, delivering tailored solutions that magnify the impact of development initiatives. Embark on a transformative journey where innovation meets impact with OAPS.</p>                      */}
            {/* <div className='pt-4'>
              <Link to="/about" className='commonBtn mt-5'>Learn More</Link>
            </div> */}
          </div>
          {/* <div className="col-12 col-lg-4 mainAreaRight text-center mt-5 mt-md-0" data-aos="fade-left">
            <img src={DataImg} alt="" className='img-fluid'/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default MainArea
