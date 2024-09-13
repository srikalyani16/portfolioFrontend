import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div id="projects">
      <SectionTitle title={"Projects"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Left section with the list of projects */}
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((value, index) => (
            <div
              key={index} // Added a key prop for list items
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
                {value.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Right section with image and content */}
        <div className="flex gap-10">
          {/* Image takes 30% of the space */}
          {/* {projects[selectedItemIndex].image && (
            <img
              src={projects[selectedItemIndex].image}
              alt={projects[selectedItemIndex].title}
              className="w-[30%] h-auto sm:hidden"
            />
          )} */}
          
          {/* Content takes 70% of the space */}
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>
            <div
              className="text-white text-1xl max-h-72 overflow-y-auto p-4 border border-[#135e4c82] rounded-lg"
              dangerouslySetInnerHTML={{
                __html: projects[selectedItemIndex].description,
              }}
            />
            <div>
              <h1 className="text-tertiary">Skills</h1>
              <div className="flex flex-wrap">
                {projects[selectedItemIndex].skills.map((skill, index) => (
                  <div className="py-2 pr-5" key={index}>
                    <h1 className="text-white">{skill}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-tertiary">Tools</h1>
              <div className="flex flex-wrap">
                {projects[selectedItemIndex].tools.map((tool, index) => (
                  <div className="py-2 pr-5" key={index}>
                    <h1 className="text-white">{tool}</h1>
                  </div>
                ))}
              </div>
            </div>
            {projects[selectedItemIndex].link ? (
              <a
                href={projects[selectedItemIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary underline"
              >
                View Project
              </a>
            ):''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
