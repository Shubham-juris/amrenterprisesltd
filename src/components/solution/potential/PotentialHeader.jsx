import headerimg from "../../../assets/solution/potential/p-header.webp";

export default function PotentialHeader() {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 p-8">
        <img
          src={headerimg}
          alt="Growing investments"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-6">
        <h2 className="text-4xl font-bold uppercase leading-tight">
          Explore Partnership Opportunities with Amayra Enterprise
        </h2>
        <p className="text-gray-300">
          At Amayra Enterprises Capitals and Investment, we believe in the power
          of collaboration to drive mutual growth and success. We welcome
          opportunities to partner with like-minded organizations,
          professionals, and institutions who share our commitment to
          excellence, integrity, and client satisfaction.
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 w-fit">
          Find out more
        </button>
      </div>
    </div>
  );
}
