import React, { use } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthContext";

const ForgetPasswordPage = () => {
  const { resetPasswordFun } = use(AuthContext);

  const navigate = useNavigate();
  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    resetPasswordFun(email)
      .then(() => {
        toast.success("Check Your Email");
        window.open("https://mail.google.com", "_blank");
        navigate("/login");
      })
      .catch((e) => {
        toast.error(e.code);
      });
    e.target.email.value = "";
  };
  return (
    <div className="hero bg-base-200 sm:min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleResetPassword}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Reset
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
