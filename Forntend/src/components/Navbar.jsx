import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";


export default function Navbar() {
  const [authUser,setAuthUser]=useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const element = document.documentElement;

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("bg-black", "text-white");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("bg-black", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Sticky nav on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-gray-900 shadow-xl"
          : "bg-black"
      } text-white`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider hover:text-pink-500 transition-colors">
          bookStore
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/Course" className="hover:text-pink-500 transition-colors">Course</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors">Contact</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors">About</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Search */}
          <div className="hidden sm:flex items-center border border-gray-700 px-2 py-1 rounded-md bg-gray-800 text-white">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent px-2 w-24 md:w-40 text-white placeholder-gray-400"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-2xl hover:text-pink-500 transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {
            authUser?(<Logout/>):(
              <div>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-pink-500 hover:bg-pink-600 transition-colors px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-semibold"
          >
            Login
          </button>

          <Login />
          </div>
            )
              
          }

          {/* Login Button */}
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl ml-2 hover:text-pink-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-pink-500">Home</Link>
          <Link to="/Course" onClick={() => setMenuOpen(false)} className="block hover:text-pink-500">Course</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-pink-500">Contact</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-pink-500">About</Link>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-700 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
      )}
    </nav>
  );
}