import usePopularClasses from "../hooks/usePopularClasses";
import ClassCard from "./ClassCard";




const PopularClasses = () => {
    const {popularClasses} = usePopularClasses()
    return (
        <main className='mt-[140px] max-w-[1240px] mx-auto'>

            <div className='grid md:grid-cols-4 gap-5'>
                {
                   popularClasses && popularClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default PopularClasses;