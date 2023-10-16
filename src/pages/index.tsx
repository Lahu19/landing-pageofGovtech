import Blogs from "@component/components/blogs";
import Chapter from "@component/components/chapter";
import Companies from "@component/components/companies";
import { Footer } from "@component/components/footer";
import Home from "@component/components/home";
import Impact from "@component/components/impact";
import Navbar from "@component/components/navbar";
import Team from "@component/components/team";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Impact />
      <Chapter />
      <Team />
      <Blogs />
      <Companies />
      <Footer />
    </>
  );
}
