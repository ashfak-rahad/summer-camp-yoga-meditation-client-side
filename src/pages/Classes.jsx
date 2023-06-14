import React from 'react';




import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import useClasses from '../hooks/useClasses';
import ClassCard from '../components/ClassCard';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Classes = () => {
 
    const {user} = useAuth()
    const {classes} = useClasses("approved")
    const navigate = useNavigate()
    const {axiosSecure} = useAxiosSecure()
    const seletedClass = async (singleClass) => {

        if(user?.email) {
            const addToClass = {
                class_id: singleClass._id,
                class_name : singleClass.class_name,
                class_image : singleClass.class_image,
                instructor_name : singleClass.instructor_name,
                instructor_email : singleClass.instructor_email,
                price : singleClass.price,
                email: user?.email
            }
    

            const res = await axiosSecure.post("/select-class", addToClass)
            if(res.data.insertedId) {                 
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'This class is selectd',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        } 
        else {
            Swal.fire({
                title: 'Login In First',
                text: "Without login you are not select any class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
              })
        }

        
    }
    return (
        <main className='mt-[140px] container'>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    classes.map(singleClass => <ClassCard key={singleClass._id} seletedClass={seletedClass} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default Classes;