import React from "react";
import Button from "./shared/Button";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { siteMetadata } from "@/constants/siteMetaData";

const Hero = () => {
  return (
    <section
      id="hero__section"
      className="bg-bgLight min-h-max lg:min-h-[90vh] pt-4 pb-12"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <p className="mb-4 text-lg text-accent font-semibold">
          South East Educators Conference presents
        </p>
        <h1 className="hero__header text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold max-w-4xl">
          Educating for Impact and Transformation
        </h1>
        <p className="border-4 border-accent text-base sm:text-xl max-w-3xl p-2 sm:p-4 mt-4">
          Get ready for an awesome time at the South East Educators Conference
          2024! Discover cool stuff about teaching and learning through talks,
          workshops, and a keynote on the future of education. Meet new people,
          share ideas, and have a blast at this educational adventure!
        </p>
        <span className="font-bold text-2xl items-center flex gap-2 mt-4 md:mt-8 text-accent">
          <BsCalendarDateFill arial-label="Conference date icon" />
          <span className="text-xl italic text-dark">
            <time dateTime="2024-04-18">18th</time>&nbsp;and&nbsp;
            <time dateTime="2024-04-18">19th</time>&nbsp;April, 2024.
          </span>
        </span>
        <span className="text-2xl items-center flex gap-2 mt-4 text-accent">
          <FaLocationDot arial-label="Conference venue icon" />
          <address className="font-bold text-xl text-dark">
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
          className="mt-8 bg-winered border-winered hover:text-winered hover:!bg-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
