"use client";

import { EventDetails } from "@/constants";
import { cx } from "@/utils";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProgramDetails = ({ event }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className="event-item flex items-start py-4 md:py-6 gap-x-4 border-y border-accent">
      <div className="event-time text-sm font-semibold w-3/12 md:whitespace-nowrap">
        {event.time}
      </div>
      <div className="event-details text-base sm:text-lg w-9/12 ml-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleOpen}
        >
          <div className="font-bold transition-all duration-200 ease-in-out">
            {event.event}
          </div>
          {event.details && (
            <div
              className={cx(
                "transform mx-2 text-2xl",
                isOpen ? "rotate-180 text-red" : "rotate-0",
                "transition duration-300"
              )}
            >
              <IoIosArrowDown />
            </div>
          )}
        </div>
        {isOpen && event.details && (
          <p className="event-description pt-4  text-gray-500 text-sm sm:text-base">
            {event.details}
          </p>
        )}
      </div>
    </li>
  );
};

const DayPrograms = ({ day }: any) => {
  return (
    <ul className="mb-4 max-w-4xl mx-auto">
      {day.schedule.map((event: EventDetails, eventIndex: any) => (
        <ProgramDetails event={event} key={eventIndex} />
      ))}
    </ul>
  );
};

export default DayPrograms;
