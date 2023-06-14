import React from 'react';

const Subscribe = () => {
    return (
        <main className='py-10 border md:px-14 px-3'>
            <div className='max-w-[1500px] mx-auto rounded-md bg-gray-200  p-5'>
                <div>
                    <h1 className='text-4xl font-semibold'>Subscribe</h1>
                    <p className='my-5 text-lg'>Want 10% off your first purchase? Sign up to our newsletter for your unique discount code. You’ll also get free tutorials and news sent straight to your inbox.</p>
                    <div>
                        <input className='my-10 w-[40%] placeholder:px-3  py-3 rounded-md border-spacing-y-2 outline-none ' type="text" name="" placeholder='First Name*' />
                        <input className='my-5 w-[40%] ml-2 placeholder:px-3 py-3 outline-none  rounded-md border-spacing-y-2' type="text" name="" placeholder='Last Name*' /><br />
                        <input className='mb-10  w-[81%] placeholder:px-3 py-3 outline-none rounded-md border-spacing-y-2' type="email" name="" placeholder='email*' /><br />
                        <button className='block px-6 py-3 mx-auto mt-5 font-semibold text-white bg-black rounded-md'>Start My learning journey </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Subscribe;