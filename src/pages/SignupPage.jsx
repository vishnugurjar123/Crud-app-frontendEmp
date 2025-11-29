import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Input Change Handler
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fake async function (for toast.promise)
  const saveUserAsync = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("saved");
      }, 4000);
    });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    let { username, email, password } = formData;

    // Validation
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast("Enter all credentials!", { icon: "😒" });
      return;
    }

    // Get users from localStorage
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    let existingUser = allUsers.find((user) => user.email === email);

    if (existingUser) {
      toast.error("User already exists!");
      return;
    }

    let newUser = { username, email, password };
    allUsers.push(newUser);

    // Show promise loader
    await toast.promise(
      saveUserAsync(newUser),
      {
        loading: "Creating account...",
        success: "Signup successful!",
        error: "Something went wrong!",
      }
    );

    // Save user after promise resolves
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Reset form
    setFormData({ username: "", email: "", password: "" });

    // Redirect
    navigate("/login");
  };

  return (
    <div>
      <Navbar />

      <section className="flex items-center justify-center min-h-[85vh] bg-gray-50 px-4">
        <form
          onSubmit={handleSubmit}
                className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8 flex flex-col gap-5"

        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>

          <input
            className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
             className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
             className="w-full border border-gray-400 rounded p-3 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600 transition"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="text-center text-gray-700 font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 underline">
              Login
            </Link>
          </p>

          <button className="cursor-pointer py-2 mb-3 rounded bg-blue-600 text-white hover:bg-blue-800 transition">
            Signup
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
