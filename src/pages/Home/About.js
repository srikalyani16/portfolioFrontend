import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  return (
    <div id="about">
      <SectionTitle title={"About"} />
      <div className="flex sm:flex-col w-full items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""} </p>
          <p className="text-white">{description2 || ""} </p>{" "}
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies i've been working with recently:{" "}
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
              <div className="border border-tertiary py-3 px-5">
                <h1 className="text-tertiary">{skill}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
