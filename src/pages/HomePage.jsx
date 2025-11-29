import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import vidoes from '../videos/two-women-are1.mp4'
import vidoes1 from '../videos/dis2.mp4'
import vidoes2 from '../videos/colorfu1l-3d.mp4'

const HomePage = () => {

  const navigate = useNavigate();
  let token = sessionStorage.getItem("accessToken");

  const handleNavigation = (path) => {
    if (!token) {
      toast.error("Please login first!");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col items-center text-center mt-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
          Employee Management System
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Manage employee details, track records, register new employees, and
          maintain company data all in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => handleNavigation("/create-emp")}
            className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Add New Employee
          </button>

          <button
            onClick={() => handleNavigation("/all-emp")}
             className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg active:scale-95 duration-300"
          >
            View Employees
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-24 px-6 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl mb-4"
          >
            <source src={vidoes} type="video/mp4" />
          </video>

          <h3 className="text-xl font-semibold text-gray-800">
            👥 Employ vs HR Discussion
          </h3>
          <p className="mt-2 text-gray-600">
            A smooth interaction system between employees and HR for better workflow and communication.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            📊 Data Management
          </h3>
          <p className="mt-2 text-gray-600">
            Store, edit, and manage company employee records.
          </p>
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl mt-10"
          >
            <source src={vidoes1} type="video/mp4" />
          </video>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            🚀 Fast & Efficient
          </h3>
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl mt-10"
          >
            <source src={vidoes2} type="video/mp4" />
          </video>
          <p className="mt-2 text-gray-600">
            Simple UI with smooth navigation for quick task handling.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Employee Management — All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
