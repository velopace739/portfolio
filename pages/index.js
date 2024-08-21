import dynamic from "next/dynamic";
import Seo from "../components/seo/Seo";
import Intro from "../components/about/Intro";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Service from "../components/service/Service";
import ResumeCard from "../components/Resume/ResumeCard";
import Skills from "../components/skills/Skills";
import Works from "../components/works/Works";
import Address from "../components/contact/Address";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact/ContactForm";
import ScrollToTop from "../components/footer/ScrollToTop";

const HomePage = () => {

  return (
    <section className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark  md:pb-16 w-full">
      <Seo />

      <Header />

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4  lg:h-screen lg:sticky top-44">
          <SidebarInfo />
        </div>

        <div className="col-span-12 lg:col-span-8 ">
          <HeaderNavigation />

          <div className="rounded-2xl bg-white dark:bg-[#111111]">
            <div>
              <Intro />

              <section className="pb-12 px-5 sm:px-5 md:px-10 lg:px-14 ">
                <h3 className="text-[35px] dark:text-white font-medium pb-5">
                  What I do!
                </h3>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                  <Service />
                </div>
              </section>

              <section className="px-5 sm:px-5 md:px-10 lg:px-14">
                <h3 id="#resume" className="text-[35px] dark:text-white font-medium mb-5">
                  Resume
                </h3>
                <div className=" max-w-full h-auto rounded-xl">
                  <ResumeCard />
                </div>
              </section>

              <section className="px-5 sm:px-5 md:px-10 lg:px-14">
                <h3 id="#skill" className="text-[35px] dark:text-white font-medium mb-5">
                  Skills
                </h3>
                <div className=" max-w-full h-auto rounded-xl">
                  <Skills />
                </div>
              </section>

              <section className="px-5 py-10 sm:px-5 md:px-10 lg:px-14">
                <h3 id="#project" className="text-[35px] dark:text-white font-medium">
                  Projects
                </h3>
                <div className=" max-w-full h-auto rounded-xl">
                  <Works />
                </div>
              </section>

              <section className="px-5 sm:px-5 md:px-10 lg:px-14">
                <h3 id="#contact" className="text-[35px] dark:text-white font-medium">
                  Contact
                </h3>
                <div className=" max-w-full h-auto rounded-xl">
                  <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
                    <Address />
                  </div>
                  <ContactForm />
                </div>
              </section>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default HomePage;

