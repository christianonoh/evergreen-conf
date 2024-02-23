import React from "react";
import WhyCard from "./WhyCard";
import { whyAttend } from "@/constants";

const index = () => {
  return (
    <section className="why__attend pt-24 prose max-w-full">
      <div className="max-w-7xl mx-auto px-5 md:px-10 ">
        <h2 className=" font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl mb-8">
          Why Attend?
        </h2>
        <p className="mb-32 max-w-4xl mx-auto">
          Are you a School Owner, Head of a School (Public or Private),
          Education Stakeholder, Teacher, or Educator? This conference is
          tailored specifically for you, and here&apos;s why you should attend:
        </p>
      </div>
      <div className="bg-light">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyAttend.map((why, index) => (
            <WhyCard key={index} why={why} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
