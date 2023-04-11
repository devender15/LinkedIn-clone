import React from "react";


export default function Hero() {
  return (
    <section className="min-h-[35rem] pt-8 px-4">
      <div>
        <h1 className="text-[#8f5849] font-light text-4xl">
          Welcome to your professional community
        </h1>

        <div className="w-full pt-10">
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
                className="font-sans text-md font-bold text-[#0a66c2]"
              >
                Forgot password?
              </a>

              <button className="flex-shrink-0 max-w-[25rem] w-full  rounded-3xl mx-auto bg-[#0a66c2] text-white">
                Sign in
              </button>
            </div>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t-2 border-gray-300 mr-3" />
            <span>or</span>
            <hr className="flex-grow border-t-2 border-gray-300 ml-3" />
          </div>

          <div className="w-full flex items-center justify-center gap-x-4 font-semibold cursor-pointer border rounded-3xl py-3">
            <div className="w-5 h-4">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="LgbsSe-Bz112c"
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

          <div className="mt-4 border border-black rounded-3xl py-3 text-center">
                <a href="#" className="text-black hover:text-black">New to LinkedIn? Join now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
