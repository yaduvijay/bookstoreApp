import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from =location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successful");
          navigate(from,{replace:true});
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 relative transition-all duration-300">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute right-4 top-4 text-gray-400 hover:text-red-500 text-xl"
          
        >
          ✕
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create Account ✨
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md">
            Signup
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>
        </form>
      </div>

      {/* Login Modal */}
      <Login />
    </div>
  );
}

export default Signup;
