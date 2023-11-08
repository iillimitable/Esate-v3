import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg  mx-auto:">
      <h1 className="text-3xl font-semibold text-center my-7"> Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full w-27 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input id="username" type="text" placeholder="username" className="border p-3 rounded-lg" />
        <input id="email" type="text" placeholder="email" className="border p-3 rounded-lg" />
        <input id="password" type="text" placeholder="password" className="border p-3 rounded-lg" />
        <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-85">UPDATE</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer">Delete account</span>
        <span className="text-red-600 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
