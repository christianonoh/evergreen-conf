import { whoShouldAttend } from "@/constants";
import React from "react";

function QuestionMarkIcon({ text }: { text: string }) {
  return (
    <div className="flex flex-col justify-center w-6/12 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.49 240.13">
        <path
          fill="#afcd5c"
          d="M41 116.28a7.51 7.51 0 00-3.47-.56l-9.38-1.4-2.15-.24a32.28 32.28 0 00-7.37-1l-3.59-.56c-3.93-.59-7.85-1.23-11.78-1.77-3.36-.46-3.61-.77-3.07-4.1C2.6 92 6.34 77.74 12.49 64.2c.2-.58.41-1.15.61-1.73 1.63-2 2.46-4.4 3.44-6.73l.62-1c3.89-5.54 7.46-11.3 11.84-16.48l2.67-3.13c6.38-6.29 13.07-12.21 20.72-16.92 4.77-2.94 9.71-5.61 14.58-8.4 2.07 0 3.76-1.14 5.55-2l16-4.91A202.88 202.88 0 01113.27.09a143.34 143.34 0 0141.21 4.39c2.41.62 4.81 1.29 7.22 1.93l14.3 5.94 4.32 2.46a121.13 121.13 0 0126.44 20.44l3.05 3.47a120.81 120.81 0 0111.42 17l1.95 4.06a11.15 11.15 0 00.39 1.43 88.53 88.53 0 015.56 18.85c.47 2.53.25 5.14 1.12 7.59l.28 9a6.68 6.68 0 00-.09 3.08q-.63 7-1.25 14a152.33 152.33 0 01-4.9 17 1 1 0 00-.13 1.43c-1.07.31-1.13 1.35-1.5 2.14a108.14 108.14 0 01-6.54 12c-5.75 9.13-13.12 16.86-20.93 24.21a7 7 0 00-2.45 2.07L180.18 182a132.14 132.14 0 00-12.91 8.85 48.13 48.13 0 00-7.44 5.73 25 25 0 00-4.55 3.91c-3.89 3.44-7.18 7.28-8.39 12.52a12.66 12.66 0 00-1.23 5 5.15 5.15 0 00-.39 2.45 17.48 17.48 0 00-.68 5.13 25 25 0 00-.32 5.4l-.06 1.45a12.32 12.32 0 00-.31 5.16c.1 1.79-.39 2.5-2.33 2.43-3.38-.13-6.77 0-10.16.06h-44.5c-5-.16-5-.16-5-5.22q0-8.16-.05-16.32c.86-12.57 1-25.22 4.46-37.47a32.48 32.48 0 015.68-9.94l3.24-3.45c6-6.43 13-11.85 19.75-17.53l11-8.44c2.19-1.72 4.39-3.43 6.58-5.16 5-4 9.67-8.26 13-13.84a36.16 36.16 0 006.32-19 42.12 42.12 0 00-2.53-22 29.41 29.41 0 00-10.32-13.53 36.52 36.52 0 00-21.57-8.43c-11.93-.8-23 1.54-32.17 9.67-3.65 3.23-7 6.8-8.79 11.51l-.93 1.28c-6 10.88-8.33 22.75-9.42 35-.12 1.68-1 2.3-2.67 2-2.7-.4-5.41-.72-8.12-1.07z"
        ></path>
      </svg>
      <div className="flex flex-col text-center text-4xl text-light my-2 font-bold">
        {text.split(" ").map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.49 58.99">
        <path fill="#fff" d="M41 17.21h108.26H41z"></path>
        <path
          fill="#afcd5c"
          d="M98.41 59c-3.65 0-7.31-.14-11 0-1.92.06-2.61-.51-2.58-2.52.1-5.65 0-11.3-.05-16.94q.06-18.09.1-36.17c0-3.27 0-3.27 3.16-3.27 18.36 0 36.73.05 55.09 0 2.39 0 2.87.77 2.86 3-.08 17.62-.11 35.25 0 52.88 0 2.66-.87 3.12-3.27 3.11C128 58.88 113.2 59 98.41 59z"
        ></path>
      </svg>
    </div>
  );
}

const index = () => {
  return (
    <section className="" id="who__should__attend">
      <div className="bg-green/90 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex w-full md:w-5/12 lg:w-6/12 justify-center items-center">
            <QuestionMarkIcon text="WHO SHOULD ATTEND" />
          </div>
          <div className="flex sm:w-7/12 items-center">
            <ul className="list-disc list-inside text-xl text-light lg:text-3xl font-semibold">
              {whoShouldAttend.map((item, index) => (
                <li className="mb-4 flex items-center" key={index}>
                  <div className="p-2 bg-yellow rounded-full mr-8" />
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
