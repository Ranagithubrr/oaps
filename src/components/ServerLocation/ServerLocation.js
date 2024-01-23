import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader';
import './ServerLocation.css';

const ServerLocation = () => {
    return (
        <div className='serverLocation'>
            <div className="serverLocationInner MySize">
                <div data-aos="fade-up">
                    <SectionHeader
                        HeaderText='OAPS operates globally, driving positive change across diverse landscapes and communities'
                        HeaderName={["Where Do We Work?"]}
                        SectionName='Our Areas'
                    />
                </div>
                <div className="mapArea mt-5" data-aos="fade-up">
                    <div className="canada countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="usa countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="sweden countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                           
                        </div>
                    </div>
                    <div className="france countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="china countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="indo countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="aus countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="brazil countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                            
                        </div>
                    </div>
                    <div className="sa countryName">
                        <div className="blinkAndCountry">
                            <div className="blink"><div className="blinker"></div></div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServerLocation
