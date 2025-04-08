import React from "react";
import bgImage from "../../assets/about/bg-img.jpg";

export default function Subscribe() {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 md:px-0"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex flex-col items-center text-white text-center">
        <h2 className="text-3xl font-bold uppercase mb-2">Subscribe</h2>
        <p className="mb-6 text-sm">Sign up to hear from us.</p>

        <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl">
          <input
            type="email"
            placeholder="contact@amrenterprises.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 w-30 text-white px-6 py-2.5 font-medium hover:bg-blue-600 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
