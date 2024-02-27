"use client";

import { siteMetadata } from "@/constants/siteMetaData";
import { cx } from "@/utils";
import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const CallUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <div
        className={cx(
          "p-2 sm:p-4 hover:text-[#00180b] hover:scale-105 transition-all duration-200 ease-in-out text-yellow rounded-full fixed  bg-light border right-2 sm:right-4 bottom-2 sm:bottom-4 shadow-md z-30 cursor-pointer",
          showModal ? "" : "animate-bounce"
        )}
        onClick={() => setShowModal(!showModal)}
      >
        <div className="text-xl sm:text-2xl">
          {showModal ? <IoMdClose /> : <FaPhoneVolume />}
        </div>
      </div>
      {showModal && (
        <div className="p-8 fixed hover:scale-100 bottom-16 sm:bottom-20 right-4 bg-light shadow-md rounded-md z-50">
          <h3 className="font-semibold text-xl text-dark mb-4">Call us on:</h3>
          <div className="flex flex-col gap-2 ml-4">
            {siteMetadata.phoneNumbers.map((number, index) => (
              <span
                key={index}
                onClick={() => handleCall(number)}
                className="font-semibold text-lg cursor-pointer hover:underline"
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CallUs;
