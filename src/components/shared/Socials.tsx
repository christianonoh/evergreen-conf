import { siteMetadata } from "@/constants/siteMetaData";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-8 md:gap-3 items-center mx-auto text-xl xs:text-2xl md:text-lg md:bg-accent/10 md:py-0.5 md:px-2 rounded-full">
      {siteMetadata.socials?.facebook && (
        <a
          aria-label="NgwoRocks facebook profile link"
          title="Visit our facebook page"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.socials.facebook}
          className=" hover:text-accent"
        >
          <FaFacebookF />
        </a>
      )}

      {siteMetadata.socials?.instagram && (
        <a
          aria-label="NgwoRocks instagram profile link"
          title="Visit our instagram page"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.socials.instagram}
          className=" hover:text-accent"
        >
          <FaInstagram />
        </a>
      )}
      {siteMetadata.socials?.twitter && (
        <a
          aria-label="Visit our twitter page"
          title="Visit our twitter page"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.socials.twitter}
          className="hover:text-accent"
        >
          <BsTwitterX />
        </a>
      )}
      {siteMetadata.socials?.youtube && (
        <a
          aria-label="Visit our youtube channel"
          title="Visit our youtube channel"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.socials.youtube}
          className="hover:text-accent"
        >
          <FaYoutube />
        </a>
      )}
      {siteMetadata.socials?.whatsapp && (
        <a
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetadata.socials.whatsapp}
          className="hover:text-accent"
        >
          <FaWhatsapp />
        </a>
      )}
    </div>
  );
};

export default Socials;
