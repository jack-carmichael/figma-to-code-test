import React from "react";

const EasySteps = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-4xl font-bold text-[#1E0E62] mb-8">Easy steps</h2>
      <div className="space-y-8">
        <Step
          number="1"
          title="How Startup Framework works?"
          description="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."
        />
        <Step
          number="2"
          title="Twenty five awesome samples"
          description="The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit. By choosing one of the 25 configurations of the future startup, the process of creation is simple and easy."
          image={
            <img
              src="https://s3-alpha.figma.com/thumbnails/935bee4b-8fec-48e6-bede-35a1c829f424"
              alt="Sample"
              className="rounded-md"
            />
          }
          subTitle="Fell our design"
          subDescription="Startup Design Framework contains components which can easily be integrated into almost any design."
        />
        <Step
          number="3"
          title="Variety of designs"
          description="You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations."
          buttonText="Learn More"
        />
      </div>
    </div>
  );
};

const Step = ({
  number,
  title,
  description,
  image,
  subTitle,
  subDescription,
  buttonText,
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 flex items-center justify-center bg-[#EBEAED] rounded-full">
        <span className="text-lg font-bold text-[#1E0E62]">{number}</span>
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-[#1E0E62]">{title}</h3>
      <p className="text-base text-gray-600 mt-2">{description}</p>
      {image && <div className="mt-4">{image}</div>}
      {subTitle && (
        <h4 className="text-lg font-bold text-[#1E0E62] mt-4">{subTitle}</h4>
      )}
      {subDescription && (
        <p className="text-base text-gray-600 mt-2">{subDescription}</p>
      )}
      {buttonText && (
        <button className="mt-4 px-4 py-2 bg-[#25DAC5] text-white rounded-full">
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

export default EasySteps;
