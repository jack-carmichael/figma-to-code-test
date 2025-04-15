import React from "react";

const ButtonSet = () => {
  return (
    <>
      <div className="flex">
        {/* Left Section */}
        <p>original output</p>
        <div className="w-2/3 bg-white flex justify-center items-center">
          <div className="flex gap-10">
            {/* First Column */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white"></div>
              </div>
              <button className="bg-teal-400 text-white rounded-full px-6 py-2 text-sm">
                Sign In
              </button>
              <button className="bg-teal-400 text-white rounded-full px-6 py-2 text-base">
                Sign In
              </button>
              <button className="bg-teal-400 text-white rounded-full px-8 py-3 text-lg">
                Sign In
              </button>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border border-purple-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-purple-600"></div>
              </div>
              <button className="border border-gray-300 text-purple-800 rounded-full px-6 py-2 text-sm">
                Sign In
              </button>
              <button className="border border-gray-300 text-purple-800 rounded-full px-6 py-2 text-base">
                Sign In
              </button>
              <button className="border border-gray-300 text-purple-800 rounded-full px-8 py-3 text-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 bg-indigo-900 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-purple-300 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-white"></div>
            </div>
            <button className="border border-purple-400 text-white rounded-full px-6 py-2 text-sm">
              Sign In
            </button>
            <button className="border border-purple-400 text-white rounded-full px-6 py-2 text-base">
              Sign In
            </button>
            <button className="border border-purple-400 text-white rounded-full px-8 py-3 text-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Left Section */}
        <p>After prompting for hover, active, and focus states</p>
        <div className="w-2/3 bg-white flex justify-center items-center">
          <div className="flex gap-10">
            {/* First Column */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white"></div>
              </div>
              <button className="bg-teal-400 text-white rounded-full px-6 py-2 text-sm hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Sign In
              </button>
              <button className="bg-teal-400 text-white rounded-full px-6 py-2 text-base hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Sign In
              </button>
              <button className="bg-teal-400 text-white rounded-full px-8 py-3 text-lg hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Sign In
              </button>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border border-purple-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-purple-600"></div>
              </div>
              <button className="border border-gray-300 text-purple-800 rounded-full px-6 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Sign In
              </button>
              <button className="border border-gray-300 text-purple-800 rounded-full px-6 py-2 text-base hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Sign In
              </button>
              <button className="border border-gray-300 text-purple-800 rounded-full px-8 py-3 text-lg hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 bg-indigo-900 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-purple-300 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-white"></div>
            </div>
            <button className="border border-purple-400 text-white rounded-full px-6 py-2 text-sm hover:bg-purple-700 active:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Sign In
            </button>
            <button className="border border-purple-400 text-white rounded-full px-6 py-2 text-base hover:bg-purple-700 active:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Sign In
            </button>
            <button className="border border-purple-400 text-white rounded-full px-8 py-3 text-lg hover:bg-purple-700 active:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSet;
