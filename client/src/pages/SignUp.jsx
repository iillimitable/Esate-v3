import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="UserName"
              id="username"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              id="email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              id="password"
            />
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-green-700"
            >
              Create Account
            </button>
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-red-600 text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-red-700"
            >
              With google
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="underline decoration-sky-600 border-b  text-slate-800"
                href="#"
              >
                &#160;Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                &#160;Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link to={'/sign-in'}>
              <a
                class="no-underline font-bold border-b border-blue text-blue-500"
                href=""
              >
                Sign in.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
