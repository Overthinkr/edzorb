import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-row text-white gap-10 bg-gradient-to-b from-secondary to-primary">
      <div className="pl-64 flex flex-row">
        <div className="gap-6 flex flex-col py-10">
          <p className="text-7xl font-serif font-semibold">
            Turn Your Judiciary Dream Into Reality
          </p>
          <p className="text-lg">
            Revolutionize Your Prelims + Mains + Interview Preparation in an
            Integrated Manner.
          </p>
          <p className="text-black bg-white rounded-xl w-max p-2 font-semibold">
            #1 Most Downloaded Judicial Services App
          </p>
        </div>
      </div>
      <div className="pr-32 bg-gradient-to-b from-secondary to-primary w-[1200px]">
        <img src={process.env.PUBLIC_URL + "/mainpage.jpg"} alt="mainpage" />
      </div>
    </div>
  );
}
