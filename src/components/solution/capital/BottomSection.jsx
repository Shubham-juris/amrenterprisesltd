import back_img from "../../../assets/solution/capital/back.jpg";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function BottomSection() {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-16">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold uppercase border-b border-gray-700 pb-2">
          Instagram
        </h2>
        <p className="text-gray-400 mt-4">Feed coming soon</p>
      </div>

      <div className="relative mb-10">
        <img
          src={back_img}
          alt="Reviews background"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-white">REVIEWS</h2>
          <div className="bg-black/50 px-6 py-2 mt-4 rounded">
            <p className="text-gray-200">Reviews coming soon!</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold uppercase border-b border-gray-700 pb-2">
          Connect With Us
        </h2>
        <div className="flex gap-6 mt-6 text-2xl justify-center md:justify-start">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
