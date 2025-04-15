import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ text, bgColor, textColor, borderColor, icon }: any) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-full font-medium text-center ${bgColor} ${textColor} ${
        borderColor ? `border ${borderColor}` : ""
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button2 = ({ text, bgColor, textColor, borderColor, icon }: any) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-full font-medium text-center transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${bgColor} ${textColor} ${
        borderColor ? `border ${borderColor}` : ""
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

const ButtonSet = () => {
  return (
    <>
      <p>Original output</p>
      <div className="flex space-x-4">
        <Button
          text="Sign In"
          bgColor="bg-[#25DAC5]"
          textColor="text-white"
          borderColor={undefined}
          icon={undefined}
        />
        <Button
          text="Sign In"
          bgColor="bg-white"
          textColor="text-[#1E0E62]"
          borderColor="border-[#1E0E62]"
          icon={undefined}
        />
        <Button
          text="Sign In"
          bgColor="bg-[#2F1893]"
          textColor="text-white"
          borderColor="border-white"
          icon={undefined}
        />
      </div>
      <p>After prompting for hover, active, and focus states</p>
      <div className="flex space-x-4">
        <Button2 text="Sign In" bgColor="bg-[#25DAC5]" textColor="text-white" />
        <Button2
          text="Sign In"
          bgColor="bg-white"
          textColor="text-[#1E0E62]"
          borderColor="border-[#1E0E62]"
        />
        <Button2
          text="Sign In"
          bgColor="bg-[#2F1893]"
          textColor="text-white"
          borderColor="border-white"
        />
      </div>
    </>
  );
};

export default ButtonSet;
