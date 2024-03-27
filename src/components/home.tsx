import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="container mx-auto pt-16 pb-10 px-5 md:px-0">
        <div className="md:flex md:items-center">
          <div className="md:w-[80%] text-center md:text-left">
            <h1 className="text-secondary text-[24px] md:text-[50px] font-bold">
              Code for GovTech (C4GT)
            </h1>
            <p className="my-4 text-primary font-mono-medium text-[16px] md:text-[22px] ">
              C4GT is an ecosystem initiative to build an open-source community
              around Digital Public Goods (DPG), Digital Public Infrastructure
              (DPI) and tech building blocks with use cases in social impact.
            </p>
            {/* <button className="bg-primary text-white px-7 py-2 rounded-full mt-5 font-mono-medium w-fit">
              Know More
            </button> */}
          </div>
          <div className="md:py-0 md:w-[35vw]">
            <img src="./images/logo.webp" alt="Home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
