import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Me
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Feel free to reach out if you have a project in mind,
          want to collaborate, or just want to say hello.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow">

        <form onSubmit={handleSubmit}>

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <p className="mb-4 text-green-600 font-medium text-center">
              ✅ Message sent successfully! I’ll get back to you soon.
            </p>
          )}

          {/* ERROR MESSAGE */}
          {status === "error" && (
            <p className="mb-4 text-red-600 font-medium text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded px-4 py-2"
              required
              disabled={status === "loading"}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-2 rounded font-semibold transition ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;
