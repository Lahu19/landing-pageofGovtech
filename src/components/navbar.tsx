import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Adjust this breakpoint as needed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to check if the screen size is smaller than "md"
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1124); // Adjust this breakpoint as needed
  };

  // Toggle the sidebar state when the hamburger button is clicked
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close the sidebar when a navigation link is clicked (optional)
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Add a listener to check the screen size on window resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div>
          {/* Hamburger menu button */}
          <div className="flex py-2 container mx-auto justify-between px-5">
            <button
              className="hamburger-button text-primary text-[30px] flex justify-end self-center"
              onClick={toggleSidebar}
            >
              &#9776; {/* Unicode character for the hamburger icon */}
            </button>
            <img src="./images/logo.png" width={"80px"} />
          </div>

          {sidebarOpen && (
            <div className="sidebar">
              {/* Place sidebar content here */}
              {/* Include a close button or links to close the sidebar */}
              <button
                className="close-button text-primary w-full text-[40px] flex justify-end"
                onClick={toggleSidebar}
              >
                &times; {/* Unicode character for the "x" close icon */}
              </button>
              <div className="flex justify-center mb-4">
                <img src="./images/logo.png" width={"80px"} />
              </div>

              <button
                className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full"
                onClick={closeSidebar}
              >
                Home
              </button>
              <button
                className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full"
                onClick={closeSidebar}
              >
                Impact
              </button>
              <button
                className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full"
                onClick={closeSidebar}
              >
                Chapters
              </button>
              <button
                className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full"
                onClick={closeSidebar}
              >
                Chapter Structure
              </button>
            </div>
          )}
        </div>
      ) : (
        <nav className="bg-white px-4 pt-6 pb-3 flex container mx-auto justify-between items-center">
          <div>
            <img src="./images/logo.png" width={"80px"} />
          </div>
          <div className="flex mt-[-10px]">
            <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
              Home
            </button>
            <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
              Impact
            </button>
            <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
              Chapters
            </button>
            <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
              Chapter Structure
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
