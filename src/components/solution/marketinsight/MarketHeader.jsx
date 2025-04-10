import headerimg from "../../../assets/solution/marketinsight/headerimg.webp";

export default function MarketHeader() {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={headerimg}
          alt="Growing investments"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-6">
        <h2 className="text-4xl font-bold uppercase leading-tight">
          Market Insights at AE
        </h2>
        <p className="text-gray-300">
          BBy combining a thorough understanding of clients' financial goals and
          risk profiles with our expertise in active management and sustainable
          investing, we provide investment portfolios that are not only aligned
          with clients' objectives but also positioned to generate sustainable
          long-term returns.
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 w-fit">
          Find out more
        </button>
      </div>
    </div>
  );
}
