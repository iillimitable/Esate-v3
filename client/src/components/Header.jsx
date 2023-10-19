import React from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Header() {
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
        <ul className="flex gap-3">
          <Link to="/">
            <li className="hidden sm:inline hover:underlin ">Home</li>
          </Link>

          <Link to="/about">
            <li className="hover:underline">About</li>
          </Link>

          <Link to="/sign-in">
            <li className="hover:underline">Singin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
