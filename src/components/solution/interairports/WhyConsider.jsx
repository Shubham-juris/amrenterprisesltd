import aboutimg from "../../../assets/solution/interairports/aboutimg.webp";

export default function WhyConsider() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-2 items-stretch gap-10">
        <div>
          <h2 className="text-xl md:text-xl   border-gray-500 pb-2 mb-6">
            Why Consider International Investing?
          </h2>
          <div className="space-y-6 text-gray-300 opacity-65 text-sm md:text-base leading-relaxed">
            <p>
              Diversification: Investing internationally allows you to spread
              your risk across different markets, sectors, and currencies,
              reducing the impact of regional economic downturns or geopolitical
              events on your portfolio.
            </p>
            <p>
              Growth Potential: Emerging markets offer tremendous growth
              potential, driven by factors such as demographic trends,
              urbanization, and technological advancements. By tapping into
              these markets, you can access high-growth opportunities that may
              not be available domestically.
            </p>
            <p>
              Currency Exposure: Investing in international markets provides
              exposure to foreign currencies, which can serve as a hedge against
              currency fluctuations and enhance your portfolio's risk-adjusted
              returns.
            </p>
            <p>
              Innovation and Differentiated Opportunities: International markets
              offer access to innovative companies, disruptive technologies, and
              unique investment themes that may not be prevalent in your home
              market.
            </p>
            <p>
              By expanding your investment universe, you can uncover new sources
              of alpha and enhance your portfolio's return potential.
            </p>
            <h2
              style={{ opacity: "1.0", color: "white" }}
              className="text-xl md:text-xl  opacity-100  text-white pb-2 mb-6"
            >
              Our Approach
            </h2>
            <p>
              Comprehensive Research: Our team conducts rigorous research and
              analysis to identify attractive international investment
              opportunities across asset classes, sectors, and regions.
            </p>
            <p>
              We leverage both quantitative and qualitative methodologies to
              evaluate market dynamics, competitive landscapes, and growth
              prospects, ensuring that we select investments that align with
              your objectives and risk profile.
            </p>
            <p>
              Risk Management: Investing internationally comes with its own set
              of risks, including currency risk, political risk, and regulatory
              risk. We employ sophisticated risk management techniques to
              mitigate these risks and protect your portfolio against downside
              volatility, while also seeking to capitalize on upside
              opportunities.
            </p>
            <p>
              Active Management: We believe in the power of active management to
              add value and outperform passive benchmarks in international
              markets.
            </p>
          </div>
        </div>

        <div className="flex">
          <img
            src={aboutimg}
            alt="Stock graph with magnifier"
            className=" shadow-md w-full object-cover"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
