import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="max-w-[1128px] px-4 md:px-0 m-auto py-4 flex items-center justify-between flex-nowrap md:flex-wrap md:gap-y-1">
      <div className="block cursor-pointer mr-auto">
        <icon
          className="block text-[#0a66c2] w-[84px] h-[21px] md:w-[135px] md:h-[34px] order-1 lazy-loaded"
          data-test-id="nav-logo"
          aria-hidden="true"
          aria-busy="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 84 21"
            preserveAspectRatio="xMinYMin meet"
            version="1.1"
            focusable="false"
            className="lazy-loaded"
            aria-busy="false"
          >
            <g
              className="inbug"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
                className="bug-text-color"
                transform="translate(63.000000, 0.000000)"
              ></path>
              <path
                d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
                className="background"
                fill="currentColor"
              ></path>
            </g>
            <g className="linkedin-text">
              <path
                d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
                fill="currentColor"
              ></path>
              <path
                d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
                fill="currentColor"
              ></path>
              <polygon
                fill="currentColor"
                points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"
              ></polygon>
              <path
                d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
                fill="currentColor"
              ></path>
              <path
                d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
                fill="currentColor"
              ></path>
              <polygon
                fill="currentColor"
                points="3 3 0 3 0 18 9 18 9 15 3 15"
              ></polygon>
            </g>
          </svg>
        </icon>
      </div>

      <ul className="md:flex items-center space-x-8 order-3 mr-0.5 after:!h-[37px] hidden ">
        <li className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
          <icon
            className="top-nav-link__icon flex h-3 w-6 flex-shrink-0 lazy-loaded"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              focusable="false"
              className="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z"
                fill="currentColor"
              ></path>
            </svg>
          </icon>
          <span
            className="font-sans text-gray-500 hover:text-black text-sm leading-regular text-center
          font-regular"
          >
            Discover
          </span>
        </li>
        <li className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
          <icon
            className="top-nav-link__icon flex h-3 w-6 flex-shrink-0 lazy-loaded"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              fill="none"
              focusable="false"
              className="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </icon>
          <span
            className="font-sans text-gray-500 hover:text-black text-sm leading-regular text-center
          font-regular"
          >
            People
          </span>
        </li>
        <li className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
          <icon
            className="top-nav-link__icon flex h-3 w-6 flex-shrink-0 lazy-loaded"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              focusable="false"
              className="lazy-loaded"
              aria-busy="false"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                fill="currentColor"
                fillOpacity=".25"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                fill="currentColor"
                fillOpacity=".6"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                fill="currentColor"
              ></path>
            </svg>
          </icon>
          <span
            className="font-sans text-gray-500 hover:text-black text-sm leading-regular text-center
          font-regular"
          >
            Learning
          </span>
        </li>
        <li className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
          <icon
            className="top-nav-link__icon flex h-3 w-6 flex-shrink-0 lazy-loaded"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              fill="none"
              focusable="false"
              className="lazy-loaded"
              aria-busy="false"
            >
              <path
                d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                fill="currentColor"
              ></path>
            </svg>
          </icon>
          <span
            className="font-sans text-gray-500 hover:text-black text-sm leading-regular text-center
          font-regular"
          >
            Jobs
          </span>
        </li>

        <div className="h-[37px] w-[0.063rem] bg-color-border-low-emphasis" />
      </ul>

      <div className="flex order-3 gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 md:flex-wrap md:flex-0">
        <a href="#" className="h-min min-h-[3rem] rounded-3xl py-3 px-6 text-center text-base font-[600] hover:bg-color-button-container-tertiary text-gray-500 hover:text-black">Join now</a>

        <a href="#" className="h-min min-h-[3rem] rounded-3xl py-3 px-6 text-center text-base font-[600] hover:bg-color-button-container-tertiary text-[#0a66c2] hover:text-black border-2 border-[#0a66c2]">Sign in</a>
      </div>
    </nav>
  );
}
