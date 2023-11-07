import React from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-400">Avinash</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FcSearch />
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hidden sm:inline hover:underline  ">Home</li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full w-9 h-9 object-cover"
                src={currentUser.avatar}
                alt={"profile"}
              ></img>
            ) : (
              <li className="hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
