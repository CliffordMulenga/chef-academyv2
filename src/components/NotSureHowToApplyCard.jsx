import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';


const NotSureHowToApplyCard = () => {
    const navigate = useNavigate() 



    return (
        <div className='flex justify-center my-8'>
            <div className='w-[90%] text-center rounded-[20px] shadow-lg py-8'>
                <h1 className='text-[24px] font-medium sm:text-4xl'>Not sure how to apply?</h1>
                <p className='my-4'>If your are an trying to apply for an onsite program but is not currently in the UK click on the international students for guidelines</p>
                <div className='flex items-center gap-4 flex-col sm:flex-row sm:justify-center'>
                    <Button>Talk to our advisors</Button>
                    <Button onClick={() => navigate("/international-student")}>International students</Button>
                </div>
            </div>
        </div>
    )
}

export default NotSureHowToApplyCard
