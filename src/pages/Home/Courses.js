import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Courses"} />

      <div className="flex py-10 gap-6 sm:flex-col">
        {/* Left column with course names */}
        <div className="flex flex-col sm:gap-6 gap-32 border-l-2 border-[#135e4c82] w-1/4 sm:w-full sm:overflow-x-scroll">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                selectedItemIndex === index
                  ? "bg-tertiary text-white shadow-lg"
                  : "bg-white text-secondary hover:bg-gray-100"
              }`}
            >
              <h1 className="text-lg font-semibold">{course.title}</h1>
            </div>
          ))}
        </div>

        {/* Right column with selected course details */}
        <div
          className="flex flex-col gap-4 p-6 w-3/4 bg-[#1a7f5a31] rounded-lg shadow-md sm:w-full"
          style={{ height: "400px", overflowY: "auto" }} // Fixed height with scrollable content
        >
          <h1 className="text-3xl font-bold text-tertiary">
            {courses[selectedItemIndex].title}
          </h1>
          <div className="text-white text-lg">
            <h2 className="font-semibold">Resources:</h2>
            <p>{courses[selectedItemIndex].resources}</p>
          </div>
          <div className="text-white text-lg">
            <h2 className="font-semibold">Objective:</h2>
            <p>{courses[selectedItemIndex].objective}</p>
          </div>
          <div className="text-white text-lg">
            <h2 className="font-semibold">Completion Date:</h2>
            <p>{courses[selectedItemIndex].completionDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
