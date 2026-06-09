"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Login Successful");
      }
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-violet-100 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl border border-purple-100 shadow-xl p-6 md:p-8">

          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-purple-100"
            />

            <h1 className="mt-4 text-3xl font-bold text-purple-800">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your account
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full h-12 px-4 rounded-xl border border-purple-200 focus:ring-4 focus:ring-purple-100 focus:border-purple-600 outline-none"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full h-12 px-4 pr-14 rounded-xl border border-purple-200 focus:ring-4 focus:ring-purple-100 focus:border-purple-600 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-700"
                >
                  {showPass ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold transition cursor-pointer"
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={() => reset()}
              className="w-full h-12 rounded-xl border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition cursor-pointer"
            >
              Reset
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">
              OR
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full h-12 flex items-center justify-center gap-3 border border-purple-200 rounded-xl hover:bg-purple-50 transition"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account?

            <Link
              href="/register"
              className="ml-2 text-purple-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}