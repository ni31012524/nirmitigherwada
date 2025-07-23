import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Home } from "./pages/Home";
import { WorkExp } from "./pages/WorkExp";
import { Projects } from "./pages/Projects";
import { JobDetail } from "./pages/JobDetail"; // Import the new job detail page
import { ProjectDetails } from "./pages/projectDetails";

export default function App() {
  // State for social popover
  const [showSocial, setShowSocial] = useState(false);

  return (
    <Router>
      {/* Main wrapper with solid black background and white illuminating text */}
      <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
        {/* Sparkle overlay for extra wow */}
        <div className="sparkle" />
        {/* Animated Navbar with clean white text for marketing vibe */}
        <nav className="flex justify-between items-center px-8 py-6 bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-50 rounded-b-2xl animate-fadeInDown">
          {/* Clean, bold white title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">Nirmiti's Portfolio</h1>
          <ul className="flex space-x-8 text-lg font-semibold">
            <li><Link to="/" className="hover:text-cyan-300 transition duration-200">Home</Link></li>
            <li><Link to="/work" className="hover:text-green-300 transition duration-200">Work Experience</Link></li>
            <li><Link to="/projects" className="hover:text-blue-300 transition duration-200">Projects</Link></li>
          </ul>
        </nav>

        {/* Main content routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkExp />} />
          <Route path="/projects" element={<Projects />} />
          {/* Dynamic route for job details */}
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>

        {/* Floating Social Button and Popover */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {/* Main floating button now says 'Contact Me' */}
          <button
            className="bg-white/20 hover:bg-white/40 text-white rounded-full px-6 py-3 shadow-lg transition font-semibold text-lg"
            onClick={() => setShowSocial((v) => !v)}
            aria-label="Show social links"
          >
            Contact Me
          </button>
          {/* Popover with social icons */}
          {showSocial && (
            <div className="mt-3 mb-1 bg-black/90 border border-white/20 rounded-2xl shadow-xl p-4 flex flex-col items-center space-y-4 animate-fadeInUp">
              {/* Email */}
              <a href="mailto:nirmitigherwada@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center space-x-2" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7a2.25 2.25 0 01-.876-1.8V6.75" />
                </svg>
                <span>Email</span>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/nirmiti-gherwada/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center space-x-2" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0" />
                </svg>
                <span>LinkedIn</span>
              </a>
              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1uTqWAcKUoD0QYnJfOub-RnefbSkN3_3h/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition flex items-center space-x-2"
                title="Resume"
              >
                {/* Resume/Document Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L20.5 9H15zM8 13h8v-2H8v2zm0 4h8v-2H8v2z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

// Animations (add to your global CSS or Tailwind config if needed):
// .animate-fadeInDown { animation: fadeInDown 1s ease; }
// .animate-fadeInUp { animation: fadeInUp 1s ease; }
// @keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
