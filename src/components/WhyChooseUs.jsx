import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Proven Expertise.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon3 } from "../assets/svgs/Client-Centric Approach.svg";
import { ReactComponent as icon4 } from "../assets/svgs/Commitment to Quality.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon6 } from "../assets/svgs/Dedicated Support.svg";
import { ReactComponent as icon7 } from "../assets/svgs/Transparent and Reliable.svg";
import { ReactComponent as icon8 } from "../assets/svgs/Innovative Problem Solvers.svg";

const content = [
  {
    icon: icon1,
    title: "Diverse Expertise in Modern Technologies",
    description:
      "From web and mobile development to AI and cloud computing, our team brings a broad range of technical expertise to the table.",
  },
  {
    icon: icon2,
    title: "Collaborative, Transparent Process",
    description:
      "We work alongside you every step of the way, maintaining clear communication and involving you in the decision-making process.",
  },
  {
    icon: icon3,
    title: "Results-Driven Approach",
    description:
      "We focus on delivering measurable business outcomes that directly impact your success.",
  },
  {
    icon: icon4,
    title: "Long-Term Relationships",
    description:
      "We don’t just complete projects – we build relationships, providing ongoing support and strategic advice.",
  },
  {
    icon: icon5,
    title: "Innovation",
    description:
      "We embrace new ideas and approaches to solve challenges and create groundbreaking solutions.",
  },
  {
    icon: icon6,
    title: "Integrity",
    description:
      "We do what’s right, always acting with transparency, honesty, and respect.",
  },
  {
    icon: icon7,
    title: "Excellence",
    description:
      "We are committed to the highest standards, consistently delivering top-quality work.",
  },
  {
    icon: icon8,
    title: "Customer Focus",
    description:
      "Your needs come first. We take the time to understand your goals and deliver personalized solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center"
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full "></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl bg-center bg-cover relative"
          // style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full "></div>
          <div className=" px-5 rounded-xl text-white relative z-10">
            <h1
              data-aos="fade-up"
              className="heading-2 max-w-[60rem] mx-auto text-center"
            >
              Why Choose Us?
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col group items-center gap-3 bg-darkbg rounded-xl p-5 transition-all duration-200"
                >
                  <item.icon className="w-[3.5rem] fill-white h-[3.5rem] transition-all duration-200" />
                  <p className="text-center font-bold">{item.title}</p>
                  <p className="text-center text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
