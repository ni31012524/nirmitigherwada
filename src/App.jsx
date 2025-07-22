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
              <a href="mailto:soham@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center space-x-2" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7a2.25 2.25 0 01-.876-1.8V6.75" />
                </svg>
                <span>Email</span>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/sohamgherwada" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center space-x-2" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0" />
                </svg>
                <span>LinkedIn</span>
              </a>
              {/* GitHub */}
              <a href="https://github.com/sohamgherwada" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition flex items-center space-x-2" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
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
