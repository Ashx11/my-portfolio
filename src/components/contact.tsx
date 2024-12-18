import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Map the form data to what the EmailJS template expects
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_yp4h13m",   // Your EmailJS service ID
        "template_aytfzkj",  // Your EmailJS template ID
        templateParams,
        "CMTY78X7vVNxlai4Y"  // Your EmailJS public API key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-10 bg-gray-200 text-gray-800">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-10">
          Thank you for visiting my website. I would love to hear from you!
          Please fill out the form below, or{" "}
          <a
            href="mailto:arshpreets425@gmail.com"
            aria-label="Send an email to Arshpreet Singh"
            className="text-black hover:text-purple-800 transition-colors"
          >
            send me an email
          </a>
          . I'll get back to you as soon as possible.
        </p>
        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="subject" className="mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message" className="mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-12 bg-black text-white text-base font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Arshpreet Singh | Designed by{" "}
            <a
              href="mailto:arshpreets425@gmail.com"
              className="text-black hover:text-purple-800 transition-colors"
            >
              Arshpreet Singh
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
