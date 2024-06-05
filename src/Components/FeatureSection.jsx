import React from "react";

function FeatureSection() {
  return (
    <div className=" flex flex-row  container flex-wrap-reverse p-[3rem]">
      <div>
        <div className="relative w-fit h-fit">
          <img
            src="/images/feature-blur.png"
            alt="Blurred Feature"
            className="block w-full"
          />
          <img
            src="/images/feature.png"
            alt="Feature"
            className="absolute top-0 left-0 w-full"
          />
        </div>
      </div>

      {/* right block */}
      <div className=" grid gap-3 ">
        <div>
          <div className="mb-10">
            <p className="text-[#FF5555] text-xl tracking-widest font-bold mb-6">
              FEATURES
            </p>
            <h1 className='font-bold text-5xl text=["blue"]'>Uifry Premium</h1>
          </div>
          <div className="mt-7">
            <div className="flex flex-row ">
              <img src="/images/feature-icon-1.png" alt="" />
              <h2 className="font-bold text-2xl ml-3">Budgeting Intervals</h2>
            </div>
            <div className="mt-3 mb-3 text-lg">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-row ">
              <img src="/images/feature-icon-2.png" alt="" />
              <h2 className="font-bold text-2xl ml-3">Budgeting Intervals</h2>
            </div>
            <div className="mt-3 mb-3 text-lg">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row ">
              <img src="/images/feature-icon-3.png" alt="" />
              <h2 className="font-bold text-2xl ml-3">Budgeting Intervals</h2>
            </div>
            <div className="mt-3 mb-3 text-lg">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
