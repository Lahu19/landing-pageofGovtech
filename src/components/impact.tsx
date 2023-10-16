const Impact = () => {
  return (
    <div className="impact">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="h-100 flex flex-col justify-center items-center cols-2">
          <h1 className="text-secondary text-[24px] md:text-[50px] font-bold">
            Impact
          </h1>
          <p className="my-4 font-mono-medium text-white xl:px-24 text-center text-[16px] md:text-[20px] ">
            C4GT has conducted two rounds of Dedicated Mentoring Program (DMP)
            since 2022 where selected students and working professionals get an
            opportunity to contribute to critical tech building blocks with the
            guidance of a dedicated mentor. They work closely with DPG builder
            and adopter organizations on real world problem statements that have
            a population scale social impact.
          </p>
          <p className="mt-10 font-mono-medium text-white xl:px-24 text-center text-[16px] md:text-[20px] ">
            Here is a glimpse of the program from 2022 & 2023!
          </p>
          <div className="container mx-auto  md:grid md:grid-cols-2 md:gap-12 pb-10 mt-5 md:mt-8">
            <div className="bg-white mx-5 md:mx-0 py-8 px-5 md:px-10 rounded-xl border-[5px] border-[#B99806]">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/U8JJHxgs9is?si=-xOKUkC68htPyqMm"
                title="C4GT 2022"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-8 px-5 md:px-10 rounded-xl border-[5px] border-[#B99806]">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/LUC2lGJHvdo?si=mPnyIJP8bcpsUY0k"
                title="C4GT 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <a
            className="bg-secondary text-white hover:bg-white hover:text-[#06244f] px-10 py-2 rounded-full mt-5 font-mono-medium w-fit text-[16px] md:text-[18px]"
            href="https://www.codeforgovtech.in/c4gt2023"
            target="_blank"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Impact;
