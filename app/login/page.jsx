"use client";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const res = await signIn("nodemailer", {
      email: email,
      redirect: false,
      callbackUrl: "/dashboard",
    });
    if (res?.error) {
      setError("Failed to send login email.");
    } else {
      setMessage("Check your email!");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        <div className="hidden md:block relative md:w-1/2">
          <Image
            src="/Phones.jpg"
            alt="Shopping illustration"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 w-full md:w-1/2 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <Smartphone className="h-12 w-12 text-purple-600" />
            <p className="mt-1 text-gray-600">
              Welcome to <span className="font-semibold">Floridda Software</span>
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Login To Dashboard
          </h2>
          <hr className="border-gray-300 mb-6" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-950"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition cursor-pointer"
            >
              Login
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}