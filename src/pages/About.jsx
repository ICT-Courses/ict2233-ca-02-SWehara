import { 
  FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
  FaBootstrap, FaGitAlt, FaCode 
} from "react-icons/fa";
import { 
  SiJavascript, SiTailwindcss, SiSass, SiMongodb, SiMysql, SiExpress 
} from "react-icons/si";

export default function About() {
  return (
    <div className="flex justify-center items-start min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-4xl w-full bg-gray-800/80 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg mb-4">
          Hi, I’m Senuri Wehara from Gampaha, Sri Lanka.
          I’m a second year IT undergraduate at the Department of ICT, University of Sri Jayewardenepura.</p>
          <p className="text-lg mb-4">Beyond coding and technology, I enjoy volunteering, hosting, and travelling to explore new experiences. I’m passionate about learning, connecting with people, and growing both personally and professionally.
        </p>

        {/* Technical Skills */}
        <h2 className="text-2xl font-semibold mt-6 mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-6 sm:grid-cols-6 gap-6 mb-6 text-center">
          <FaPython className="text-yellow-400 text-5xl" />
          <FaCode className="text-purple-500 text-5xl" /> {/* C# */}
          <SiJavascript className="text-yellow-500 text-5xl" />
          <FaReact className="text-blue-400 text-5xl" />
          <FaNodeJs className="text-green-500 text-5xl" />
          <SiExpress className="text-gray-400 text-5xl" />
          <SiMysql className="text-blue-600 text-5xl" />
          <SiMongodb className="text-green-600 text-5xl" />
          <FaHtml5 className="text-orange-500 text-5xl" />
          <FaCss3Alt className="text-blue-500 text-5xl" />
          <SiTailwindcss className="text-cyan-400 text-5xl" />
          <FaBootstrap className="text-indigo-600 text-5xl" />
          <SiSass className="text-pink-400 text-5xl" />
          <FaGitAlt className="text-red-500 text-5xl" />
        </div>

        {/* Soft Skills */}
        <h2 className="text-2xl font-semibold mt-6 mb-8 text-center">Soft Skills</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-700 px-4 py-2 rounded-full text-sm">Teamwork & Collaboration</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full text-sm">Time Management</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full text-sm">Adaptability</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full text-sm">Problem-Solving</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full text-sm">Analytical Thinking</span>
        </div>
      </div>
    </div>
  );
}
