"use client";

import { eventProgram } from "@/constants";
import DayPrograms from "./DayPrograms";
import { cx } from "@/utils";
import { useState } from "react";

const EventProgram = () => {
  const [selectedFeature, setSelectedFeature] = useState("Day 1");

  const handleClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  return (
    <section className=" pt-24" id="program">
      <div className="event-program max-w-7xl mx-auto px-5 md:px-10">
        <h2 className=" font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl mb-8">
          Event Program
        </h2>
        <p className="mb-12 max-w-4xl mx-auto">
          The South East Educators Conference is a two-day event that will
          feature a diverse lineup of speakers, covering topics ranging from
          holistic learning approaches to cutting-edge technology integration.
          View the event program below for a snapshot of the insightful sessions
          that await you!
        </p>

        <div className="flex flex-row px-5 w-full max-w-3xl mx-auto">
          {eventProgram.map((day, index) => (
            <div
              key={index}
              className={cx(
                "flex-1 text-center px-12 font-bold py-4 md:py-6 cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out",
                selectedFeature === day.day
                  ? "border-b-4 border-accent text-dark font-bold"
                  : "text-gray-medium border-b border-gray-light"
              )}
              onClick={() => handleClick(day.day)}
            >
              {day.day}
            </div>
          ))}
        </div>

        {eventProgram.map((day, index) => (
          <div
            key={index}
            className={cx(
              "w-full first:pt-10",
              selectedFeature === day.day ? "block" : "hidden"
            )}
          >
            <DayPrograms day={day} index={index} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventProgram;
