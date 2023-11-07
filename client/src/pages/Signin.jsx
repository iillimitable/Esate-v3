import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">Sign in</h1>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full text-center py-3 uppercase rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? "loading.." : "Sign in"}
              </button>
              <OAuth/>
            </form>
            
          </div>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="underline decoration-sky-600 border-b  text-slate-800"
              href="#"
            >
              &#160;Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              &#160;Privacy Policy
            </a>
          </div>

          <div className="text-grey-dark mt-6">
            dont have an account?
            <Link to={"/sign-Up"}>
              <span
                className="no-underline font-bold border-b border-blue text-blue-500"
                href=""
              >
                Sign Up.
              </span>
            </Link>
            {error && <p className="text-red-500 mt-5">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
