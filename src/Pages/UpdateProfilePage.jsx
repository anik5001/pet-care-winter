import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const UpdateProfilePage = () => {
  const { user, setUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    setLoading(true);
    // console.log("hwllo update", name, photoURL);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        // ✅ Update local context state immediately
        setUser({ ...user, displayName: name, photoURL: photoURL });

        toast.success("Profile updated successfully 🎉");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.message);
      })
      .finally(() => {
        setLoading(false);
        form.reset();
      });
    // navigate("/profile");
    // form.name.value = "";
    // form.photoUrl.value = "";
  };
  return (
    <div className="flex justify-center items-center sm:min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl py-3 text-center">Update your profile</h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Update Profile
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
