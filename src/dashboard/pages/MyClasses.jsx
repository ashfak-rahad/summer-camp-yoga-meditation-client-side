import useMyClasses from "../../hooks/useMyClasses";
import useTitle from "../../hooks/useTitle";
import ClassTable from "../components/ClassTable";

const MyClasses = () => {
    useTitle("My Classes")
    const {classes} = useMyClasses()

    return (
        <main className='h-screen overflow-hidden'>
        <div className='flex justify-between items-center font-bold mt-4'>
            <h3 className='text-3xl'>My Classes: {classes.length > 0 ?  classes.length : 0}</h3>
        </div>
        <section  className='h-[650px] mt-2 overflow-x-auto relative'>
            <table className='w-full'>
                <thead >
                    <tr className='bg-main sticky top-0 px-10'>
                        <th className='py-3  text-white'></th>
                        <th className='py-3  text-white'>Class Image</th>
                        <th className='py-3  text-white'>Total enrolled</th>
                        <th className='py-3  text-white'>Class Name</th>
                        <th className='py-3  text-white'>Feedback</th>
                        <th className='py-3  text-white'>Status</th>
                        <th className='py-3  text-white'>Action</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        classes && classes.map((singleClass, i) => <ClassTable key={singleClass._id} i={i} singleClass={singleClass}  />)
                    }
                    
                </tbody>
            </table>
        </section>
    </main>
    );
};

export default MyClasses;