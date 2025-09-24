import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/main.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, ok: null, msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setStatus({ submitting: false, ok: false, msg: "Please enter your name." });
      return;
    }

    if (!form.email.trim() || !form.email.includes("@") || !form.email.includes(".")) {
      setStatus({ submitting: false, ok: false, msg: "Please enter a valid email." });
      return;
    }

    if (!form.message.trim()) {
      setStatus({ submitting: false, ok: false, msg: "Please enter a message." });
      return;
    }

    setStatus({ submitting: true, ok: null, msg: "" });

    emailjs
      .send(
        "service_q1hgtba",
        "template_7ti3ek9",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "VgycizdDPx-RE58nE"
      )
      .then(
        () => {
          setStatus({
            submitting: false,
            ok: true,
            msg: "Message sent! I’ll get back to you soon.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus({
            submitting: false,
            ok: false,
            msg: "Failed to send. Please try again.",
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 dark:bg-gray-800 p-8 text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8">Get in touch</h1>

      {status.ok === true && (
        <p className="text-green-400 text-lg mb-4">{status.msg}</p>
      )}
      {status.ok === false && (
        <p className="text-red-400 text-lg mb-4">{status.msg}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-3 mb-8">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Your Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="p-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white border border-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-1">Your Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white border border-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-1">Message</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={6}
            className="p-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white border border-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

       <button type="submit" disabled={status.submitting} className="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 disabled:opacity-60"> {status.submitting ? "Sending..." : "Send Message"}
       </button>
       </form>
      <div className="flex flex-col w-full max-w-md divide-y divide-gray-700 items-center">
        <a
          href="https://www.linkedin.com/in/senuri-wehara-a339461a4"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 py-3 text-blue-400 hover:text-blue-500 transition-colors"
        >
          <FaLinkedin size={26} />
          <span>Let’s connect professionally on LinkedIn</span>
        </a>

        <a
          href="https://github.com/SWehara"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 py-3 text-blue-400 hover:text-blue-500 transition-colors"
        >
          <FaGithub size={26} />
          <span>Explore my projects on GitHub</span>
        </a>

        <a
          href="mailto:senuriwehara03@gmail.com"
          className="flex items-center gap-3 py-3 text-blue-400 hover:text-blue-500 transition-colors"
        >
          <FaEnvelope size={26} />
          <span>Drop me an email anytime</span>
        </a>
      </div>
    </div>
  );
}
