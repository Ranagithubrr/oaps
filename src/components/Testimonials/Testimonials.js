import React from 'react';
import MembersSlider from '../MembersSlider/MembersSlider';
import SectionHeader from '../SectionHeader/SectionHeader';
import Slider from "react-slick";
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <section className='Testimonials' id='review'>
      <div className="testimonialsInner MySize">
        <div data-aos="fade-up">
          <SectionHeader
            HeaderText='Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.'
            HeaderName={["Trusted by over 500 happy clients ", <span>worldwide</span>]}
            SectionName='TESTIMONIALS'
          />
        </div>
        <div className="MembersSlider row mt-5 d-none d-lg-block" data-aos="fade-up">
          <Slider {...settings}>
            <div className="col-4"><MembersSlider NameTi="Thomas, Indonesia" /></div>
            <div className="col-4"><MembersSlider NameTi="Sandra, America" /></div>
            <div className="col-4"><MembersSlider NameTi="John, Japan" /></div>
            <div className="col-4"><MembersSlider NameTi="Sara, Nepal" /></div>
            <div className="col-4"><MembersSlider NameTi="Bridon, Bangladesh" /></div>
          </Slider>
        </div>
      </div>

    </section>
  )
}

export default Testimonials
