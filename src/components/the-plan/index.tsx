import { thePlan } from "@/constants";
import Collage from "../../../public/collage.webp";
import Image from "next/image";

const index = () => {
  return (
    <section className="" id="who__should__attend">
      <div className="bg-green/90 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex w-full md:w-5/12 lg:w-6/12 justify-center items-center">
            <Image src={Collage} alt="" />
          </div>
          <div className="flex flex-col w-full md:w-7/12 items-center">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-yellow lg:text-5xl mb-8">
              The Plan
            </h2>
            <ul className="list-disc list-inside text-base text-light sm:text-xl md:text-base lg:text-2xl font-semibold">
              {thePlan.map((item, index) => (
                <li className="mb-4 flex items-center" key={index}>
                  <div className="p-2 bg-yellow rounded-full mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
