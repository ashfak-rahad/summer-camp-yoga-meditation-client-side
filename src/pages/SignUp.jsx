import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import {  updateProfile } from 'firebase/auth';
import { useState } from 'react';


import { useForm } from 'react-hook-form';

import Swal from "sweetalert2";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
    
    


const SignUp = () => {

    const {register, handleSubmit, reset} = useForm()
    const {createUser, signInWithGoogle} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const {axiosSecure} = useAxiosSecure()
    const hendleForm = (data) => {


        const name = data.name
        const email = data.email
        const password = data.password
        const confirm_password = data.confirm_password
        const profileUrl = data.profile


        setError(null)
        setSuccess(null)

        if(!name || !profileUrl || !email || !password || !confirm_password) {
            setError("Cannot leave any field empty")
            return
        } 
        
        if(password.length < 6) {
            setError("is less than 6 characters")
            return
        }
       
        if(!/(?=.*?[A-Z])/.test(password)) {
            setError("don't have a capital letter")
            return 
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("don't have a special character")
            return 
        }
        if(password !== confirm_password) {
            setError("password Are not match")
            return 
        }
        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: profileUrl
            }) 
            
            const user = {
                name: name,
                email: email,
                photo_url: profileUrl
            }
            axiosSecure.put(`/add-user?email=${user?.email}`, user)
                .then(res => {
                    console.log(res)
                    if(res.data) {                       
                        
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Sign Up sucessfull',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          
                        }
                    })
                    navigate("/")
                
                setSuccess("Registration successfull")
                reset()

        }) 
        .catch(error => {
            // setError(error)
        })
    }


    const handelGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photo_url: result?.user?.photoURL
                }

                
                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                .then(res => {
                    if(res.data) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login sucessfull',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
                navigate(from)
            })
            .catch((error) => {
            })
    }


    return (
        <main className='w-full'>
            
           <section className='max-w-[1240px] flex  items-center w-full h-[70vh] gap-5'>
           <section className='p-[25px] mt-20 w-full md:mr-auto md:w-1/2 border'>
                <h2 className='text-3xl font-bold'>Create An Account</h2>

                <p className='mt-[8px]'>Already have an account? <Link to="/login" className='text-main'>Login</Link> </p>    
                <form onSubmit={handleSubmit(hendleForm)}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" {...register("name")} id="name" className='border-b-2 rounded w-full p-2 text-base outline-none' autoComplete='off' placeholder='Name' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="profile">Profile pic url</label>
                        <input type="text" {...register("profile", )} id="profile" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='Profile pic url' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email"  {...register("email", {required: true})} id="email" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Password</label>
                        <input type="password"  {...register("password")} id="password" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='password' />
                    </div> 
                    <div className='flex flex-col my-3'>
                        <label htmlFor="confirm_password" >Confirm Password</label>
                        <input type="password" {...register("confirm_password")} id="confirm_password" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='password' />
                    </div> 
                    <p className='text-[#da4747]'>{error && error}</p>
                    <p className='text-[#399d23]'>{success && success}</p>

                    <div className='flex flex-col md:flex-row items-center gap-5'>
                    <button type='submit' className='bg-indigo-600  p-2  rounded-xl text-white w-full  text-[21px] '>Sign Up</button>         
       

                    <div onClick={handelGoogle} className='cursor-pointer p-2 border rounded-full w-full flex justify-center items-center gap-[6px] '><FcGoogle className='text-[32px]'/><span>Continue with Google</span></div>  
                    
                   </div>
                    

                </form>
            </section>
           </section>

        </main>
        
    );
};

export default SignUp;