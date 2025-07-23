import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Responsive, well-fitted background video (from /public/balls.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      >
        <source src="/balls.mp4" type="video/mp4" />
        {/* If you want to swap the video, just change the src above! */}
      </video>

      {/* Sparkle overlay for extra wow */}
      <div className="sparkle" />

      {/* Hero Content with clean white text for marketing vibe */}
      <section className="relative z-30 flex flex-col items-center text-center py-16 md:py-24 animate-fadeInDown w-full px-4">
        <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 animate-pulse leading-tight">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl animate-fadeInUp">
          I'm Nirmiti Gherwada, known to be Creative, Strategic & Results-Driven. I fuse bold innovation with proven expertise to elevate brands and drive growth.
        </p>
      </section>

      {/* Job Experience Cards as clickable buttons, fully responsive */}
      <section className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-4 md:mt-8 w-full max-w-5xl px-2 md:px-4 animate-fadeInUp">
        {/* Card 1 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp cursor-pointer focus:outline-none w-full"
          title="Marketing Intern"
          onClick={() => navigate("/job/marketing-intern")}
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Marketing Intern | Judy Inc </h3>
          <p className="text-white text-sm md:text-base">Managed + created agency specific social media content & website.</p>
        </button>
        {/* Card 2 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-100 cursor-pointer focus:outline-none w-full"
          title="Camp Leader"
          onClick={() => navigate("/job/camp-leader")}
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Merchandise Manager | Uptown, GBC</h3>
          <p className="text-white text-sm md:text-base">Led & Optimized merchandising strategies for 2+ categories leading a team of 9 people.</p>
        </button>
        {/* Card 3 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-200 cursor-pointer focus:outline-none w-full"
          title="Telephone Outreach"
          onClick={() => navigate("/job/telephone-outreach")}
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Event Marketing Coordinator | Industry Networking Event</h3>
          <p className="text-white text-sm md:text-base">Sales & operations leader with a proven track record of exceeding targets.</p>
        </button>
        {/* Card 4 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-300 cursor-pointer focus:outline-none w-full"
          title="VP Events"
          onClick={() => navigate("/job/vp-events")}
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Marketing Coordinator | YourTravelBee</h3>
          <p className="text-white text-sm md:text-base">Coordinated a high-impact networking event.</p>
        </button>
      </section>
    </div>
  );
}
