import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { userLoginFuc, setUser, signInGoogleFun } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    userLoginFuc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };

  const handleGoggleSign = () => {
    signInGoogleFun()
      .then((res) => {
        setUser(res.user);
        toast.success(" Google Signin Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };
  return (
    <div className="flex justify-center items-center sm:min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl py-3 text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label block">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <div className=" relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPass ? "text" : "password"}
                className="input "
                placeholder="Password"
                required
              />
              <span
                className="text-xl absolute top-[28px] right-[30px] cursor-pointer z-50"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div>
              <Link to="/forget/password" className="link link-hover">
                Forgot password?
              </Link>
            </div>{" "}
            <div>
              <div className="flex items-center gap-1 my-3">
                <p className="h-px w-32 border"></p>
                <p className="text-center">Or</p>
                <p className="h-px w-32 border"></p>
              </div>
              <button
                onClick={handleGoggleSign}
                type="button"
                className="btn w-full bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <Link to="/register" className="text-center">
              Dont’t Have An Account ?
              <span className="text-red-500"> Register</span>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
