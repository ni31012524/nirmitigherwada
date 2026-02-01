import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const jobDetails = {
  "marketing-intern": {
    title: "Marketing Intern | Judy Inc",
    type: "Marketing",
    description: "As part of my role at JUDY INC, I managed the agency’s website, ensuring artist profiles were updated with high-quality visuals and recent work to showcase their talent effectively. I curated and created engaging social media content to promote both the agency and its artists, driving audience growth and increasing follower engagement. Additionally, I handled invoice editing to align with contractual terms and executed targeted email marketing campaigns to keep artists informed about industry events and opportunities. My efforts contributed to enhancing the agency’s online presence and strengthening its connections within the creative community.",
    images: ["/Judy3.png", "/Judy2.jpeg", "/Judy1.jpg"]
  },
  "camp-leader": {
    title: "Merchandise Manager | Uptown,GBC",
    type: "Leadership",
    description: "As Merchandise Manager, I led a team of 9 and oversaw merchandising strategies for 3 key categories, leveraging sales data, profitability analysis, and customer preferences to drive decision-making. I guided buyers in sourcing products aligned with the store’s theme and implemented strategic markdowns to boost sales. Collaborating closely with marketing and visual merchandising teams, I ensured the store remained on-trend and effectively promoted new arrivals. Using Excel, I tracked inventory, analyzed profit and loss, and optimized stock levels—resulting in a 70% profit increase, 20% cost savings from supplier negotiations, and a 30% reduction in excess inventory while maintaining a 98% in-stock rate for top products.",
    images: ["/m1.jpeg", "/m2.jpg", "/m3.jpg"]
  },
  "telephone-outreach": {
    title: "Event Marketing Coordinator | GBC Industry Networking Event",
    type: "Events",
    description: "Successfully organized and hosted a networking event for graduating students, driving engagement through eye-catching posters and Instagram promotions. Managed seamless guest experiences by warmly welcoming industry professionals, guiding them to their seats, and ensuring their comfort. Oversaw event logistics, including timely snack setup, distribution of branded goodie bags, and coordination of speaker schedules. Additionally, facilitated networking sessions, managed attendee registrations, and gathered post-event feedback to measure success. Demonstrated strong organizational skills, attention to detail, and ability to create professional, memorable experiences.",
    images: ["/Event1.jpg", "/Event2.JPG", "/Event3.PNG"]
  },
  "vp-events": {
    title: "Marketing Coordinator | YourTravelBee",
    type: "Marketing",
    description: "Achieved a 40% increase in social media followers within 30 days by executing strategic content planning and high-performing paid ad campaigns. Negotiated premium B2B vendor contracts that significantly enhanced profitability, while cultivating strong partnerships with luxury hotels to deliver exceptional client experiences. Demonstrated expertise in paid advertising, social media growth, vendor management, and B2B negotiations—driving long-term value and brand impact.",
    images: ["/Travelbee1.jpeg", "/Travelbee2.jpeg", "/Travelbee3.jpeg"]
  },
  "marketing-coordinator-shopthing": {
    title: "Marketing Coordinator | ShopThing",
    type: "Marketing",
    description: "Manage Social Media Content and drive engagement & sales and increase reach on social media and made posts and reels go viral with 400k views which boosted sales.",
    images: ["/Travelbee1.jpeg", "/Travelbee2.jpeg", "/Travelbee3.jpeg"]
  }
};

export function JobDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobDetails[jobId];

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        <h2 className="text-3xl font-bold text-white mb-4">Job Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition">Go Back</button>
      </div>
    );
  }

  return (
    <div
      className="min-h-[90vh] bg-black px-4 md:px-12 py-10 flex flex-col"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Top navigation/back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-6 py-2 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition self-start"
      >
        &larr; Back
      </button>

      {/* Responsive layout: text left, collage right */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mx-auto">
        {/* Job Details - left side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-left">{job.title}</h1>
          <div className="mb-6 text-left">
            <h2 className="text-2xl text-white mb-2">Project Type</h2>
            <p className="text-lg text-white">{job.type}</p>
          </div>
          <div className="mb-10 text-left">
            <h2 className="text-2xl text-white mb-2">Description</h2>
            <p className="text-lg text-white">{job.description}</p>
          </div>
        </div>

        {/* Collage - right side, fills space, 3x bigger */}
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full">
            {/* Large main image */}
            <div className="col-span-2 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[340px] md:h-[420px] flex items-center justify-center">
              <img
                src={job.images[0]}
                alt={`Job collage 1`}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Two smaller images below */}
            <div className="col-span-1 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[180px] md:h-[220px] flex items-center justify-center">
              <img
                src={job.images[1]}
                alt={`Job collage 2`}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-white/10 border border-white/30 rounded-xl overflow-hidden h-[180px] md:h-[220px] flex items-center justify-center">
              <img
                src={job.images[2]}
                alt={`Job collage 3`}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
