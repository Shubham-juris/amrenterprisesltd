import React from "react";
import img from "../../assets/about/hero-img.jpg";

const AboutHero = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div>
          <img src={img} alt="Welcome" className=" shadow-md w-full h-[45vh]" />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold uppercase leading-tight">
            Welcome to Amayra Enterprises
          </h2>
          <p className="text-gray-300 text-base">
            We provide expert business and management consulting services to
            help your company succeed. Contact us today!
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-black font-semibold px-6 py-2 rounded shadow transition duration-300">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
