import React from "react";
import icon1 from "../assets/images/Vector.png";
import icon2 from "../assets/images/Vector(1).png";
import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import ReactPlayer from "react-player";
import bannervideo from "../assets/videos/bannervideo.mp4";
import ServiceSlider from "../components/website/ServiceSlider";
const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen w-screen relative  text-white">
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
          className="wrapper z-20 text-center flex flex-col gap-5 justify-center items-center h-full relative"
        >
          <p className="sub-heading">
            Welcome to
            {/* <span className="text-primary font-semibold">
              AI Company
            </span> */}
          </p>
          <h1 className="heading text-stroke">AI Company</h1>
          <p className="sub-heading">
            AI Meets Integrity - Empowering Innovation with Intelligence
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="border-l p-5">
          <div className="flex gap-3 mb-4">
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            Building Custom Websites That Make an Impact. We design visually
            appealing, easy-to-navigate, and performance-optimized websites
            tailored to your business needs.
          </p>
        </div>
        <div className="border-l p-5">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-lg leading-tight font-medium">
              Mobile Development
            </p>
          </div>
          <p className="desc">
            Innovative Mobile Apps for Every Business Need. We build custom apps
            for iOS and Android that engage users and align with your business
            goals.
          </p>
        </div>
        <div className="border-l p-5">
          <div className="flex gap-3 mb-4">
            <p className="text-lg leading-tight font-medium">UI & UX Design</p>
          </div>
          <p className="desc">
            Designing Experiences That Delight Users. We create intuitive,
            seamless, and enjoyable designs that drive conversions and customer
            loyalty.
          </p>
        </div>
      </div>
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full grayscale"
                  alt="Silver Shot Technologies Team"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Your Trusted Partner in Digital Transformation
              </h2>
              <p className="desc">
                Welcome to <b>Silver Shot Technologies</b> – we are more than
                just a technology provider. We are a team of passionate experts
                dedicated to helping businesses thrive in the digital world.
                Whether you’re a startup building a digital foundation or an
                enterprise seeking evolution, we craft personalized solutions
                that address your unique challenges and goals.
                <br />
                <br />
                Our mission is to empower businesses through technology, driving
                growth by improving efficiency, engaging customers, and
                delivering results that matter. We combine technical expertise
                with creativity to create seamless workflows, intuitive user
                experiences, and scalable automation – all designed to make your
                business stronger and your growth sustainable.
                <br />
                <br />
                We don’t just complete projects – we build long-term
                partnerships. From web and mobile development to AI and cloud
                solutions, we’re here to help you navigate the digital landscape
                and stay ahead of tomorrow’s challenges.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServiceSlider />
      <AllServices />
      <JoinHappyCustomers />
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
