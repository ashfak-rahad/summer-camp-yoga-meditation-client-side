

import InstructorCard from '../dashboard/pages/InstructorCord';
import useInstructors from '../hooks/useIntructors';






const Instructors = () => {
   

    const { instructors } = useInstructors();

    return (
        <div>
            
            <div className='max-w-[1240px] mx-auto my-20'>

                <div className='grid gap-5 m md:grid-cols-4'>
                    {
                        instructors.map(ins => <InstructorCard key={ins._id} ins={ins} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;