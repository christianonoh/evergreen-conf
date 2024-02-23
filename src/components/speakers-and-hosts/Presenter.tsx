"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type PresenterType = {
  name: string;
  image: any;
  title?: string;
  bio?: string;
  tag?: string;
};

const Presenter = ({ presenter }: { presenter: PresenterType }) => {
  const [showBio, setShowBio] = useState(false);

  const handleClick = () => {
    setShowBio(!showBio);
  };

  return (
    <>
      <div
        className="w-full border border-[#f2f2f2] overflow-clip rounded-xl bg-light shadow-sm hover:bg-[#054128] hover:text-light"
        onClick={handleClick}
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
            <p className="absolute left-0 top-0 bg-accent rounded-br text-light text-sm px-2 py-0.5">
              {presenter.tag}
            </p>
          )}
        </div>
        <div className="p-4 rounded-b-xl ">
          <h4 className="text-base xs:text-xl font-semibold line-clamp-2">
            {presenter.name}
          </h4>
          {presenter.title && (
            <h5 className="text-xs line-clamp-2 xs:text-sm capitalize font-semibold mt-1">
              {presenter.title}
            </h5>
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
