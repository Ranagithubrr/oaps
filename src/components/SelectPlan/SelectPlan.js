import React from 'react';
import Plan from './Plan';

const SelectPlan = () => {
    return (
        
            <div className="MySize d-flex">
                <div className='row' data-aos="fade-up">
                <Plan
                    Step="1"
                    PlanName="Consultation and Needs Assessment"
                    PlanText="Discuss your goals with our experts. We tailor solutions by understanding your unique needs and challenges."
                    BorderRight='Yes'
                />
                <Plan
                    Step="2"
                    PlanName="Customized Program Development"
                    PlanText="Collaborate on program design, strategic planning, and capacity building for sustainable and positive impact"
                    BorderRight='Yes'
                />
                <Plan
                    Step="3"
                    PlanName="Comprehensive Monitoring & Evaluation"
                    PlanText="Benefit from real-time performance monitoring, impact assessment, and quality assurance for informed decision-making"
                    BorderRight='Yes'
                />
                <Plan
                    Step="4"
                    PlanName="Empowerment and Innovation Integration"
                    PlanText="Engage in community empowerment initiatives, workforce development, and cutting-edge technology solutions for continuous improvement and positive change."
                />
            </div>

        </div>
    )
}

export default SelectPlan
