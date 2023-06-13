import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import SelectedClassTable from "../components/SelectedClassTable";
import { Link } from "react-router-dom";
import useSelectedClasses from "../../hooks/useSelectedClasses";



const SelectedClasses = () => {
    
    const {selectedClasses, refetch} = useSelectedClasses()
    const {axiosSecure} = useAxiosSecure()
    const deleteSelectedClass = (id) => {        
                Swal.fire({
                    title: 'Are you sure?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/delete-selected-class/${id}`)
                        .then(data => {
                            if(data.data.deletedCount > 0) {
                                refetch()
                                Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                      )
                                }
                         })
 
                    }
                  })
           
        
    }
    return (
        <main className='h-screen overflow-hidden'>
        <div className='flex justify-between items-center font-bold mt-4'>
            <h3 className='text-3xl'>My Classes: {selectedClasses.length > 0 ?  selectedClasses.length : 0}</h3>
            <Link to="/dashboard/payment" ><button className="bg-indigo-600 px-6 py-3 rounded text-white mt-4">Pay</button></Link>
        </div>
        <section  className='h-[650px] mt-2 overflow-x-auto relative'>
            <table className='w-full'>
                <thead >
                    <tr className='bg-indigo-600 sticky top-0 px-10'>
                        <th className='py-3  text-white'></th>
                        <th className='py-3  text-white'>Class Image</th>
                        <th className='py-3  text-white'>Class Name</th>
                        <th className='py-3  text-white'>Instructor Name</th>
                        <th className='py-3  text-white'>Instructor Email</th>
                        <th className='py-3  text-white'>Price</th>
                        <th className='py-3  text-white'>Action</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        selectedClasses && selectedClasses.map((singleClass, i) => <SelectedClassTable key={singleClass._id} singleClass={singleClass} i={i} deleteSelectedClass={deleteSelectedClass}/>)
                    }
                    
                </tbody>
            </table>
        </section>
    </main>
    );
};

export default SelectedClasses;