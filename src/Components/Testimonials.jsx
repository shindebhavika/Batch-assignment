import React from "react";

function Testimonals() {
  return (
    <div className=" flex  flex-col  container justify-center items-center mt-28 flex-wrap ">
      <div>
        <div className="mb-10">
          <p className="text-xl tracking-widest font-bold mb-6  text-center">
            TESTIMONIALS
          </p>
          <h1 className='font-bold text-5xl text=["blue"] text-center'>
            What Our Users <br />
            Say About Us?
          </h1>
        </div>
      </div>

      <div className=" flex flex-wrap">
        <div>
          <div className="relative w-fit h-fit">
            <img
              src="/images/feature-blur.png"
              alt="Blurred Feature"
              className="block w-full"
            />
            <img
              src="/images/Testimonal-group.png"
              alt="Feature"
              className="absolute top-0 left-0 w-full"
            />
          </div>
          <img src="/images/star.png" alt="" />
        </div>

        {/* right block */}
        <div className=" grid gap-3 ">
          <div>
            <div className=" grid gap-3  ">
              <div>
                <div className="mt-32 mb-9 p-3">
                  <div className="flex flex-row ">
                    <h2 className=" text-2xl ml-3 mt-2 font-extrabold">
                      The Best Financial Accounting App Ever!
                    </h2>
                  </div>
                  <div className="mt-3 mb-3 text-lg p-2  ">
                    <p>
                      &quot Arcu at dictum sapien, mollis. Vulputate sit id
                      <br />
                      accumsan, ultricies. In ultrices malesuada elit
                      <br />
                      mauris etiam odio. Duistristique lacus, et blandit
                      <br />
                      viverra nisl velit. Sed mattis rhoncus, diam
                      <br />
                      suspendisse sit nunc, gravida eu. Lectus eget eget <br />
                      ac dolor neque lorem sapien, suspendisse <br />
                      aliquam. &quot
                    </p>
                  </div>
                </div>
                <img src="/images/users.png" alt="" className="m-3" />
                <h1 className="m-3">-john thomus</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
