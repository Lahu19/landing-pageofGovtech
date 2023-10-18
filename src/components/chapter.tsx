import React from "react";

const Chapter = () => {
  return (
    <div className="home">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="md:flex md:items-center">
          <div className="md:w-[80%] text-center md:text-left">
            <h1 className="text-secondary text-[24px] md:text-[50px] font-bold">
              Introducing C4GT College Chapters
            </h1>
            <p className="my-4 text-primary font-mono-medium text-[16px] md:text-[22px] ">
              If you are excited to solve real world problems with your code,
              then C4GT is the community for you. We are launching C4GT Chapters
              in your college where each chapter will get an opportunity to work
              closely with select organizations and contribute to their products
              that are creating population scale impact!
            </p>
            {/* <button className="bg-primary text-white px-7 py-2 rounded-full mt-5 font-mono-medium w-fit">
              Know More
            </button> */}
          </div>
          <div className="pt-8 flex justify-center md:justify-end md:py-0 md:w-[18vw]">
            <img src="./images/home.png" alt="College Chapter" />
          </div>
        </div>
      </div>
      <div className="container mx-auto  md:grid md:grid-cols-3 md:gap-12 pb-20">
        <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-4 md:px-10 rounded-xl border-[3px] border-[#B99806]">
          <img
            src="/images/impact.png"
            className="mx-auto mb-5 px-4"
            width={"110px"}
          />
          <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
            Work with Social Impact Organizations
          </div>
        </div>
        <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-4 md:px-10 rounded-xl border-[3px] border-[#B99806]">
          <img
            src="/images/help.png"
            className="mx-auto mb-5 px-4"
            width={"110px"}
          />
          <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
            Valuable Guidance from Industry Experts
          </div>
        </div>
        <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-4 md:px-10 rounded-xl border-[3px] border-[#B99806]">
          <img
            src="/images/open-source.png"
            className="mx-auto mb-5 px-4"
            width={"110px"}
          />
          <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
            Contribute to Open Source Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
