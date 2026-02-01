import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function WorkExp() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Slow down video
    }
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Extra faded, slowed, blurry background video */}
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

      {/* Main heading with white illuminating text */}
      <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 animate-pulse leading-tight z-30 mt-16 md:mt-24">
        Work Experience
      </h2>
      <section className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-4 md:mt-8 w-full max-w-5xl px-2 md:px-4 animate-fadeInUp">
        {/* Job Card 1 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp cursor-pointer focus:outline-none w-full"
          onClick={() => navigate("/job/marketing-intern")}
          title="Marketing Intern"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Marketing Intern | Judy Inc</h3>
          <p className="text-white text-sm md:text-base">Managed + created agency specific social media content & website.</p>
        </button>
        {/* Job Card 2 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-100 cursor-pointer focus:outline-none w-full"
          onClick={() => navigate("/job/camp-leader")}
          title="Camp Leader"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Merchandise Manager | Uptown, GBC</h3>
          <p className="text-white text-sm md:text-base">Led & Optimized merchandising strategies for 2+ categories leading a team of 9 people.</p>
        </button>
        {/* Job Card 3 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-200 cursor-pointer focus:outline-none w-full"
          onClick={() => navigate("/job/telephone-outreach")}
          title="Telephone Outreach"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Event Marketing Coordinator | GBC Networking Event</h3>
          <p className="text-white text-sm md:text-base">Sales & operations leader with a proven track record of exceeding targets.</p>
        </button>
        {/* Job Card 4 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-300 cursor-pointer focus:outline-none w-full"
          onClick={() => navigate("/job/vp-events")}
          title="VP Events"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Marketing Coordinator | YourTravelBee</h3>
          <p className="text-white text-sm md:text-base">Coordinated a high-impact networking event.</p>
        </button>
        {/* Job Card 5 */}
        <button
          className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-floatUp delay-500 cursor-pointer focus:outline-none w-full"
          onClick={() => navigate("/job/marketing-coordinator-shopthing")}
          title="Marketing Coordinator"
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Marketing Coordinator | ShopThing</h3>
          <p className="text-white text-sm md:text-base">Manage Social Media Content and drive engagement & sales.</p>
        </button>
      </section>
    </div>
  );
}
