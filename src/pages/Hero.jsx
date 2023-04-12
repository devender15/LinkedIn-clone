import React from "react";
import { signInWithGoogle } from '../services/auth';
import YoutubeVideo from "../components/YoutubeVideo";
import { DATA } from "../data/corousel-data";

import HeroImg from "../assets/home.svg";
import Corousel from "../components/Corousel";

export default function Hero() {

  return (
    <main className="py-4">
      <section className="min-h-[35rem] max-w-[1128px] mx-auto pt-8 px-4 md:px-0 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h1 className="text-[#8f5849] font-light text-4xl md:text-5xl">
            Welcome to your professional community
          </h1>

          <div className="w-full pt-10 md:w-[75%]">
            <form>
              <div className="flex flex-col space-y-5">
                <div>
                  <label htmlFor="emailphone">Email or phone</label>
                  <input
                    type="text"
                    id="emailphone"
                    className="mt-2 block w-full bg-transparent border border-input-border p-3 rounded-sm"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="mt-2 block w-full bg-transparent border border-input-border p-3 rounded-sm"
                  />
                </div>
              </div>

              <div className="pt-6 flex flex-col space-y-6">
                <a
                  href="#"
                  className="font-sans text-md font-semibold text-[#0a66c2] hover:underline underline-offset-1 decoration-purple-700"
                >
                  Forgot password?
                </a>

                <button className="flex-shrink-0 max-w-[25rem] w-full  rounded-3xl mx-auto bg-[#0a66c2] text-white hover:bg-[#004182]">
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-t-2 border-gray-300 mr-3" />
              <span>or</span>
              <hr className="flex-grow border-t-2 border-gray-300 ml-3" />
            </div>

            <div
              className="w-full flex items-center justify-center gap-x-4 font-semibold cursor-pointer border rounded-3xl py-2 hover:bg-gray-50"
              onClick={signInWithGoogle}
            >
              <div className="w-5 h-4">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="LgbsSe-Bz112c"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              </div>
              <span>Continue with Google</span>
            </div>

            <div className="mt-4 border border-black rounded-3xl py-3 text-center hover:bg-gray-50 cursor-pointer">
              <a href="#" className="text-black hover:text-black">
                New to LinkedIn? Join now
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:inline w-[700px] h-[560px] relative">
          <img
            src={HeroImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-[1128px] mx-auto pt-16 px-4 md:px-0">
        <Corousel data={DATA} />
      </section>

      <section className="max-w-[1128px] mx-auto pt-16 px-4 md:px-0">
        <div className="flex flex-col justify-center md:flex-row items-center md:justify-between">
          <YoutubeVideo videoId="IlYUUN8rL_Y" />
          <div className="w-full flex flex-col justify-center mt-4 md:mt-0">
            <h2 className="text-[#b24020] text-3xl md:text-4xl font-normal mb-4 ml-0 md:ml-12">
              In it to chase my dream
            </h2>
            <h3 className="text-black font-light text-2xl md:text-4xl m-0 md:ml-12">
              Check out Gayatri’s story of finding a new job on LinkedIn
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
