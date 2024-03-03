"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.webp";
import Socials from "../shared/Socials";
import { siteMetadata } from "@/constants/siteMetaData";

const index = () => {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <footer className="bg-[#00180b] py-24 ">
      <div className="max-w-7xl mx-auto flex flex-col px-5 gap-8 md:px-10 md:flex-row items-start justify-between text-light/70">
        <Link
          href="/"
          className="h-12 w-fit bg-light/80 p-2 rounded-xl mx-auto md:ml-0"
        >
          <Image
            src={Logo}
            alt="logo"
            className="h-full object-contain w-auto"
            priority
          />
        </Link>
        <div className="mx-auto">
          <h4 className="font-semibold mb-4 text-center">
            Follow us on social media:
          </h4>

          <Socials className="!bg-transparent !gap-8" />
        </div>

        <div className="flex flex-col gap-4 md:gap-8 mx-auto md:mx-0">
          <div className="flex flex-col gap-2 ml-4">
            <h4 className="font-semibold mb-2">Contact us on phone:</h4>
            {siteMetadata.phoneNumbers.map((number, index) => (
              <span
                key={index}
                onClick={() => handleCall(number)}
                className="text-base cursor-pointer hover:underline"
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col px-5 gap-8 md:px-10 md:flex-row justify-between border-t pt-6 border-light/50 text-light/70 text-sm items-center mt-16">
        <p>© 2024 Education Conference. All rights reserved.</p>
        <p>
          Developed by&nbsp;
          <a
            href="https://www.educare.school/"
            target="_blank"
            title="http://www.educare.school"
          >
            <span className="text-accent">educare</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default index;
