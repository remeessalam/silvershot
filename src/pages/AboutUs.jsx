import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.jpg";
import aboutImg2 from "../assets/images/aboutus-img2.jpg";
import aboutImg3 from "../assets/images/home-about-img.jpg";
import aboutImg4 from "../assets/images/home-about-img2.jpg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full max-h-[60vh] rounded-lg grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Your Trusted Partner in Digital Transformation
              </h2>
              <p className="desc">
                At <b>[Your Company Name]</b>, we are more than just a
                technology provider – we are a team of passionate experts
                dedicated to helping businesses thrive in the digital world. We
                understand that technology can be a game-changer, and our goal
                is to help you leverage it in the best way possible. Whether
                you’re a startup seeking to build a strong digital foundation or
                an established enterprise looking to evolve, we’re here to make
                your vision a reality.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-[2rem]">
          <h2 className="text-xl font-medium">Our Mission</h2>
          <p className="desc mt-2">
            At the core of everything we do is our mission to empower businesses
            through technology. We are committed to helping our clients improve
            efficiency, engage customers, and drive growth with the help of
            innovative digital solutions. Our approach is simple: we focus on
            delivering results that matter – solutions that enhance
            productivity, streamline operations, and improve user experiences.
          </p>
        </div>
        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            What Makes Us Different
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                We know there are many options out there, but we stand apart for
                several reasons. Here’s what sets us apart:
                <br />
                <br />
                <b>Diverse Expertise in Modern Technologies:</b> From web and
                mobile development to AI and cloud computing, our team brings a
                broad range of technical expertise to the table. We're always
                ahead of the curve, continually adapting to the latest trends
                and technologies to deliver the best possible solutions for our
                clients.
                <br />
                <br />
                <b>Collaborative, Transparent Process:</b> We’re committed to
                working alongside you every step of the way. We believe in
                maintaining clear communication and involving you in the
                decision-making process to ensure the final solution aligns
                perfectly with your business needs.
                <br />
                <br />
                <b>Results-Driven Approach:</b> Our ultimate goal is to create
                solutions that drive measurable business outcomes. Whether we’re
                building a website, developing an app, or implementing
                automation, we focus on delivering results that directly impact
                your success.
                <br />
                <br />
                <b>Long-Term Relationships:</b> We don’t just complete projects
                – we build relationships. Our goal is to be your long-term
                partner, providing ongoing support, maintenance, and strategic
                advice as your business continues to grow and evolve.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[30rem]  grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <TrustWorthySection />
      <section className="wrapper py-[3rem] bg-darkbg">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[30rem]  grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <h2 className="heading-2">Our Core Values</h2>
            <p className="desc">
              At <b>[Your Company Name]</b>, we live and breathe our core
              values, which are the foundation of our work:
              <br />
              <br />
              <b>1. Innovation:</b> We embrace new ideas and approaches to solve
              challenges and create groundbreaking solutions.
              <br />
              <br />
              <b>2. Integrity:</b> We do what’s right, always acting with
              transparency, honesty, and respect.
              <br />
              <br />
              <b>3. Excellence:</b> We are committed to the highest standards,
              consistently delivering top-quality work.
              <br />
              <br />
              <b>4. Customer Focus:</b> Your needs come first. We take the time
              to understand your goals and deliver personalized solutions that
              make a difference.
              <br />
              <br />
              <b>5. Collaboration:</b> Teamwork is essential to success. We
              foster a collaborative environment, both within our team and with
              our clients, to drive the best results.
            </p>
          </div>
        </div>
        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex items-center lg:items-start flex-col gap-7"
            >
              <p className="desc">
                Our approach to every project is rooted in a simple, yet
                effective process that ensures we deliver the best results:
                <br />
                <br />
                <b>1. Discovery & Consultation:</b> We start by getting to know
                your business, understanding your goals, challenges, and vision.
                This allows us to craft a strategy that’s in perfect alignment
                with your objectives.
                <br />
                <br />
                <b>2. Tailored Solutions:</b> We believe in creating custom
                solutions that are unique to your business. After analyzing your
                requirements, we develop a strategy that delivers value and sets
                you up for success.
                <br />
                <br />
                <b>3. Agile Development:</b> We follow an agile development
                approach that allows for flexibility and continuous improvement.
                This ensures we can respond to feedback and make adjustments
                throughout the project to keep things on track.
                <br />
                <br />
                <b>4. Launch & Optimization:</b> After the solution is deployed,
                we continue to monitor its performance, gather user feedback,
                and make optimizations to ensure it’s working at its best.
                <br />
                <br />
                <b>5. Ongoing Support:</b> Our partnership doesn’t end at
                launch. We provide ongoing maintenance and support to keep your
                systems running smoothly and ensure continued success.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg4}
                className="object-cover h-full w-full max-h-[30rem]  grayscale hover:grayscale-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      {/* <section className="text-white wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>AI Company</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-tertiary text-center text-white">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
