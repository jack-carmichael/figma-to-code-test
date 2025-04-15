import React from "react";

function FeaturesSection() {
  return (
    <section className="flex flex-col items-center justify-center p-16 bg-blue-800 text-white">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Project Management</h2>
        <p className="text-lg text-center">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>
      </div>
      <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded">
        Get Started
      </button>
    </section>
  );
}

export default FeaturesSection;
