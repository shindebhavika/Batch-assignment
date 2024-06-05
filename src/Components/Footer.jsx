import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div className="col mb-3 flex-1">
      <h5 className="font-bold text-lg tracking-wider mb-3">{title}</h5>
      <ul className="nav flex-column gap-2">
        {links.map((link, index) => (
          <li className="nav-item mb-2" key={index}>
            <a href={link.href} className="p-0 font-medium">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Footer({theme}) {
  const linksData = [
    {
      title: "Links",
      links: [
        { text: "Home", href: "#" },
        { text: "About US", href: "#" },
        { text: "Bookings", href: "#" },
        { text: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Use", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Cookies Policy", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { text: "Take Tour", href: "#" },
        { text: "Live Chat", href: "#" },
        { text: "Reviews", href: "#" },
      ],
    },
  ];

  return (
    <div className="container relative">
     <div className="relative">
  {/* Blurred image */}
 
  <img src="../public/images/blur1.png" alt="" className=" relative w-1/5" />
  <img src="../public/images/star.png" alt="" className=" " />
  <img src="../public/images/star.png" alt="" className=" ml-[100%] mb-2" />
  {/* Frame image */}
  <img src="../public/images/frame.png" alt="" className="w-full " />

  <div
    className="absolute text-white"
    style={{
      top: "62%",
      left: "36%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <h1 className="font-bold text-3xl text-blue mb-3">
      Ready To Get Started?
    </h1>
    <p>
      Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
    </p>
    <button
      type="button"
      className="btn absolute bg-white text-black hover:bg-gray-800 hover:text-white flex items-center justify-center mt-3"
    >
      Download app <i className="bi bi-apple ml-2"></i>
    </button>
    
  </div>
  
</div>

      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3 flex-1 mr-6">
          <p className="">
            <img src="../public/images/logo.png" alt="" />
          </p>
          <p className="font-medium flex gap-2">
            <i className="bi bi-envelope-fill text-[#FF5555] text-lg"></i>
            Help@Frybix.com
          </p>
          <p className="flex gap-1 font-medium">
            <i className="bi bi-telephone-fill text-[#FF5555] text-lg"></i>
            +1234 456 678 89
          </p>
        </div>
        {linksData.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}
        <div className="col mb-3 flex-1">
          <h5 className="font-bold text-lg tracking-wider mb-3">Newsletter</h5>
          <ul className="flex-column gap-2">
            <li className="mb-2">
              <a href="#" className="p-0 font-medium">
                Stay Up To Date
              </a>
            </li>
            <li>
              <form className="d-flex flex-column  flex-sm-row gap-2">
                <input
                  id="newsletter1"
                  type="text"
                  className="w-100 w-sm-auto p-1 text-center"
                  placeholder="Your Email"
                />

{theme ? (
  <button className="bg-black text-white  btn font-bold" type="button">
  Subscribe
   </button>
) : (
  <button className="bg-white text-black btn font-bold" type="button">
    Subscribe
  </button>
)}





              </form>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-center border-top p-4">Copyright 2022 uifry.com all rights reserved</p>
    </div>
  );
}

export default Footer;
