import React from "react";

function TestimonialsSection() {
  return (
    <section className="flex flex-col items-center justify-center p-16 bg-blue-800 text-white">
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-gray-900">
          <p className="mb-4">
            Whitepace is designed as a collaboration tool for businesses that is
            a full project management solution.
          </p>
          <p className="font-semibold">Oberon Shaw, MCH</p>
          <p>Head of Talent Acquisition, North America</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
