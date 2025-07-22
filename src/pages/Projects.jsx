import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Projects() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Slow down video
    }
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Extra faded, slowed background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.18, filter: "blur(12px)" }}
      >
        <source src="/balls.mp4" type="video/mp4" />
      </video>

      {/* Sparkle overlay for extra wow */}
      <div className="sparkle" />

      {/* Hero Content for Projects */}
      <section className="relative z-30 flex flex-col items-center text-center py-16 md:py-24 animate-fadeInDown w-full px-4">
        <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 animate-pulse leading-tight">
          My Projects
        </h2>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl animate-fadeInUp">
          Explore a selection of my creative and technical work, blending innovation, design, and real-world impact.
        </p>
      </section>

      {/* Project Cards */}
      <section className="relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-4 md:mt-8 w-full max-w-5xl px-2 md:px-4 animate-fadeInUp">
        {/* Project Card 1 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp cursor-pointer w-full"
          onClick={() => navigate("/project/gfinance-app")}
          title="GFinance App"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">GFinance App</h3>
          <p className="text-white text-sm md:text-base mb-2">AI-powered hedge fund for working class investments.</p>
          
        </button>
        {/* Project Card 2 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-100 cursor-pointer w-full"
          onClick={() => navigate("/project/carbon-tracker")}
          title="Carbon Tracker"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Carbon Tracker</h3>
          <p className="text-white text-sm md:text-base mb-2">Python tool to help reduce carbon footprints.</p>

        </button>
        {/* Project Card 3 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-200 cursor-pointer w-full"
          onClick={() => navigate("/project/ios-widget")}
          title="iOS Widget"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">iOS Widget</h3>
          <p className="text-white text-sm md:text-base mb-2">Built widget to display weather and time.</p>
          
        </button>
      </section>
    </div>
  );
}