const Engagement = () => {
  return (
    <div className="impact">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="h-100 flex flex-col justify-center items-center cols-2">
          <h1 className="text-secondary text-[24px] md:text-[50px] font-bold pb-2">
            Chapter Engagements
          </h1>
          <div className="container mx-auto w-[30vw] pb-5 md:pb-16">
            <img src="/images/separator.png" />
          </div>
          <div className="container mx-auto  md:grid md:grid-cols-4 md:gap-12 pb-8">
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-2 md:px-10 rounded-xl border-[3px] border-[#B99806]">
              <img
                src="/images/conversation.png"
                className="mx-auto mb-5 px-4"
                width={"110px"}
              />
              <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
                Weekly meet-ups of Chapter members & Core team
              </div>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-2 md:px-10 rounded-xl border-[3px] border-[#B99806]">
              <img
                src="/images/culture.png"
                className="mx-auto mb-5 px-4"
                width={"110px"}
              />
              <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
                Weekly, monthly connects with organizations
              </div>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-2 md:px-10 rounded-xl border-[3px] border-[#B99806]">
              <img
                src="/images/network.png"
                className="mx-auto mb-5 px-4"
                width={"110px"}
              />
              <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
                Opportunities to connect with other Chapters
              </div>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-5 px-2 md:px-10 rounded-xl border-[3px] border-[#B99806]">
              <img
                src="/images/chairman.png"
                className="mx-auto mb-5 px-4"
                width={"110px"}
              />
              <div className="text-primary text-center font-mono-medium text-[18px] md:text-[20px]">
                Industry Relevant Guest sessions / workshops
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
