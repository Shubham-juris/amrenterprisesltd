import img1 from "../../assets/InvestStrat/keystat/img1.jpg";
import img2 from "../../assets/InvestStrat/keystat/img2.jpg";
import img3 from "../../assets/InvestStrat/keystat/img3.jpg";
import img4 from "../../assets/InvestStrat/keystat/img4.jpg";
import img5 from "../../assets/InvestStrat/keystat/img5.jpg";
import img6 from "../../assets/InvestStrat/keystat/img6.jpg";

export default function Keystrat() {
  const items = [
    {
      heading: "Diversification",
      image: img1,
      text: `One of the fundamental principles of investing is diversification. By spreading investments across different asset classes, industries, and geographic regions, clients can reduce risk and potentially enhance returns. Our experts work closely with clients to develop diversified investment portfolios that balance risk and reward based on their risk tolerance and investment objectives.`,
    },
    {
      heading: "Asset Allocation",
      image: img2,
      text: `Asset allocation is another critical aspect of investment strategy. Our team analyzes clients' financial goals, time horizon, and risk tolerance to determine the optimal mix of assets, such as stocks, bonds, real estate, and alternative investments. By strategically allocating assets, we aim to maximize returns while minimizing volatility and downside risk. .`,
    },
    {
      heading: "Active Management",
      image: img3,
      text: `In addition to passive investment strategies, we also offer active management services for clients seeking more hands-on and dynamic portfolio management. Our experienced portfolio managers actively monitor market trends, economic indicators, and investment opportunities to make timely adjustments to clients' portfolios and capitalize on emerging trends and opportunities.`,
    },
    {
      heading: "Risk Management",
      image: img4,
      text: `Managing risk is paramount in investment strategy. We employ sophisticated risk management techniques to identify, assess, and mitigate risks associated with clients' investment portfolios. Whether it's market risk, credit risk, or geopolitical risk, our team employs a proactive approach to risk management to protect clients' capital and preserve wealth. `,
    },
    {
      heading: "Long-Term Focus",
      image: img6,
      text: `Tax efficiency is an integral part of investment strategy. Our experts help clients optimize their investment portfolios for tax efficiency by utilizing tax-advantaged accounts, implementing tax-loss harvesting strategies, and structuring investments in a tax-efficient manner. By minimizing tax liabilities, we aim to enhance after-tax returns and maximize the value of clients' investment portfolios.`,
    },
    {
      heading: "Tax Efficiency",
      image: img5,
      text: `At Amayra Enterprises, we emphasize the importance of taking a long-term view when it comes to investment strategy. We encourage clients to focus on their long-term financial goals and objectives rather than short-term market fluctuations. By staying disciplined and adhering to a long-term investment strategy, clients can weather market volatility and achieve their financial aspirations over time.`,
    },
  ];
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12 space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold uppercase">
          Key Investment Strategies with Amayra Enterprises
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <ItemsCont
            key={item.heading}
            heading={item.heading}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

const ItemsCont = ({ heading, image, text }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{heading}</h3>
      <img
        src={image}
        alt="Diversification"
        className="w-full h-44 object-cover mb-4"
      />
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
};
