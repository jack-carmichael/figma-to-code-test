import React from "react";

const EasySteps = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-900 mb-12">Easy steps</h2>

        <div className="relative border-l-2 border-gray-200 space-y-12">
          {/* Step 1 */}
          <div className="ml-6 flex items-start gap-4">
            <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-500">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-1">
                How Startup Framework works?
              </h3>
              <p className="text-gray-500 text-sm">
                The Generator App is an online tool that helps you to export
                ready-made templates ready to work as your future website. It
                helps you to combine slides, panels and other components and
                export it as a set of static files: HTML/CSS/JS.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="ml-6 flex flex-col gap-4">
            <div className="relative flex items-start gap-4">
              <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-500">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-1">
                  Twenty five awesome samples
                </h3>
                <p className="text-gray-500 text-sm">
                  The most important part of the Startup Framework is the
                  samples. The samples form a set of 25 usable pages you can use
                  as is or you can add new blocks from UI Kit. By choosing one
                  of the 25 configurations of the future startup, the process of
                  creation is simple and easy.
                </p>
              </div>
            </div>
            <div className="ml-8 flex gap-4">
              <img
                src="https://via.placeholder.com/120x80"
                alt="Sample Design"
                className="w-32 h-20 rounded-md object-cover"
              />
              <div>
                <h4 className="uppercase text-xs text-indigo-900 font-bold tracking-wider mb-1">
                  Fell Our Design
                </h4>
                <p className="text-gray-500 text-sm">
                  Startup Design Framework contains components which can easily
                  be integrated into almost any design.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="ml-6 flex items-start gap-4">
            <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-500">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-1">
                Variety of designs
              </h3>
              <p className="text-gray-500 text-sm">
                You can decide whether to create your site using UI Kit blocks
                or samples. The blocks can merge together in various
                combinations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-teal-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-teal-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default EasySteps;
