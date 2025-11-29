import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("accessToken");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    if (confirm("Are you sure")) {
      sessionStorage.removeItem("accessToken");
      navigate("/login");
      toast.success("Logged out successfully");
    }
  };

  return (
    <header className="h-20 w-full px-4 shadow-xl flex items-center justify-between bg-white">
      <div className="font-bold text-xl md:text-2xl flex items-center gap-2 group cursor-pointer">
  <span className="text-4xl transition transform duration-300 group-hover:rotate-12 group-hover:scale-125">
    🧑‍💼
  </span>
  
  <Link
    to="/"
    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-wide 
               transition transform duration-300 group-hover:scale-110 drop-shadow"
  >
    EmployHub
  </Link>
</div>


      {/* Hamburger Menu Icon (Mobile) */}
      {pathname !== "/login" && pathname !== "/signup" && (
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Desktop Navigation */}
      {pathname !== "/login" && pathname !== "/signup" && (
        <nav className="hidden md:flex gap-8 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      )}

      {/* Buttons */}
      <div className="hidden md:flex font-semibold items-center gap-4">
        {token ? (
          <>
            <Link to="/create-emp">
              <button className="px-4 cursor-pointer text-blue-600 font-semibold">
                Create Employee
              </button>
            </Link>
            <Link to="/all-emp">
              <button className="px-4 cursor-pointer text-blue-600 font-semibold">
                All Employees
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-400 p-2 rounded-full hover:bg-red-600 text-white cursor-pointer"
            >
              <FaPowerOff />
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="cursor-pointer border rounded px-4 py-2 text-blue-600 border-blue-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="cursor-pointer border rounded px-4 py-2 bg-blue-600 text-white">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && pathname !== "/login" && pathname !== "/signup" && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 font-semibold md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>

          <hr />

          {token ? (
            <>
              <Link to="/create-emp" onClick={() => setMenuOpen(false)}>
                Create Employee
              </Link>
              <Link to="/all-emp" onClick={() => setMenuOpen(false)}>
                All Employees
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
