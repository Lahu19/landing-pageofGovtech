const Advisors = () => {
  return (
    <div className="impact">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="h-100 flex flex-col justify-center items-center cols-2">
          <h1 className="text-secondary text-[24px] md:text-[50px] font-bold pb-2">
            C4GT Advisors
          </h1>
          <div className="container mx-auto w-[20vw] pb-5 md:pb-10">
            <img src="/images/separator.png" />
          </div>
          <div className="container mx-auto  md:grid md:grid-cols-3 md:gap-12 pb-10 mt-5 md:mt-8">
            <div className="bg-white mx-5 md:mx-0 py-8 px-5 md:px-6 rounded-xl border-[3px] border-[#B99806]">
              <img
                src="/images/abhishek.webp"
                className="rounded-full mx-auto"
              />
              <p className="text-[18px] md:text-[25px] font-bold text-secondary text-center mt-3 md:mt-5">
                Shri Abhishek Singh (IAS)
              </p>
              <p className="text-[14px] md:text-[16px] font-mono-medium text-primary text-center mt-2">
                President & CEO NeGD, MD & CEO - Digital India Corporation & CEO
                Karmayogi Bharat
              </p>
              <div className="container mx-auto mt-2">
                <img src="/images/separator.png" />
              </div>
              <p className="text-[15px] md:text-[16px] font-medium italic text-primary text-center mt-3 md:mt-5">
                Abhishek Singh is an officer of the 1995 batch of IAS and has
                worked with the central government to create policy for
                leveraging technology to improve Governance. He has been the
                guiding force behind running major population-scale projects
                such as Karamyogi, DIKSHA and DigiLocker.
              </p>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-8 px-5 md:px-6 rounded-xl border-[3px] border-[#B99806]">
              <img src="/images/pramod.webp" className="rounded-full mx-auto" />
              <p className="text-[18px] md:text-[25px] font-bold text-secondary text-center mt-3 md:mt-5">
                Dr Pramod Varma
              </p>
              <p className="text-[14px] md:text-[16px] font-mono-medium text-primary text-center mt-2">
                Chief Architect of Aadhaar, CTO - EkStep Foundation & Co-Founder
                - FIDE.org
              </p>
              <div className="container mx-auto mt-2">
                <img src="/images/separator.png" />
              </div>
              <p className="text-[15px] md:text-[16px] font-medium italic text-primary text-center mt-3 md:mt-5">
                Pramod played an integral role in building and scaling Aadhar to
                1.2 billion people in a short span of 7 years. In addition, he
                has also helped architect various India Stack layers scale such
                as eSign, Digital Locker, and Unified Payment Interface (UPI).
              </p>
            </div>
            <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-8 px-5 md:px-6 rounded-xl border-[3px] border-[#B99806]">
              <img src="/images/lobo.webp" className="rounded-full mx-auto" />
              <p className="text-[18px] md:text-[25px] font-bold text-secondary text-center mt-3 md:mt-5">
                Donald Lobo
              </p>
              <p className="text-[14px] md:text-[16px] font-mono-medium text-primary text-center mt-2">
                Founder - Open Brackets Foundation & Executive Director - Chintu
                Gudiya Foundation
              </p>
              <div className="container mx-auto mt-2">
                <img src="/images/separator.png" />
              </div>
              <p className="text-[15px] md:text-[16px] font-medium italic text-primary text-center mt-3 md:mt-5">
                Donald has been actively working to empower NGOs and
                organisations to develop open-source software for the public
                good. His foundation's current focus is on transforming the way
                non profits use tech and data via the Project Tech4Dev, Avni and
                Glific initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
