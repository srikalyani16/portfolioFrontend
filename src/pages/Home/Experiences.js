import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
  <SectionTitle title={"Experience"} />
  <div className="flex py-10 gap-20 sm:flex-col">
    {/* Sidebar with selectable periods */}
    <div className="flex flex-col gap-28 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
      {experiences.map((value, index) => (
        <div
          onClick={() => setSelectedItemIndex(index)}
          className="cursor-pointer"
        
        >
          <h1
            className={`text-xl px-5 ${
              selectedItemIndex === index
                ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                : "text-white"
            }`}
          >
            {value.period}
          </h1>
        </div>
      ))}
    </div>

    {/* Content area */}
    <div className="flex flex-col gap-5 w-2/3 sm:w-full">
      <h1 className="text-secondary text-2xl">
        {experiences[selectedItemIndex].title}
      </h1>
      <h1 className="text-secondary text-xl">
        {experiences[selectedItemIndex].company}
      </h1>

      {/* Fixed height with scrollable content */}
      <div
        className="text-white text-1xl max-h-64 overflow-y-auto p-4 border border-[#135e4c82] rounded-lg"
        dangerouslySetInnerHTML={{ __html: experiences[selectedItemIndex].description }}
      />
    </div>
  </div>
</div>

  );
};

export default Experiences;
