import React, { useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   const saveUserAsync = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("saved"), 2000);
    });
  };
const handleFormspree = async () => {
    

    try {
      const response = await fetch("https://formspree.io/f/myzolvwb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
       await toast.promise(
      saveUserAsync(),
      {
        loading: "Message Sending...",
        success: "Message successful!",
        error: "Something went wrong!",
      }
    );
        

        // Reset form
        setFormData({ name: "", email: "", date: "", message: "" });

      } else {
       
        toast.error("Error sending via Formspree ❌");
      }

    } catch (err) {
     console.log(err);
     
      toast.error("Forms Error ❌");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center mt-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need support? Feel free to reach out to us anytime.
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-12">

        {/* Left - Contact Information */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">📞 Contact Information</h2>

          <ul className="mt-4 text-gray-600 space-y-4">
            <li>
              <span className="font-medium text-gray-800">Email:</span> gurjar740@gmail.com
            </li>
            <li>
              <span className="font-medium text-gray-800">Phone:</span> +91 98765 43210
            </li>
            <li>
              <span className="font-medium text-gray-800">Address:</span>
              <p className="text-gray-600">
                4th Floor, Tech Park Tower,
                <br /> Gwalior, India
              </p>
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">🌐 Follow Us</h3>
          <div className="flex gap-4 mt-3 text-blue-600 text-xl">
            <a href="#" className="hover:text-blue-800">🌍</a>
            <a href="#" className="hover:text-blue-800">📘</a>
            <a href="#" className="hover:text-blue-800">🐦</a>
            <a href="#" className="hover:text-blue-800">📸</a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800">✉️ Send Us a Message</h2>

               <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Buttons */}
      
          <button
            type="button"
            onClick={handleFormspree}
            className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send  Message
          </button>

        </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Employee Management — We’re here to help.
      </footer>
    </div>
  );
};

export default ContactsPage;