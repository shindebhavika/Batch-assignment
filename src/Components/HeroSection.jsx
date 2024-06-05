import React from "react";

function HeroSection({ theme }) {
  return (
    <div className="min-h-40 flex flex-row container justify-around flex-wrap">
      <div className="relative grid gap-7 mt-3">
        <img src="/images/star.png" alt="" />
        <div className="relative mt-2">
          <img src="/images/blur1.png" alt="" className="w-full h-full ml-7" />
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h1 className="font-bold text-6xl mb-4">
              Make The Best Financial Decisions
            </h1>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            </p>
            <p>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div>
              <button
                type="button"
                className={`btn mt-4 ${
                  theme ? "bg-black text-white " : " bg-white text-black"
                } p-3 min-w-32 font-bold`}>
                Get Started <i className="bi bi-arrow-right"></i>
              </button>
              <button
                type="button"
                className={`btn mt-4 p-3 min-w-32 ${
                  theme ? "text-black" : "text-white"
                }  font-bold`}>
                <i className="bi bi-play-circle"></i> Watch Video
              </button>
            </div>
          </div>
        </div>
        <img src="/images/star.png" alt="" />
        <div className="w-full sm:w-full">
          <img src="/images/tag.png" alt="" className="w-full mx-auto" />
        </div>
      </div>
      {/* right */}
      <div className="relative mr-[4rem]">
        <div className="relative">
          <img
            src="/images/hero-frame.png"
            alt=""
            className="w-full top-[0%] left-[0%]"
          />
          <img
            src="/images/right.png"
            alt=""
            className="absolute top-0 left-[15%]"
          />
          <img
            src="/images/mobile1.png"
            alt=""
            className="absolute top-[68%] left-[86%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-full"
          />
          <img
            src="/images/mobile2.png"
            alt=""
            className="absolute top-[61%] left-[68%] transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="/images/mobile1.png"
            alt=""
            className="absolute top-[0%] left-[0%] h-full w-[80%]"
          />
          <img src="/images/star.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
