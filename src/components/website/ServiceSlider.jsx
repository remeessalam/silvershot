import React, { useState } from "react";
import { allServices, appPortfolio, webPortfolio } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useKeenSlider } from "keen-slider/react";

const ServiceSlider = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices;
  // const [selectedService, setSelectedService] = useState(services[0]);
  const web = webPortfolio.slice(0, 4);
  const app = appPortfolio.slice(0, 4);
  const porfolio = [...web, ...app];

  // const handleSelectServiceToShowDetail = (service) => {
  //   setSelectedService(service);
  //   setIsOpen(true);
  // };

  const [sliderRefone, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 1,
      },
      mode: "free",
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 2, // Show 2 slides for screens below lg
            spacing: 10, // Adjust spacing for better layout
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 1, // Show 1 slide for screens below md
            spacing: 5, // Adjust spacing for compact layout
          },
        },
      },
      animation: {
        duration: 1500,
        easing: (t) => t,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    } else {
      console.warn("Slider instance is not available.");
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    } else {
      console.log(instanceRef.current, "sdakfjaslkdfjlaksdjf");
      console.warn("Slider instance is not available.");
    }
  };
  return (
    <div className="py-[2rem] sm:py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Empowering Your Digital Transformation
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At Silver Shot Technologies, we specialize in crafting innovative
          digital solutions that drive growth and transformation for businesses
          across industries. From web and mobile development to AI-powered
          automation and cloud computing, we deliver tailored services that
          align with your vision, enabling smarter decision-making, enhanced
          efficiency, and sustainable growth.
        </p>
        <div
          data-aos="fade-up"
          ref={sliderRefone}
          className="keen-slider grid sm:grid-cols-2 md:grid-cols-3 mt-3"
        >
          {porfolio.map((service) => (
            <div
              className="keen-slider__slide p-4 min-h-full group"
              key={service.id}
            >
              <Link
                // onClick={() => handleSelectServiceToShowDetail(service)}
                // to={service.link}
                className="rounded-lg  cursor-pointer h-full"
              >
                <div className="group hover:scale-105 h-full rounded-lg bg-backgro-gradient  transition-all duration-500">
                  <div className="rounded-lg bg-darkbg min-h-[31rem] sm:min-h-[23.25rem] hover:bg-custom-gradient  flex flex-col justify-between items-start text-start h-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 mb-4 w-full max-h-[15rem] overflow-hidden">
                        <img
                          src={service.img}
                          alt={""}
                          className="w-full grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <h5 className="font-semibold px-5 text-white text-xl font-raleway">
                        {service.title}
                      </h5>
                      {/* <p className="desc text-primarytextcolor px-5">
                        {service.description}
                      </p> */}
                    </div>
                    <button
                      // onClick={() => handleSelectServiceToShowDetail(service)}
                      className="font-inter mt-1 px-5 pb-5 flex items-center gap-3 text-white transition-all duration-300 underline underline-offset-4"
                    >
                      Read More <PiCaretDoubleRightBold />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 mt-2">
          <button
            className="text-white text-5xl hover:text-white/40 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-white text-5xl hover:text-white/40 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
        {/* {length && (
          <Link to="/services" className="primary-btn mt-6 text-white">
            All Services
          </Link>
        )} */}
      </div>

      {/* <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer> */}
    </div>
  );
};

export default ServiceSlider;
