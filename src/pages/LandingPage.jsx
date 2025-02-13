import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.jpg";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";
import bannervideo from "../assets/videos/bannervideo.mp4";
import ReactPlayer from "react-player";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    services = webDevelopmentServices;
  } else {
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full z-10 bg-[#1a1a1a]/80"></div>
        <div className="absolute top-0 min-h-screen w-full bg-black text-white">
          <ReactPlayer
            url={bannervideo}
            loop={true}
            playsinline
            playing={true}
            width="100%"
            height="100vh"
            muted
            className=" object-cover"
            playbackRate={0.4}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100vw",
                    height: "100vh",
                    transform: "scaleX(-1)",
                  },
                },
              },
            }}
          />
        </div>
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-white font-semibold">
              Silver Shot Technologies
            </span>
          </p>
          <h1 className="heading-1 text-stroke">
            {isWebLanding
              ? "Crafting Digital Solutions That Drive Growth and Transformation"
              : "Building Innovative Mobile Apps That Connect and Engage"}
          </h1>
          <p className="sub-heading">
            {isWebLanding
              ? "Empowering Your Digital Journey with Custom Web Solutions"
              : "Delivering Seamless Mobile Experiences for Every Business Need"}
          </p>
        </div>
      </section>
      <section id="about" className="text-white wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg grayscale hover:grayscale-0"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Building Custom Websites That Make an Impact"
                  : "Innovative Mobile Apps for Every Business Need"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "At Silver Shot Technologies, we craft websites that are more than just functional - they make a statement. Combining creativity with cutting-edge technology, we deliver visually appealing, mobile-optimized websites that drive engagement and conversions. From sleek corporate sites to robust e-commerce platforms, we create digital experiences that grow with your business."
                  : "In a mobile-first world, we build apps that provide real value and enhance your services. Our cross-platform solutions using React Native and Flutter ensure seamless performance on both iOS and Android. We focus on intuitive design, secure backend integration, and continuous updates to keep your app engaging and effective."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          Enhancing Brands with Engaging Web Experiences
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-darkbg items-center rounded-lg p-5 flex text-center flex-col"
            >
              <img
                loading="lazy"
                src={service.icon}
                className="h-[3.5rem] md:h-[4.5rem] object-contain grayscale"
                alt={service.title}
                width="100"
                height="100"
              />
              <h6 className="text-xl font-medium mt-2">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <Testimonials />
      <ConnectWithUs />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
