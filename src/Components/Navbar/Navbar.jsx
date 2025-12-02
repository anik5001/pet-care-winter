import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logoImg from "../../assets/pet-care-logo.png";

import toast, { ToastBar } from "react-hot-toast";

import { AuthContext } from "../../Provider/AuthContext";
import { FadeLoader } from "react-spinners";

const Navbar = () => {
  const { user, logOutFun, setUser, loading } = use(AuthContext);
  // console.log(loading);
  const navigate = useNavigate();
  const handleLogOut = () => {
    // console.log("loggggg");
    logOutFun()
      .then(() => {
        toast.success("Logout Successful");
        setUser(null);

        navigate("/");
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };
  return (
    <div className="sm:w-11/12 sm:mx-auto bg-primary text-white shadow-sm  rounded-2xl sm:rounded-full sticky -top-1 z-50">
      <div className=" navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-primary rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <Link className="flex gap-2 items-center justify-center text-xl">
            <img className="w-[60px] h-[60px]" src={logoImg} alt="" />
            <span className="hidden md:block font-bold text-2xl cursor-pointer hover:scale-120 transition ease-in-out">
              {" "}
              PET <span className="text-orange-700">CARE</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <FadeLoader />
          ) : user ? (
            <div className="flex items-center gap-3 justify-center">
              <div
                className="tooltip tooltip-bottom cursor-pointer"
                data-tip={user?.displayName}
              >
                <img
                  className="w-[50px] h-[50px] rounded-full border-2 border-green-500"
                  src={user?.photoURL}
                  alt=""
                />
              </div>

              <button
                onClick={handleLogOut}
                type="button"
                className="bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-800"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-800"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
