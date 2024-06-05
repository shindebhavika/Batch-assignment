import React, { useState } from "react";

function Header({ theme }) {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start font-bold">
          <img src="/images/logo.png" alt="" />
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 md:flex-nowrap text-lg">
            {["Home", "Features", "Pricing", "FAQs", "About"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`px-2 ${
                    activeLink === link
                      ? "text-[#FF5555]"
                      : theme
                      ? "text-black"
                      : "text-white"
                  }`}
                  onClick={() => handleLinkClick(link)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <button
              type="button"
              className={`btn mt-2 ${
                theme ? "bg-black text-white" : "bg-white text-black"
              } p-2 w-32 transition duration-300 ease-in-out hover:p-7 hover:text-white`}>
              Download
            </button>

            <img src="/images/star.png" alt="" className="ml-0" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
