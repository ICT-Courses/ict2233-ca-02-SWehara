import { Link } from "react-router-dom";
import myPhoto from "../assets/my-photo.jpg";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-800/80 dark:bg-gray-900/80 shadow-lg rounded-xl p-10 max-w-4xl w-full text-white transition-colors duration-300">
        <div className="flex-1 text-center md:text-left hero-text">
          <h1 className="text-4xl font-bold mb-2 animate-fade-in">Hi There! 👋</h1>
          <h2 className="text-4xl font-bold mb-2 animate-fade-in delay-200">I'm Senuri Wehara</h2>
          <p className="text-lg mb-6 animate-fade-in delay-400">
            I am an enthusiastic IT undergraduate with a passion for
            problem-solving and using technology to create meaningful solutions.
          </p>

          <Link to="/contact" className="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300">
          Say Hello 📞
          </Link>

        </div>
        <div className="flex-1 text-center animate-fade-in delay-800">
          <img
            src={myPhoto}
            alt="Senuri Wehara"
            className="w-32 md:w-48 mx-auto rounded-full border-4 border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
