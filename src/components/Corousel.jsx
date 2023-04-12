import React, { useState } from "react";

export default function Corousel({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeStartX, setSwipeStartX] = useState(null);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.length - 1 ? data.length - 1 : prevIndex + 1
    );
  };

  const handleTouchStart = (event) => {
    setSwipeStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (swipeStartX !== null) {
      const swipeDistance = event.touches[0].clientX - swipeStartX;
      if (swipeDistance > 50) {
        handlePrevClick();
        setSwipeStartX(null);
      } else if (swipeDistance < -50) {
        handleNextClick();
        setSwipeStartX(null);
      }
    }
  };

  return (
    <div className="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {/* Previous and Next Buttons */}
      <div className="hidden w-full md:flex justify-end my-4">
        <div
          className={`flex items-center space-x-2 px-3 py-2 hover:bg-color-button-container-tertiary rounded-3xl ${currentImageIndex === 0 ? 'cursor-not-allowed': 'cursor-pointer'}`}
          onClick={handlePrevClick}
        >
          <icon
            className="pointer-events-none"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              className="artdeco-icon lazy-loaded"
              focusable="false"
              aria-busy="false"
            >
              <path
                d="M10,12l6,8.94L14.45,22,8.26,12.85a1.5,1.5,0,0,1,0-1.69L14.45,2,16,3.06Z"
                className={`large-icon ${currentImageIndex === 0 ? 'fill-gray-400' : 'fill-button-text'}`}
              ></path>
            </svg>
          </icon>
          <button className={`bg-transparent outline-none p-0 border-none ${currentImageIndex === 0 ? 'cursor-not-allowed text-gray-400': 'cursor-pointer text-button-text'} `}>
            Previous
          </button>
        </div>

        <div
          className={`flex items-center space-x-2 px-3 py-2 hover:bg-color-button-container-tertiary rounded-3xl ${currentImageIndex === data.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={handleNextClick}
        >
          <button className={`bg-transparent outline-none p-0 border-none  ${currentImageIndex === data.length - 1 ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer text-button-text'}`}>
            Next
          </button>
          <icon
            className="slide-list__nav-icon pointer-events-none"
            aria-hidden="true"
            aria-busy="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              className="artdeco-icon lazy-loaded"
              focusable="false"
              aria-busy="false"
            >
              <path
                d="M14,12L8,3.06,9.55,2l6.19,9.15a1.5,1.5,0,0,1,0,1.69L9.55,22,8,20.94Z"
                className={`large-icon ${currentImageIndex === data.length - 1 ? 'fill-gray-400' : 'fill-button-text'}`}
              ></path>
            </svg>
          </icon>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-4">
        <div className="break-words">
          <h2 className="font-sans text-2xl md:text-4xl leading-[1.25] text-[#8f5849]">
            {data[currentImageIndex].title}
          </h2>
          <p className="font-sans text-lg md:text-3xl font-extralight text-black leading-[1.25] my-2">
            {data[currentImageIndex].desc}
          </p>
        </div>

        <img
          className="object-cover w-80 h-80 md:h-96 md:w-96 rounded-full"
          src={data[currentImageIndex].img}
          alt="data"
        />
      </div>

      <div className={`flex md:absolute bottom-0 left-0 right-0 z-10 md:hidden justify-center pb-2 md:pb-4`}>
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              currentImageIndex === index ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
