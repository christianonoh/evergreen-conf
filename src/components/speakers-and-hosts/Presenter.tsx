import Image from "next/image";
import React from "react";

type PresenterType = {
  name: string;
  image: any;
  title?: string;
};

const Presenter = ({ presenter }: { presenter: PresenterType }) => {
  return (
    <div className="w-full border rounded-xl bg-[#b0b0b0]/25 hover:bg-[#1E4611] hover:text-light">
      <div className="relative flex overflow-clip pt-[80%]">
        <Image
          src={presenter.image}
          alt={presenter.name}
          placeholder="blur"
          className="w-full rounded-t-xl object-cover hover:scale-95 transition-all duration-500 ease-in-out "
          fill
          sizes="max-width(767px) 100vw, 400px"
        />
      </div>
      <div className="p-4 rounded-b-xl ">
        <h4 className="text-base xs:text-xl font-semibold">{presenter.name}</h4>
        {presenter.title && (
          <h5 className="text-xs xs:text-sm capitalize font-semibold mt-1">
            {presenter.title}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Presenter;
