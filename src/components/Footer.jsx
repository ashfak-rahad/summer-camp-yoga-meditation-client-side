import React from "react";
import logo from "/logo.png";
import {
  AiFillGithub,
  AiFillSkype,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4">
      <footer className="text-gray-400 bg-gray-900 body-font rounded-2xl ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <p className="flex title-font font-medium item-center md:justify-start justify-center text-gray-900">
              <img className="w-9 mr-2" src={logo} alt="" />
              <span className="text-sm font-semibold text-white">
                Yoga<br /> Meditation
              </span>
            </p>
            <p className="mt text-sm text-gray-500">
            Yoga and meditation are practices that have been around for thousands of years and are widely recognized for their numerous physical, mental, and spiritual benefits. While they are related, they are separate practices with distinct focuses and techniques.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -md-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                My ACCOUNT
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Wishlist
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Manage Account
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Return Orders
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                INFORMATION
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Return Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Terms & Condition
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CUSTOMER SERVICE
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    24/7 Service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    Feedback
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="">
                    First Response
                  </a>
                </li>
                
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label  className="leading-7 text-sm text-gray-400">
                    {" "}
                    Enter Email
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-sm md:text-left text-center">
              Yoga and meditation are practices that have been around for <br /> thousands of years
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              @ 2023 Best for Mental Health -{" "}
              <Link to="/about" className="text-gray-500 ml-1">
                About Us
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="" className="text-gray-400 ml-3">
                <AiFillGithub></AiFillGithub>
              </a>
              <a href="" className="text-gray-400 ml-3">
                <AiFillSkype />
              </a>
              <a href="" className="text-gray-400 ml-3">
                <AiFillTwitterSquare />
              </a>
              <a href="" className="text-gray-400 ml-3">
                <AiOutlineFacebook />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
