import "../styles/main.scss";

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Get in touch</h1>

      {/* Contact form */}
      <form className="flex flex-col w-full max-w-md gap-4 mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>

      {/* Social links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/SWehara"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/senuri-wehara-a339461a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMqJbaLznT6SzZoG6dNBfHw%3D%3D"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:senuriwehara03@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Email
        </a>
      </div>
    </div>
  );
}
