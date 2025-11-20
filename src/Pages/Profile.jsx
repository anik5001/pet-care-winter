import React, { use } from "react";

import Loading from "../Components/Loading";
import { Link } from "react-router";
import LoginPage from "./LoginPage";
import { AuthContext } from "../Provider/AuthContext";

const Profile = () => {
  const { user, loading } = use(AuthContext);
  if (loading) return <Loading></Loading>;
  return user ? (
    <div className="md:max-w-2xl shadow-2xl flex  items-center justify-center  mx-auto  space-y-4 md:my-13">
      <div className="text-center sm:flex gap-4 items-center  md:gap-10 py-10">
        <div>
          <img
            className="rounded-full w-[200px] h-[200px] object-cover border-3 border-green-600"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div>
          <p className="text-xl font-bold">{user?.displayName}</p>

          <h1 className="font-bold text-gray-700 my-2 mb-6">{user?.email}</h1>

          <Link
            to="/update/profile"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-800 "
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <LoginPage></LoginPage>
  );
};

export default Profile;
