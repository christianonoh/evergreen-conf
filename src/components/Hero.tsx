import React from "react";
import Button from "./shared/Button";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { siteMetadata } from "@/constants/siteMetaData";

const Hero = () => {
  return (
    <section id="hero__section" className="bg-bgLight">
      <div className="bg-light/90 min-h-max lg:min-h-[90vh]  pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-5 md:px-10 ">
          <p className="mb-4 text-sm xs:text-lg text-accent font-normal">
            South East Educators Conference presents
          </p>
          <div className="hero__header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl">
            <h1>FUTURE-FOCUSED LEARNING: </h1>
            <p className="font-normal mt-2">IGNITING THE COMPETITIVE EDGE</p>
          </div>
          <div className="max-w-3xl p-2 sm:p-4 mt-4 relative border-2 border-accent">
            <p className="absolute left-0 top-0 bg-accent text-light text-sm px-2 py-0.5">
              Our Vision
            </p>
            <p className=" text-base sm:text-xl mt-4">
              To create a dynamic platform that equips educators with the tools
              and knowledge needed to make a lasting impact on the educational
              landscape of South-Eastern Nigeria.
            </p>
          </div>

          <span className=" items-center flex gap-2 mt-4 md:mt-8">
            <span className="bg-accent text-light p-2 rounded-full text-base">
              <BsCalendarDateFill arial-label="Conference date icon" />
            </span>
            <span className="text-base xs:text-xl font-semibold italic text-dark">
              <time dateTime="2024-04-18">18th</time>&nbsp;and&nbsp;
              <time dateTime="2024-04-18">19th</time>&nbsp;April, 2024.
            </span>
          </span>
          <span className="items-center flex gap-2 mt-4">
            <span className="bg-accent text-light p-2 rounded-full text-base">
              <FaLocationDot arial-label="Conference venue icon" />
            </span>
            <address className="font-semibold text-base xs:text-xl text-dark">
              <a
                href="https://maps.app.goo.gl/NWWkJyfe4JFpWpgXA"
                aria-label={siteMetadata.eventVenue}
                target="_blank"
                rel="noopener noreferrer"
                title="Conference Venue Details"
              >
                {siteMetadata.eventVenue}
              </a>
            </address>
          </span>
          <Button
            href="/#registration"
            text="GET YOUR TICKET"
            className="mt-8 bg-winered border-winered hover:text-winered hover:!bg-transparent ml-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
