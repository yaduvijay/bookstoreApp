import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-2xl shadow-xl p-8 bg-white dark:bg-gray-900">

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">

            {/* Close Button */}
            <Link
              to="/"
              className="absolute right-4 top-4 text-gray-400 hover:text-red-500 text-xl"
              onClick={() =>
                document.getElementById("my_modal_3").close()
              }
            >
              ✕
            </Link>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              Welcome Back 👋
            </h2>

            {/* Email */}
            <div className="mt-6">
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
                  Email is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
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
                  Password is required
                </span>
              )}
            </div>

            {/* Button */}
            <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md">
              Login
            </button>

            {/* Footer */}
            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline"
              >
                Signup
              </Link>
            </p>

          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;