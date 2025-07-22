import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // <-- Add this line

const projectDetails = {
  "gfinance-app": {
    title: "GFinance App",
    type: "Fintech",
    date: "March 2024",
    description: "AI-powered hedge fund for working class investments.",
    images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"]
  },
  "carbon-tracker": {
    title: "Carbon Tracker",
    type: "Sustainability",
    date: "July 2023",
    description: "Python tool to help reduce carbon footprints.",
    images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"]
  },
  "ios-widget": {
    title: "iOS Widget",
    type: "Mobile",
    date: "January 2025",
    description: "Built widget to display weather and time.",
    images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"]
  }
};

export function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] bg-black px-4 md:px-12 py-10 flex flex-col" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      {/* Top navigation/back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-6 py-2 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition self-start"
      >
        &larr; Back
      </button>

      {/* Responsive layout: text left, collage right */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mx-auto">
        {/* Project Details - left side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-left">{project.title}</h1>
          <div className="mb-6 text-left">
            <h2 className="text-2xl text-white mb-2">Project Type</h2>
            <p className="text-lg text-white">{project.type}</p>
          </div>
          <div className="mb-6 text-left">
            <h2 className="text-2xl text-white mb-2">Date</h2>
            <p className="text-lg text-white">{project.date}</p>
          </div>
          <div className="mb-10 text-left">
            <h2 className="text-2xl text-white mb-2">Description</h2>
            <p className="text-lg text-white">{project.description}</p>
          </div>
        </div>

        {/* Collage - right side, fills space, 3x bigger */}
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full">
            {/* Large main image */}
            <div className="col-span-2 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[340px] md:h-[420px] flex items-center justify-center">
              <img
                src={project.images[0]}
                alt={`Project collage 1`}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Two smaller images below */}
            <div className="col-span-1 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[180px] md:h-[220px] flex items-center justify-center">
              <img
                src={project.images[1]}
                alt={`Project collage 2`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[180px] md:h-[220px] flex items-center justify-center">
              <img
                src={project.images[2]}
                alt={`Project collage 3`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}