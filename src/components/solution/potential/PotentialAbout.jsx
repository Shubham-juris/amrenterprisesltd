import img1 from "../../../assets/solution/interairports/img1.webp";
import img2 from "../../../assets/solution/interairports/img2.webp";
import img3 from "../../../assets/solution/interairports/img3.webp";

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
];

export default function PontentialAbout() {
  return (
    <div className="bg-black text-white px-6 md:px-10 py-12 space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold uppercase">
          About Amayra Enterprises Partnership
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 p-8">
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
    <div className="text-center mx-auto ">
      <img
        // style={{ borderRadius: "50%" }}
        src={image}
        alt="Diversification"
        className="w-80 h-80 object-cover mb-4 rounded-full"
      />
      <h3 className="text-2xl font-semibold mb-4">{heading}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
};
