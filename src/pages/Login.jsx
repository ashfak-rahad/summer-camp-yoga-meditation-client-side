import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { AiFillEyeInvisible,AiFillEye  } from "react-icons/ai";
// import useTitle from "../hooks/useTitle";

import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';






const Login = () => {
    // useTitle("Login")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const {signIn, signInWithGoogle, user} = useAuth()
    const [error, setError] = useState(null)
    const { register, handleSubmit, } = useForm();
    const {axiosSecure} = useAxiosSecure()

    const hendleForm = (data) => {
       
        setError(null)

        if(!data.email || !data.password) {
            setError("Cannot leave any field empty")
            return
        } 
        signIn(data.email, data.password) 
        .then (() => {
            navigate(from, { replace: true })
            form.reset()
        })
        .catch(error => {
            setError(error.message)  
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
        
                <section className='container flex  items-center w-full h-[70vh] gap-5'>
                

                <section className=' p-[25px] mt-10 ml-auto md:w-1/2'>
                <h2 className='text-3xl font-bold'>Login.</h2>
                <p className='mt-[8px] '>Don't Have An Account? <Link to="/sign-up" className='text-main'>Create New Account</Link></p>
                <form onSubmit={handleSubmit(hendleForm)}>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="email" className='my-2 text-[17px]'>Email</label>
                        <input type="email" {...register("email", { required: true })} id="email" className='border-b-2 rounded py-2 px-4 outline-none text-base' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="password" className='my-2 text-[17px] block'>Password</label>
                        <div className='relative w-full'>
                        <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} id="password" className='border-b-2 w-full rounded py-2 px-4 outline-none text-base' autoComplete='off' placeholder='password' />
                        <span className='absolute top-3 right-3'>
                            {
                               showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>
                            }
                        </span>
                        </div>
                    </div>
                    <p className='text-[#da4747]'>{error && error}</p> 
                   <div className='flex flex-col md:flex-row items-center gap-5'>
                   <button type='submit' className='bg-main  p-2  rounded-full text-white w-full  text-[21px] '>Login</button>         

                    <div onClick={handelGoogle} className='cursor-pointer p-2 border rounded-full w-full flex justify-center items-center gap-[6px] '><FcGoogle className='text-[32px]'/><span>Continue with Google</span></div>  
                    
                   </div>

                </form>
                </section>
                
                </section>
            </main>
            
   
        
    );
};

export default Login;