import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

import { HiMenuAlt1 } from "react-icons/hi";
// import { BiCart } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [toggle, seToggle] = useState(false);
  // const {user, logOut} = useAuth()
  // const {carts} = useCart()
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active" : "font-bold uppercase"
            }
          >
            Dashboard
          </NavLink>
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
