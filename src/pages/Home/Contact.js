import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";


const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
 
  return (
    <div>
      <SectionTitle title={"say Hello"} />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(contact).map((key) => key!=="_id" &&(
            <h1 className="text-tertiary text-sm">
              <span>"{key}"</span> : <span>"{contact[key]}"</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/12ececa3-fed0-4ac6-bf2c-bd740829c9c4/tSoe5I1vVg.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
