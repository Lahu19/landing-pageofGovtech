import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1200);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-white shadow-lg">
      {isSmallScreen ? (
        <div>
          <div className="flex py-2 container mx-auto justify-between px-5">
            <button
              className="hamburger-button text-primary text-[30px] flex justify-end self-center"
              onClick={toggleSidebar}
            >
              &#9776;
            </button>
            <a href="https://codeforgovtech.in" target="_blank">
              <img src="./images/logo-text.webp" width={"120px"} />
            </a>
          </div>

          {sidebarOpen && (
            <div className="sidebar">
              <button
                className="close-button text-primary w-full text-[40px] flex justify-end"
                onClick={toggleSidebar}
              >
                &times;
              </button>
              <div className="flex justify-center mb-4">
                <a href="https://codeforgovtech.in" target="_blank">
                  <img src="./images/logo-text.webp" width={"120px"} />
                </a>
              </div>

              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Home
                </button>
              </Link>
              <Link
                to="impact"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Impact
                </button>
              </Link>
              <Link
                to="chapters"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  College Chapter
                </button>
              </Link>
              <Link
                to="chapter-structure"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Chapter Structure
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <nav className="bg-white px-4 py-2 flex container mx-auto justify-between items-center">
          <div>
            <a href="https://codeforgovtech.in" target="_blank">
              <img src="./images/logo-text.webp" width={"120px"} />
            </a>
          </div>
          <div className="flex">
            <Link to="home" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Home
              </button>
            </Link>
            <Link to="impact" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Impact
              </button>
            </Link>
            <Link to="chapters" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                College Chapter
              </button>
            </Link>
            <Link
              to="chapter-structure"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Chapter Structure
              </button>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
