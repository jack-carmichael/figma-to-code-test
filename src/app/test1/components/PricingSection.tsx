import React from "react";

function PricingSection() {
  return (
    <section className="flex flex-col items-center justify-center p-16 bg-white text-gray-900">
      <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Free</h3>
          <p className="mb-4">$0</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Capture ideas and find them quickly</li>
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Personal</h3>
          <p className="mb-4">$11.99</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Keep home and family on track</li>
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
