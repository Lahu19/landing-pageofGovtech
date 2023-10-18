const Team = () => {
  return (
    <div className="impact">
      <h1 className="text-secondary text-[24px] md:text-[50px] font-bold px-5 text-center pt-20 pb-2">
        Chapter Structure
      </h1>
      <div className="container mx-auto w-[30vw] pb-5">
        <img src="/images/separator.png" />
      </div>
      <div>
        <div className="">
          <div className="container mx-auto md:grid md:grid-cols-5 gap-5 py-10 md:py-20">
            <div className="h-100 md:flex md:flex-col md:justify-center md:col-span-3 px-5 md:px-0 text-center md:text-left">
              <h1 className="text-secondary text-[20px] md:text-[35px] font-bold">
                Members
              </h1>
              <p className="my-4 text-white font-mono-medium text-[16px] md:text-[20px] ">
                Chapter membership is open to all, with no specific eligibility
                criteria for joining. We welcome individuals from diverse
                backgrounds, experiences, and skill sets to become valued
                members of the C4GT community. Whether you're a student or
                simply passionate about technology and social impact, you are
                encouraged to join the college Chapter. As a member, you will
                have the opportunity to contribute, learn, and collaborate with
                like-minded individuals who share a common goal of driving
                positive change through technology.
              </p>
              {/* <div className="bg-white mx-5 md:mx-0 py-12 mt-5 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
                <div className="text-secondary text-center md:text-left font-bold mb-4 text-[18px] md:text-[25px]">
                  Privileges
                </div>
                <ul className="font-mono-medium text-left text-primary list-disc px-5">
                  <li>
                    <span className="text-secondary font-mono-medium">
                      Digital Certificate:
                    </span>{" "}
                    A certificate to acknowledge your involvement in the C4GT
                    Program
                  </li>
                  <li>
                    <span className="text-secondary font-mono-medium">
                      C4GT Goodies (T-shirt, Bottle, Diary):
                    </span>{" "}
                    Exclusive C4GT branded merchandise, including a T-shirt,
                    water bottle, and diary
                  </li>
                  <li>
                    <span className="text-secondary font-mono-medium">
                      Access to 1:1s sessions with C4GT Supermentors:
                    </span>{" "}
                    Gain valuable insights and guidance through sessions and
                    one-on-one interactions with experienced C4GT Supermentors
                  </li>
                  <li>
                    <span className="text-secondary font-mono-medium">
                      Recognition at the DPG Dialogues:
                    </span>{" "}
                    Your achievements and contributions will be publicly
                    recognized during the DPG Dialogues events
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="pt-8 md:py-0 w-[80vw] md:w-auto mx-auto md:col-span-2  self-center md:flex md:justify-end">
              <img src="./images/members.png" />
            </div>
          </div>

          <div className="container mx-auto pb-10">
            <div className="bg-white mx-5 md:mx-0 py-12 mt-5 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
              <div className="text-secondary text-center md:text-left font-bold mb-4 text-[18px] md:text-[25px]">
                Privileges
              </div>
              <ul className="font-mono-medium text-left text-primary list-disc px-5">
                <li>
                  <span className="text-secondary font-mono-medium">
                    Acknowledgement of your contribution
                  </span>{" "}
                  to products via certificates, digital badges, DPG points and a
                  lot more! Know more about the incentive framework
                </li>
                <li>
                  <span className="text-secondary font-mono-medium">
                    Public recognition for outstanding work
                  </span>{" "}
                  through offline industry events like DPG Dialoguess
                </li>
                <li>
                  <span className="text-secondary font-mono-medium">
                    Access to guidance
                  </span>{" "}
                  from C4GT mentors and industry experts via offline, virtual
                  and 1:1 sessions
                </li>
                <li>
                  <span className="text-secondary font-mono-medium">
                    C4GT goodies
                  </span>{" "}
                  that you can flaunt!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-10 md:mb-16 flex justify-center">
          <a
            className="bg-secondary text-white container mx-auto w-fit hover:bg-white hover:text-[#06244f] px-10 py-2 rounded-full font-mono-medium text-[16px] md:text-[22px]"
            href="https://discord.gg/eynnfCarWu"
            target="_blank"
          >
            Join the Community
          </a>
        </div>

        <div className="container mx-auto pb-20">
          <img src="/images/separator.png" />
        </div>
        <div className="container mx-auto md:grid md:grid-cols-3 gap-5">
          <div className="h-100 md:flex md:flex-col md:justify-center md:col-span-2 px-5 md:px-0 text-center md:text-left">
            <h1 className="text-secondary text-[20px] md:text-[35px] font-bold">
              President
            </h1>
            <p className="my-4 text-white font-mono-medium text-[16px] md:text-[20px] ">
              The tenure of the President will be for a year. The first round of
              college Chapters will be set up via the DMP alumni, therefore, it
              will be limited to the colleges from where DMP contributors were
              selected. Based on their performance and their interest, the alum
              can take up the role of the Founding President of the C4GT Chapter
              in their college. This exception has been made only for the first
              year and once the term ends, a new President will be selected
              after a rigorous selection process. The process will be set up and
              communicated with the chapter by Mar'24.
            </p>
          </div>
          <div className="pt-8 md:py-0 w-[80vw] md:w-[20vw] mx-auto flex justify-center md:flex md:justify-end">
            <img src="./images/president.png" />
          </div>
        </div>
        <div className="container mx-auto  md:grid md:grid-cols-2 md:gap-12 pb-20">
          <div className="bg-white mx-5 md:mx-0 py-12 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary text-center md:text-left font-bold mb-6 text-[18px] md:text-[25px]">
              Key Responsibilities
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Formation of a Core Team</li>
              <li>Oversee & lead the functioning of the Chapter</li>
              <li>Ensure regular weekly Chapter meet-ups & org PoC connects</li>
              <li>Ensure high quality contributions</li>
              <li>Conduct monthly workshops & submit monthly impact reports</li>
            </ul>
          </div>
          <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-12 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary text-center md:text-left font-bold mb-6 text-[18px] md:text-[25px]">
              Privileges
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Networking opportunities with industry experts</li>
              <li>Access to exclusive events</li>
              <li>Eligible for exclusive recognition & awards</li>
              <li>Curated goodies</li>
              <li>Recognition certificate</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto">
          <img src="/images/separator.png" />
        </div>
      </div>

      <div className="md:py-5">
        <div className="container mx-auto md:grid md:grid-cols-3 gap-5 py-10 md:py-20">
          <div className="h-100 md:flex md:flex-col md:justify-center md:col-span-2 px-5 md:px-0 text-center md:text-left">
            <h1 className="text-secondary text-[20px] md:text-[35px] font-bold">
              Core Team
            </h1>
            <p className="my-4 text-white font-mono-medium text-[16px] md:text-[20px] ">
              The tenure of the Core Team will be for a year. The team should
              have 5 members with a minimum of 3 members having a technical
              background / interest and the remaining members to have marketing
              / event coordination / outreach experience. The team should have a
              minimum of 2 women members. The President will form their Core
              Team and submit a justification proposal with details (past
              experience, resume etc) of each member to the C4GT team for
              review.
            </p>
          </div>
          <div className="pt-8 md:py-0 w-[80vw] md:w-[20vw] mx-auto flex justify-center md:flex md:justify-end">
            <img src="./images/core-team.png" />
          </div>
        </div>
        <div className="container mx-auto  md:grid md:grid-cols-2 md:gap-12 pb-20">
          <div className="bg-white mx-5 md:mx-0 py-12 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary text-center md:text-left font-bold mb-6 text-[18px] md:text-[25px]">
              Key Responsibilities
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>
                Collaborate with the President to manage the Chapter activities
                effectively
              </li>
              <li>
                Attend meetings and contribute to Chapter objectives and goals
              </li>
              <li> Help organize workshops and engage Chapter members</li>
              <li>Assist in creating and submitting monthly impact reports</li>
            </ul>
          </div>
          <div className="bg-white mx-5 md:mx-0 mt-8 md:mt-0 py-12 px-5 md:px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary text-center md:text-left font-bold mb-6 text-[18px] md:text-[25px]">
              Privileges
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Networking opportunities with industry experts </li>
              <li>Access to exclusive events</li>
              <li>Eligible for exclusive recognition & awards</li>
              <li>Curated goodies</li>
              <li>Recognition certificate</li>
            </ul>
          </div>
        </div>
        {/* <div className="container mx-auto">
          <img src="/images/separator.png" />
        </div> */}
      </div>

      {/* <div className="py-10">
        <div className="container mx-auto grid grid-cols-3 gap-12 py-10">
          <div className="xl:ml-8 flex flex-col justify-center cols-1 xl:w-[90%]">
            <img src="./images/core-team.png" />
          </div>
          <div className="h-100 flex flex-col justify-center col-span-2">
            <h1 className="text-secondary text-[20px] md:text-[40px] font-bold">
              Core Team
            </h1>
            <p className="my-4 text-white font-mono-medium">
              The setting up of the first round of college chapters will happen
              via the DMP alumni, therefore, it will be limited to the colleges
              from where DMP contributors were selected. Based on their
              performance in DMP and their interest, the alum can take up the
              role of the Founding President of the C4GT Chapter in their
              college. This exception has been made only for the first year of
              the Chapter, once the term of the Founding President expires, a
              new President will be selected after a rigorous selection process.
              The process will be set up and communicated with the chapter by
              Jan'24.
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-12 py-20">
          <div className="bg-white py-12 px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary font-bold mb-6 text-[18px] md:text-[25px]">
              Key Responsibilities
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Formation of a Core Team</li>
              <li>Oversee & lead the functioning of the Chapter</li>
              <li>Ensure regular weekly Chapter meet-ups & org PoC connects</li>
              <li>Ensure high quality contributions</li>
              <li>Conduct monthly workshops & submit monthly impact reports</li>
            </ul>
          </div>
          <div className="bg-white py-12 px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary font-bold mb-6 text-[18px] md:text-[25px]">
              Privileges
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Networking opportunities with industry experts </li>
              <li>Access to exclusive events</li>
              <li>Eligible for exclusive recognition & awards</li>
              <li>Curated goodies (t-shirts, stickers, etc)</li>
              <li>Recognition certificate</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto">
          <img src="/images/separator.png" />
        </div>
      </div> */}

      {/* <div className="py-10">
        <div className="container mx-auto grid grid-cols-3 gap-12">
          <div className="h-100 flex flex-col justify-center col-span-2">
            <h1 className="text-secondary text-[24px] md:text-[50px] font-bold">
              Chater Members & Contributors
            </h1>
            <p className="my-4 text-white font-mono-medium">
              The setting up of the first round of college chapters will happen
              via the DMP alumni, therefore, it will be limited to the colleges
              from where DMP contributors were selected. Based on their
              performance in DMP and their interest, the alum can take up the
              role of the Founding President of the C4GT Chapter in their
              college. This exception has been made only for the first year of
              the Chapter, once the term of the Founding President expires, a
              new President will be selected after a rigorous selection process.
              The process will be set up and communicated with the chapter by
              Jan'24.
            </p>
          </div>
          <div className="xl:ml-8 flex flex-col justify-center cols-1 xl:w-[90%]">
            <img src="./images/members.png" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-12 py-20">
          <div className="bg-white py-12 px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary font-bold mb-6 text-[18px] md:text-[25px]">
              Key Responsibilities
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Formation of a Core Team</li>
              <li>Oversee & lead the functioning of the Chapter</li>
              <li>Ensure regular weekly Chapter meet-ups & org PoC connects</li>
              <li>Ensure high quality contributions</li>
              <li>Conduct monthly workshops & submit monthly impact reports</li>
            </ul>
          </div>
          <div className="bg-white py-12 px-10 rounded-xl border-[3px] border-[#B99806]">
            <div className="text-secondary font-bold mb-6 text-[18px] md:text-[25px]">
              Privileges
            </div>
            <ul className="font-mono-medium text-primary list-disc px-8">
              <li>Networking opportunities with industry experts </li>
              <li>Access to exclusive events</li>
              <li>Eligible for exclusive recognition & awards</li>
              <li>Curated goodies (t-shirts, stickers, etc)</li>
              <li>Recognition certificate</li>
            </ul>
          </div>
        </div>
        
      </div> */}
    </div>
  );
};

export default Team;
