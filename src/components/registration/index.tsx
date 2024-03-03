"use client";

import Button from "../shared/Button";
import RegistrationForm from "./RegistrationForm";
import { CurvedPatternIcon } from "../icons";
import { siteMetadata } from "@/constants/siteMetaData";
import { useState } from "react";
import { feeCovers, feeDoesNotCover } from "@/constants";

const RegistrationPage = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [paymentLink, setPaymentLink] = useState(
    siteMetadata.paymentLink.inPerson
  );

  return (
    <section className="relative mb-32" id="registration">
      <CurvedPatternIcon
        fill="#fff"
        className="-rotate-180 absolute top-0 w-full"
      />
      <div className="bg-green/90 border-t-2 border-light">
        <div className=" max-w-7xl  pt-44 pb-36 mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="rounded-3xl bg-white p-5 z-20 py-10 sm:p-10 max-w-2xl mx-auto lg:w-4/12">
            <h2 className="font-semibold text-2xl sm:text-2xl md:text-2xl mb-4 capitalize">
              The investment for in-person participation is &nbsp;
              <span className="text-yellow">N100,000</span>
              &nbsp;and &nbsp;
              <span className="text-yellow">N50,000</span> for virtual
              participation per participant.
            </h2>
            <div className="mb-6">
              <p className="font-semibold mb-2">This investment guarantees:</p>
              <ul className="list-disc list-inside text-base text-dark">
                {feeCovers.map((item, index) => (
                  <li className="mb-2 flex items-center" key={index}>
                    <div className="w-2 h-2 bg-yellow rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="font-semibold mb-2">
                This investment does not include:
              </p>
              <ul className="list-disc list-inside text-base text-dark">
                {feeDoesNotCover.map((item, index) => (
                  <li className="mb-2 flex items-center" key={index}>
                    <div className="w-2 h-2 bg-yellow rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* <span className=" items-center flex gap-2 mb-4 md:mb-8">
              <span className="bg-yellow text-light p-3 rounded-full text-xl">
                <BsCalendarDateFill arial-label="Conference date icon" />
              </span>
              <span className="text-base xs:text-xl lg:text-2xl font-semibold italic text-light">
                <time dateTime="2024-04-18">18th</time>&nbsp;and&nbsp;
                <time dateTime="2024-04-18">19th</time>&nbsp;April, 2024.
              </span>
            </span>
            <span className="items-center flex gap-2">
              <span className="bg-yellow text-light p-3 rounded-full text-xl">
                <FaLocationDot arial-label="Conference venue icon" />
              </span>
              <address className="font-semibold text-base xs:text-xl lg:text-2xl text-light">
                <a
                  href="https://maps.app.goo.gl/145xnK978jd2F9i89"
                  aria-label={siteMetadata.eventVenue}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Conference Venue Details"
                >
                  {siteMetadata.eventVenue}
                </a>
              </address>
            </span> */}
          </div>
          <div className="  w-full lg:w-8/12 mx-auto">
            <section className="">
              <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-center text-light font-bold text-2xl sm:text-3xl md:text-4xl capitalize">
                  {registrationSuccess
                    ? "Registration Successful"
                    : "Reserve a spot"}
                </h2>
                {!registrationSuccess && (
                  <RegistrationForm
                    setRegistrationSuccess={setRegistrationSuccess}
                    setPaymentLink={setPaymentLink}
                  />
                )}

                {registrationSuccess && (
                  <div className="w-full max-w-2xl mx-auto rounded-3xl p-5 sm:p-10">
                    <p className="text-center text-light mt-5">
                      Thank you for registering. Please proceed to payment to
                      complete your registration.
                    </p>
                    <Button
                      href={paymentLink}
                      text="Proceed to Payment"
                      className=""
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
