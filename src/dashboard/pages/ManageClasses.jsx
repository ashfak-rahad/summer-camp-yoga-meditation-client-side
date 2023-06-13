import Swal from 'sweetalert2';

import useAxiosSecure from '../../hooks/useAxiosSecure';



import { useState } from 'react';
import ClassTable from '../components/ClassTable';
import useClasses from '../../hooks/useClasses';


const ManageClasses = () => {
    // useTitle("Manage Classes")
    const { classes, refetch} = useClasses("all")
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(null)
    const {axiosSecure} = useAxiosSecure()
    const updateStatus = async (status, id) => {
        const res = await axiosSecure.put(`/change-class-status/${id}`, {status})
        if(res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Status Has Updated',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }
    const sendFeedback = (e) => {
        e.preventDefault()
        
        if(e.target.feed.value) {
            axiosSecure.put(`/send-feedback/${id}`, {feedback: e.target.feed.value})
            
            .then(res => {
                
                if(res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Feedback Has been Sent',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            e.target.reset()
            setIsOpen(false)
        }
    }
   
    const openFeed = (id) => {
        setIsOpen(true)
        setId(id)
    }

    return (
        <main className='h-screen overflow-hidden'>
             <div className={`${isOpen ? "" : "hidden"} p-4 max-w-[700px] h-[300px] shadow-lg fixed z-[111111] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded bg-white`}>
                <form onSubmit={sendFeedback}>
                    <textarea required name='feed' placeholder='write your feedback' className='w-full h-[220px] text-black bg-white resize-none outline-0 border-2 p-4 rounded'></textarea>
                    <div className='flex gap-3 justify-center'>
                        <button className='bg-indigo-600 text-white px-4 py-2 rounded'>Send</button>
                        <div onClick={() => setIsOpen(false)} className='bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded'>close</div>
                    </div>
                </form>
            </div>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Classes: {classes.length > 0 ?  classes.length : 0}</h3>
            </div>
           
            <section  className=' h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='bg-indigo-600 sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3  text-white lowercase'>CLASS IMAGE</th>
                            <th className='py-3  text-white lowercase'>CLASS NAME</th>
                            <th className='py-3  text-white lowercase'>INSTRUCTOR EMAIL</th>
                            <th className='py-3  text-white lowercase'>INSTRUCTOR NAME</th>
                            <th className='py-3  text-white lowercase'>AVAILAVLE SEATS</th>
                            <th className='py-3  text-white lowercase'>PRICE</th>
                            <th className='py-3  text-white lowercase'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            classes && classes.map((singleClass, i) => <ClassTable key={singleClass._id} updateStatus={updateStatus} openFeed={openFeed} i={i} singleClass={singleClass}  />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ManageClasses;