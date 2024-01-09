import Button from "../shared/Button";
import RegistrationForm from "./RegistrationForm";

const index = () => {
  return (
    <section className="bg-[#262A26] py-36" id="registration">
      <div className=" max-w-7xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="rounded-3xl bg-white p-5 py-10 sm:p-10 lg:w-5/12">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 capitalize">
            Registration fee is <span className="text-accent">N100,000</span>
            &nbsp; per participant.
          </h2>
          <p className="">
            Unlock a transformative learning experience! Secure your ticket now
            to join visionary speakers, insightful workshops, and a community
            passionate about shaping the future of impactful education.
          </p>
          {/* <Button
            href="/register"
            text="GET YOUR TICKET"
            className="mt-8 mx-auto bg-winered border-winered hover:text-winered hover:bg-transparent"
          /> */}
        </div>
        <div className="w-full lg:w-7/12">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default index;
