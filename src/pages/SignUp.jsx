import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/11001515/pexels-photo-11001515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Registration
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirm Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="confirm"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Photo URL</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="photo"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <div className=" mt-3 text-sm flex justify-between items-center">
            <p>It you  have an account?</p>
            <Link to="/login" className="py-2 px-5 bg-white border rounded-xl">
              Login 
            </Link>
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            SIGNIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
