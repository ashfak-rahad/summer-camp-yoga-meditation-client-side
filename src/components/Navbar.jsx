import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";

import { HiMenuAlt1 } from "react-icons/hi";

import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import useAuthorization from "../hooks/useAuthorization";

const Navbar = () => {
  const [toggle, seToggle] = useState(false);
  const { user, logOut } = useAuth();
  const { role } = useAuthorization();

  return (
    <nav className="flex justify-between px-3 py-2 md:px-[55px] z-[1000000] fixed top-0 left-0 right-0 bg-slate-600">
      <h1 className="text-3xl font-bold">
        <Link>
          {" "}
          <p className="flex title-font font-medium md:justify-start justify-center text-gray-900">
            <img className="h-[45px]" src={logo} alt="" />
            <span className="text-sm font-semibold text-white">
              Yoga <br /> Meditation
            </span>
          </p>
        </Link>
      </h1>

      <button
        onClick={() => seToggle(!toggle)}
        className="text-white text-2xl md:hidden"
      >
        {toggle ? <MdClose /> : <HiMenuAlt1 />}
      </button>
      <ul
        className={`flex transition-all duration-200 md:flex-row flex-col p-4 bg-[#1515157f] w-full md:w-auto md:bg-transparent absolute md:static top-[61px] md:items-center gap-4 text-white ${
          toggle ? "left-0" : "-left-full"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : "font-bold uppercase"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive ? "active" : "font-bold uppercase"
            }
          >
            Instructors
          </NavLink>
        </li>
        <li>
          {user?.email && (
            <NavLink
              to={`/dashboard/${
                role === "admin"
                  ? "manage-classes"
                  : role === "instructor"
                  ? "add-class"
                  : "selected-classes"
              }`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {" "}
              Dashboard
            </NavLink>
          )}
        </li>
        <li>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive ? "active" : "font-bold uppercase"
            }
          >
            Classes
          </NavLink>
        </li>
        <li>
          {user?.photoURL ? (
            <img
              className="w-[35px] h-[35px] rounded-full cursor-pointer"
              src={user?.photoURL}
              title={user.displayName}
              alt=""
            />
          ) : (
            ""
          )}
        </li>
        <li>
          {user ? (
            <button
              onClick={logOut}
              className=" text-main px-4 py-2 flex items-center gap-2  rounded p-3"
            >
              <AiOutlineLogin /> LogOut
            </button>
          ) : (
            <button>
              <Link
                className="flex items-center gap-2 p-3  text-main"
                to="/login"
              >
                {" "}
                <AiOutlineLogin /> Login
              </Link>
            </button>
          )}
        </li>

        {/* <li className="md:ml-16">
                    <Link to="/dashboard/my-cart"><p className="relative w-6"><BiCart/> <span className="bg-[#c02727] absolute -top-5 -right-4 inline-block px-2 rounded-full">{carts.length || 0}</span></p></Link>
                </li> */}
        {/* <li>
                    {
                        user?.email ? <button onClick={logOut} className="font-bold">SIGN OUT</button> : <button><Link to="/login">Login</Link></button>
                    }
                </li>
                <li>
                    {
                        user && user?.photoURL ? <img className="w-[44px] rounded-full" src={user?.photoURL } alt="" /> : <img className="w-[44px]" src={userPlaceHolder} alt="" />
                    }
                </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
