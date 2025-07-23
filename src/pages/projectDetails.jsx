import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // <-- Add this line

const projectDetails = {
  "gfinance-app": {
    title: "Product Development",
    description: "Spearheaded end-to-end product development, from conceptualizing a denim jeans line to creating a detailed tech pack in Illustrator, including design specs, fabric selection, grading, and tolerances. Researched and selected cost-effective manufacturers aligned with target market pricing, optimizing fabric quality, production timelines, and shipment logistics. Developed a comprehensive Bill of Materials (BOM), Production Order Manual (POM), and style sheets while ensuring affordability in packaging and sourcing. This hands-on experience strengthened my expertise in technical design, cost-efficient production, and supply chain coordination.",
    images: ["/pd1.png"]
  },
  "carbon-tracker": {
    title: "Adobe Illustrator",
    description: "I created detailed fashion design sketches, technical flats, and spec sheets as part of my design projects. From concept to execution, I utilized Illustrator’s advanced tools to develop accurate tech packs, ensuring clear communication of design intent, construction details, and measurements for production..",
    images: ["/ai1.png"]
  },
  "ios-widget": {
    title: "Visual Merchandising",
    description: "Designed a full-scale visual merchandising planogram to optimize store layout, product placement, and customer experience from end to end. As part of the project, I developed a detailed store floor plan incorporating fixture placement, product zoning, spotlight positioning, and directional signage to guide customer flow and maximize visual appeal. I strategically allocated high-traffic areas for bestsellers, integrated seasonal themes, and ensured ADA-compliant navigation. The plan included focal displays, window layout concepts, and branded zones to elevate in-store storytelling. This project demonstrated my strong visual planning skills, attention to detail, and ability to create immersive retail environments that align with brand identity and drive conversions.",
    images: ["/VM1.jpeg",]
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
                className="object-contain w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
