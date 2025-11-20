import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast, { ToastBar } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { setUser, userSignUpFuc, updateUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photoURL, email, password });
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain an uppercase, a lowercase, and be at least 6 characters long!"
      );
      return;
    }

    userSignUpFuc(email, password)
      .then((res) => {
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser(res.user);
            toast.success("Successful Register");
            setLoading(false);
            navigate("/");
          })
          .catch((e) => {
            toast.error(e.code);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error(
            "User already exists in the database. Please log in instead."
          );
        } else {
          toast.error(e.code);
        }
      });
  };
  return (
    <div className="flex justify-center items-center sm:min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl py-3 text-center">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <div className=" relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPass ? "text" : "password"}
                className="input"
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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <Link to="/login" className="text-center">
              Already Have An Account ?
              <span className="text-red-500"> Login</span>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
