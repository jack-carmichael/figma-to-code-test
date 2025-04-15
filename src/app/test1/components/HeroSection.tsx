import React from "react";

function HeroSection() {
  return (
    <section className="flex items-center justify-between p-16 bg-blue-800 text-white">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Get More Done with Whitepace
        </h1>
        <p className="mb-8">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks.
        </p>
        <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded">
          Try Whitepace free
        </button>
      </div>
      <div className="w-1/2 bg-gray-200 h-64"></div>
    </section>
  );
}

export default HeroSection;
