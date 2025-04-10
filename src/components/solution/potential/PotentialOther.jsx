import img from "../../../assets/solution/marketinsight/headerimg.webp";

const insights = [
  {
    title: "Global Economic Trends",
    description:
      "Stay ahead of global economic trends with our comprehensive analysis of key indicators, including GDP growth, inflation rates, employment figures, and central bank policies. Our experts monitor macroeconomic data from around the world to identify emerging opportunities and potential risks.",
  },
  {
    title: "Market Volatility Management",
    description:
      "Volatility is an inherent feature of financial markets, but it doesn’t have to derail your investment strategy. Our team employs sophisticated risk management techniques to help you navigate market volatility with confidence. From asset allocation strategies to hedging techniques, we offer personalized solutions to protect and grow your wealth in any market environment.",
  },
  {
    title: "Emerging Markets Opportunities",
    description:
      "Unlock the potential of emerging markets with our in-depth analysis of global investment opportunities. Whether you're interested in frontier economies or rapidly growing regions, our research provides valuable insights into market dynamics, regulatory environments, and investment trends, helping you identify high-potential opportunities for growth.",
  },
  {
    title: "Environmental, Social, and Governance (ESG) Investing",
    description:
      "As sustainability and social responsibility become increasingly important considerations for investors, we offer expert guidance on ESG investing. Our comprehensive analysis evaluates companies based on environmental impact, social responsibility, and corporate governance practices, helping you align your investments with your values while maximizing long-term returns.",
  },
];

export default function PontentialOther() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-20">
      <h2 className="text-xl font-bold uppercase border-b border-gray-700 pb-2 mb-10">
        Other Market Insights at AE That Can Help Clients
      </h2>
      <div className="md:flex md:items-start md:gap-8">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src={img} alt="Tablet use" className="w-full object-cover" />
        </div>
        <div className="md:w-2/3 space-y-8">
          {insights.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-[1.5rem] mb-8 font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-300 opacity-65 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
