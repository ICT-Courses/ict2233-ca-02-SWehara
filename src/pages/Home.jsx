import { Link } from "react-router-dom";
import myPhoto from "../assets/my-photo.jpg";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient-x p-8">
      {/* Hero Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-800/80 shadow-lg rounded-xl p-10 max-w-4xl w-full text-white">
        
        {/* Left side - text */}
        <div className="flex-1 text-center md:text-left hero-text">
          <h1 className="text-4xl font-bold mb-2">Hi There! 👋</h1>
          <h2 className="text-4xl font-bold mb-2"> I'm Senuri Wehara</h2>
          <p className="text-lg mb-6">
            I am an enthusiastic IT undergraduate with a passion for
            problem-solving and using technology to create meaningful solutions.
          </p>

          {/* Call-to-action button */}
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Say Hello 📞
          </Link>
        </div>

        {/* Right side - image */}
        <div className="flex-1 text-center">
          <img
            src={myPhoto}
            alt="Senuri Wehara"
            className="w-32 md:w-48 mx-auto hero-image rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
