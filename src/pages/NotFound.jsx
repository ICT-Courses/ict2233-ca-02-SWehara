import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Go back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
