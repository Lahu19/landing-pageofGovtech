import Advisors from "@component/components/advisors";
import Blogs from "@component/components/blogs";
import Chapter from "@component/components/chapter";
import CommunityPartners from "@component/components/communityPartners";
import Companies from "@component/components/companies";
import Engagement from "@component/components/engagement";
import { Footer } from "@component/components/footer";
import Home from "@component/components/home";
import Impact from "@component/components/impact";
import Navbar from "@component/components/navbar";
import Partners from "@component/components/partners";
import Team from "@component/components/team";
import { Element } from "react-scroll";

export default function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="impact">
        <Impact />
      </Element>
      <Element name="chapters">
        <Chapter />
      </Element>
      <Element name="chapter-structure">
        <Team />
      </Element>
      <Blogs />
      <Engagement />
      <Partners />
      <Advisors />
      <CommunityPartners />
      <Companies />
      <Footer />
    </>
  );
}
