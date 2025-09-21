import myPhoto from "../assets/my-photo.jpg";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-950 to-gray-800 p-8">
      {/* Hero Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-900/80 shadow-lg rounded-xl p-10 max-w-4xl w-full text-white">
        
        {/* Left side - text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Hi There! 👋</h1>
          <h2 className="text-4xl font-bold mb-2"> I'm Senuri Wehara</h2>
          
          <p className="text-lg text-gray-300">
            An enthusiastic IT undergraduate and a smart worker interested in 
            utilizing skills and abilities to solve problems arising in the world 
            using technology.
          </p>
        </div>

        {/* Right side - image */}
        <div className="flex-1 text-center">
          <img 
            src={myPhoto} 
            alt="Senuri Wehara" 
            className="w-32 md:w-40 mx-auto rounded-full border-4 border-gray-700 shadow-lg" 
          />
        </div>

      </div>
    </div>
  );
}

