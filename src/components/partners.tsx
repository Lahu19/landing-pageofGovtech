import React from "react";

const Partners = () => {
  return (
    <div className="home">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="h-100 flex flex-col justify-center items-center cols-2">
          <h1 className="text-secondary text-[24px] md:text-[50px] font-bold pb-2">
            Words from Our Community
          </h1>
          <div className="container mx-auto w-[20vw] pb-5 md:pb-10">
            <img src="/images/separator.png" />
          </div>
          <div className="container mx-auto  md:grid md:grid-cols-2 md:gap-12 pb-10 mt-5 md:mt-8">
            <div className="bg-white mx-5 md:mx-0 py-2 px-5 md:px-0 rounded-xl border-[3px] border-[#B99806]">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7105904854564306945"
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Embedded post"
              ></iframe>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-2 px-5 md:px-0 rounded-xl border-[3px] border-[#B99806]">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117436626095509504"
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Embedded post"
              ></iframe>
            </div>
            {/* <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-2 px-5 md:px-0 rounded-xl border-[3px] border-[#B99806]">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117436626095509504"
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Embedded post"
              ></iframe>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-2 px-5 md:px-0 rounded-xl border-[3px] border-[#B99806]">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117436626095509504"
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Embedded post"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
