import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-200 text-gray-800">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-10">
          Thank you for visiting my website. I would love to hear from you! Please fill out the form below, or{" "}
          <a
            href="mailto:arshpreets425@gmail.com"
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
              placeholder="Your Name"
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
              placeholder="Your Email"
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
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
          >
            Send
          </button>
        </form>

        {status && (
          <p className={`mt-6 text-sm font-medium ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
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
    </section>
  );
};

export default Contact;
