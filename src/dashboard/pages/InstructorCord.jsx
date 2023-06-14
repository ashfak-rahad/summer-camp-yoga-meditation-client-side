import React from 'react';
import { Fade } from 'react-awesome-reveal';

const InstructorCard = ({ ins }) => {

    const { name, email, image } = ins

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow-md'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src={image} alt="" />
                <Fade triggerOnce={.6} delay={300} direction="up" cascade>
                    <h2 className='text-2xl font-semibold '>{name}</h2>
                    <p>{email}</p>
                </Fade>
            </div>
        </div>
    );
};

export default InstructorCard;