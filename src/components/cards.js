import React, { useState, useEffect } from "react";

export default function Cards() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center w-[1300px] z-10 border border-black m-24 rounded-3xl p-10">
      <div className="w-[500px]">
        {[1, 2, 3].map((index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + `/download${index}.jpg`}
            className={`mySlides ${
              index === slideIndex + 1 ? "block" : "hidden"
            }`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <p className="font-serif font-semibold text-2xl">
          Prelims QBank with Explanations in Visual Learning Format
        </p>
        <ul className="list-disc p-4">
          <li>High Yield Prelims Questions with Mains Explanations</li>
          <li>Visual Learning Format, Stories, Animations</li>
          <li>
            Precise, Qualitative & Effective with Proven Track Record Across
            Multiple Prelims Exams of Different States
          </li>
          <li>Extensive Subject Wise Coverage of Questions</li>
          <li>Goldmine for Your Success in Judiciary Exams</li>
        </ul>
        <button className="bg-primary text-white p-2 px-4 rounded-xl font-semibold flex flex-row w-max gap-4">
          <span class="material-symbols-outlined">expand_more</span>
          Download Free
          <span class="material-symbols-outlined">cloud_download</span>
        </button>
      </div>
    </div>
  );
}
