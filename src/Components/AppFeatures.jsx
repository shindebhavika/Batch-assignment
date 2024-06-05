import React from "react";

function AppFetures() {
  return (
    <div className="container  ">
      {/* left block */}
      <div className=" flex  flex-row  mt-3  container flex-wrap p-[3rem]">
        <div className="  grid gap-3  mt-32 ">
          <div>
            <div className="mb-3">
              <p className="text-[#FF5555] text-xl tracking-widest font-bold">
                ADVANTAGES
              </p>
              <h1 className='font-bold text-5xl text=["blue"] mt-2 ms:text-lg'>
                Why Choose Uifry?
              </h1>
            </div>
            <div className="mt-10">
              <div className="flex flex-row ">
                <img src="/images/notify.png" alt="" />

                <h2 className=" text-2xl ml-3 mt-2 font-extrabold">
                  Clever Notifications
                </h2>
              </div>
              <div className="mt-3 mb-3 text-lg">
                <p>
                  <p>
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  </p>
                  <p>
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis
                  </p>
                  <p>
                    tristique lacus, et blandit viverra nisl velit. Sed mattis
                  </p>
                  <p>
                    rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  </p>
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="relative w-fit h-fit">
              <div className="relative w-fit h-fit">
                <img
                  src="/images/feature-blur.png"
                  alt="Blurred Feature"
                  className="block w-full"
                />
                <img
                  src="/images/notify-mobile.png"
                  alt="Feature"
                  className="absolute top-0 left-0 w-full"
                />
              </div>
              <img
                src="/images/on Hold.png"
                alt=""
                className="absolute top-[50%] left-56 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* right block */}

      <div className=" flex  flex-row  mt-32 container flex-wrap-reverse p-[3rem]">
        <div className="">
          <div className="">
            <div className="relative w-fit h-fit">
              <div className="relative w-fit h-fit">
                <img
                  src="/images/feature-blur.png"
                  alt="Blurred Feature"
                  className="block w-full"
                />
                <img
                  src="/images/feature.png"
                  alt="Feature"
                  className="absolute top-0 left-0 right-7 w-full"
                />
              </div>
              <img
                src="/images/Group.png"
                alt=""
                className="absolute  left-[13.5rem] top-[38%] "
              />
            </div>
          </div>
        </div>
        <div className=" grid gap-3 ">
          <div>
            {" "}
            <img src="/images/star.png" alt="" />
            <div className="mt-40 ">
              <img src="/images/star.png" alt="" />
              <div className="flex flex-row ">
                <img src="/images/notify-1.png" alt="" />
                <h2 className=" text-2xl ml-3 mt-2 font-extrabold">
                  Fully Customizable
                </h2>
              </div>
              <div className="mt-3 mb-3 text-lg">
                <p>
                  <p>
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  </p>
                  <p>
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis
                  </p>
                  <p>
                    tristique lacus, et blandit viverra nisl velit. Sed mattis
                  </p>
                  <p>
                    rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  </p>
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFetures;
