import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/main.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, ok: null, msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, ok: null, msg: "" });

    emailjs
      .send(
        "service_q1hgtba",   // <-- replace with your EmailJS Service ID
        "template_7ti3ek9",  // <-- replace with your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "VgycizdDPx-RE58nE"    // <-- replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ submitting: false, ok: true, msg: "Message sent! I’ll get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus({ submitting: false, ok: false, msg: "Failed to send. Please try again." });
        }
      );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Get in touch</h1>

      {status.ok === true && (
        <p className="text-green-400 text-lg mb-4">{status.msg}</p>
      )}

      {status.ok === false && (
        <p className="text-red-400 text-lg mb-4">{status.msg}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-3 mb-8">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Your Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-1">Your Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-1">Message</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={6}
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          />
        </label>

        <button
          type="submit"
          disabled={status.submitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-60"
        >
          {status.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="flex gap-6">
        <a
          href="https://github.com/SWehara"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/senuri-wehara-a339461a4"
          target="_blank"
          rel="noreferrer"
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

