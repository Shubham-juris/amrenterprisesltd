import img from "../../assets/stockmarket/market.jpg";

export default function MarketAnalysis() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-16">
      {/* Section 1: Market Analysis */}
      <h3 className="text-3xl font-bold uppercase mb-2 border-b border-gray-600 pb-8 mb-8">
        Market Analysis
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-100"
            src="https://www.youtube.com/embed/BHACKCNDMW8"
            title="Market Analysis Video"
            allowFullScreen
          ></iframe>
        </div>
        <p className="w-full md:w-1/2 text-gray-300 leading-relaxed  text-2xl">
          Gain insights through our comprehensive market analyses that keep you
          ahead of trends. Our experts deliver regular updates and forecasts,
          ensuring you're always informed.
        </p>
      </div>

      {/* Section 2: Portfolio Management */}
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <img src={img} alt="Portfolio Management" className="w-full md:w-1/2" />
        <div className="w-full md:w-1/2">
          <h2 className="font-bold uppercase mb-4 text-5xl">
            Customized Portfolio Management
          </h2>
          <p className=" text-gray-300 leading-relaxed text-2xl">
            Let us manage your portfolio with a tailored approach that reflects
            your risk tolerance and investment objectives. We provide continuous
            portfolio monitoring and adjustments based on market conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
