import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

import { HiOutlineViewGridAdd, HiOutlineHome } from "react-icons/hi";
import {
  MdClass,
  MdOutlinePaid,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { SiManageiq } from "react-icons/si";
import useAuthorization from "../../../hooks/useAuthorization";

const Sidebar = () => {
  const { role } = useAuthorization();

  return (
    <aside className=" w-dashboard-md p-10 h-screen fixed top-0 bottom-0">
      <img src={logo} className="w-[35px]" alt="" />

      <ul className="mt-[60px]">
        {role === "admin" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-classes"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <SiManageiq className="text-2xl" />
                Manage Classes
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <MdOutlineManageAccounts className="text-2xl" />
                Manage Users
              </NavLink>
            </li>
          </>
        ) : role === "instructor" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <HiOutlineViewGridAdd className="text-2xl" /> Add Class
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-classes"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <MdClass className="text-2xl" />
                My Classes
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <FaHistory className="text-2xl" />
                Payment History
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/selected-classes"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <BiSelectMultiple className="text-2xl" />
                Selected Classes
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/enrolled-classes"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center"
                    : "uppercase flex gap-2 text-[16px] items-center"
                }
              >
                <MdOutlinePaid className="text-2xl" />
                Enrolled Classes
              </NavLink>
            </li>
          </>
        )}
        <Link
          className="bg-main px-3 py-1 rounded text-white inline-block mt-[100px]"
          to="/"
        >
          <HiOutlineHome />
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
