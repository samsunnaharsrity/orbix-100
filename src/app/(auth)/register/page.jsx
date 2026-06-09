"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function RegisterPage() {
  const [isShowPass, setIsShowPass] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Sign In Failed");
      console.error(error);
    }
  };

  const onSubmit = async (userData) => {
    try {
      const { email, name, image, password } = userData;

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Registration Successful 🎉");
        reset();
        router.push("/");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-100 via-white to-violet-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-purple-100 rounded-3xl shadow-[0_20px_60px_rgba(109,40,217,0.15)]">
          
          <div className="w-full max-w-2xl mx-auto p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-20 h-20 rounded-full border-4 border-purple-200 object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold text-purple-800">
                Create Account
              </h1>

              <p className="text-gray-500 mt-2">
                Register to start using the platform
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full h-12 px-4 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Profile Image URL
                </label>

                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  {...register("image", {
                    required: "Image URL is required",
                  })}
                  className="w-full h-12 px-4 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition"
                />

                {errors.image && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full h-12 px-4 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition"
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
                    type={isShowPass ? "text" : "password"}
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message:
                          "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                        message:
                          "Need 1 uppercase letter and 1 number",
                      },
                    })}
                    className="w-full h-12 px-4 pr-12 rounded-xl border border-purple-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition"
                  />

                  <button
                    type="button"
                    onClick={() => setIsShowPass(!isShowPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-700"
                  >
                    {isShowPass ? (
                      <FaRegEye />
                    ) : (
                      <FaRegEyeSlash />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Register */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-700 to-violet-700 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner loading-sm"></span>
                )}

                {isSubmitting
                  ? "Creating Account..."
                  : "Register"}
              </button>

              {/* Reset */}
              <button
                type="button"
                onClick={() => reset()}
                className="w-full h-12 rounded-xl border border-purple-700 text-purple-700 font-medium hover:bg-purple-700 hover:text-white transition-all"
              >
                Reset
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-purple-200 hover:bg-purple-50 transition-all"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Continue with Google
            </button>

            {/* Login */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?
              <Link
                href="/login"
                className="ml-2 text-purple-700 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}