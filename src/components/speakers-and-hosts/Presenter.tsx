"use client";

import { cx } from "@/utils";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../shared/Button";

type PresenterType = {
  name: string;
  image: any;
  title?: string;
  bio?: string;
  tag?: string;
};

const Presenter = ({ presenter }: { presenter: PresenterType }) => {
  const [showBio, setShowBio] = useState(false);
  const [showBioBtn, setShowBioBtn] = useState(false);

  const speakerTags = ["Convener", "Keynote Speaker"];

  const handleClick = () => {
    setShowBio(!showBio);
  };

  const handleMouseEnter = () => {
    setShowBioBtn(true);
  };

  const handleMouseLeave = () => {
    setShowBioBtn(false);
  };

  return (
    <>
      <div
        className="w-full border relative border-[#f2f2f2] overflow-clip rounded-xl bg-light shadow-sm hover:bg-[#054128] hover:text-light cursor-pointer"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex overflow-clip pt-[80%]">
          <Image
            src={presenter.image}
            alt={presenter.name}
            placeholder="blur"
            className="w-full rounded-t-xl object-cover hover:scale-95 transition-all duration-500 ease-in-out "
            fill
            sizes="max-width(767px) 100vw, 400px"
          />
          {presenter.tag && (
            <p
              className={cx(
                "absolute left-0 top-0 rounded-br text-light text-base px-2 py-0.5",
                speakerTags.includes(presenter.tag) ? "bg-accent" : "bg-yellow"
              )}
            >
              {presenter.tag}
            </p>
          )}
        </div>
        <div className="p-4 rounded-b-xl ">
          <h4 className="text-base xs:text-xl font-semibold line-clamp-2">
            {presenter.name}
          </h4>
          {presenter.title && !showBioBtn && (
            <h5 className="text-xs line-clamp-2 xs:text-sm capitalize font-semibold mt-1">
              {presenter.title}
            </h5>
          )}
          {presenter?.bio && showBioBtn && (
            <button
              onClick={handleClick}
              className="flex items-center transition-all duration-200 ease-in-out mt-3 bg-light text-dark text-sm px-4 py-1.5 rounded-md gap-3 w-max font-semibold"
            >
              Read bio
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
      {showBio && (
        <div className="fixed speaker_bio inset-0 z-50 flex items-center justify-center bg-black/30 h-screen w-full">
          <div className="bg-white relative max-w-xl rounded-lg shadow transition-all m-5 py-8 min-w-[270px]">
            <button
              onClick={handleClick}
              className="absolute top-2 right-2 text-3xl"
            >
              <IoIosCloseCircleOutline />
            </button>
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="relative mx-auto flex items-center overflow-clip w-24 h-24 rounded-full border-2 border-white">
                <Image
                  src={presenter.image}
                  alt={presenter.name}
                  placeholder="blur"
                  className="w-full rounded-full object-cover"
                  fill
                  sizes="max-width(767px) 100vw, 400px"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-center">
                {presenter.name}
              </h3>
              {presenter.title && (
                <h4 className="text-base text-accent text-center">
                  {presenter.title}
                </h4>
              )}
              {presenter?.bio && (
                <div
                  className="prose mt-2"
                  dangerouslySetInnerHTML={{ __html: presenter.bio }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Presenter;
