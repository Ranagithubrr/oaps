import React from 'react'
import MainArea from '../components/MainArea/MainArea'
import Slider from '../components/Slider/Slider'
import HostingPlan from '../components/HostingPlan/HostingPlan'
import Services from '../components/Services/Services'
import ServerLocation from '../components/ServerLocation/ServerLocation'

const Homepage = () => {
    return (
        <div className="container-fluid">
            <MainArea />
            <Slider />
            <HostingPlan />
            <Services />
            {/* <EasySteps /> */}
            {/* <SelectPlan /> */}
            <ServerLocation />
            {/* <Testimonials /> */}
        </div>
    )
}

export default Homepage