import Image from "next/image";
import Button from "../shared/Button";
import RegistrationForm from "./RegistrationForm";
import NikeLakeResort from "../../../public/nike-lake.webp";
import { CurvedPatternIcon } from "../icons";
import { siteMetadata } from "@/constants/siteMetaData";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const index = () => {
  return (
    <section className="relative" id="registration">
      <CurvedPatternIcon
        fill="#fff"
        className="-rotate-180 absolute top-0 w-full"
      />
      <div className="bg-green/90 border-t-2 border-light">
        <div className=" max-w-7xl  pt-44 pb-36 mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-fit mx-auto md:w-4/12">
            <span className=" items-center flex gap-2 mb-4 md:mb-8">
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
          </div>
          <div className="rounded-3xl bg-white p-5 z-20 py-10 sm:p-10 max-w-2xl  w-full md:w-8/12 mx-auto">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 capitalize">
              Registration fee is <span className="text-yellow">N100,000</span>
              &nbsp; per participant.
            </h2>
            <p className="">
              <b className="text-warning">Important Notice: </b>Your payment
              includes coverage for essential conference components, namely{" "}
              <b> conference materials, lunch, tea breaks, and certificates.</b>{" "}
              Please note that{" "}
              <span className="text-warning font-semibold">
                {" "}
                accommodation is not included in this payment.
              </span>
            </p>
            <Button
              href="https://pay.switchappgo.com/VvFASTh74YusP1sEbG"
              text="GET YOUR TICKET"
              className="mt-8 mx-auto !bg-winered !border-winered hover:!text-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
