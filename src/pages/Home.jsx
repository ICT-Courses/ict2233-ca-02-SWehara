import myPhoto from "../assets/my-photo.jpg";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      {/* Left side - text */}
      <div className="flex-1 text-center md:text-left hero-text">
        <h1 className="text-4xl font-bold mb-2">Senuri Wehara</h1>
        <h2 className="text-2xl font-semibold mb-4">IT Undergraduate</h2>
        <p className="text-lg">
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
          className="max-w-xs rounded-lg mx-auto hero-image"
        />
      </div>
    </div>
  );
}
