import img1 from "../../../assets/solution/capital/img.jpg";
import img2 from "../../../assets/solution/capital/img1.jpg";
import img3 from "../../../assets/solution/capital/img4.jpg";
import img4 from "../../../assets/solution/capital/img3.jpg";

const services = [
  {
    title: "Strategic Investment Planning",
    img: img1,
    desc: "This involves evaluating various factors such as market trends, industry dynamics, and risk tolerance to build portfolios that align with client financial goals and objectives. By strategically allocating capital to high-potential ventures and asset classes, AE aims to optimize returns and mitigate risk for clients.",
  },
  {
    title: "Diversified Portfolio Management",
    img: img2,
    desc: "Another strategy AE executes is capital allocation through diversified portfolio management, by spreading investments across different asset classes, sectors, and geographic regions. AE helps clients build well-balanced portfolios that can withstand market volatility and economic uncertainties.",
  },
  {
    title: "Financial Analysis",
    img: img3,
    desc: "Leveraging expert resources, we conduct thorough financial analysis tailored to each business’s unique circumstances. These analyses provide invaluable insights into the current financial standing, helping guide investment decisions and strategic plans.",
  },
  {
    title: "Risk Assessment",
    img: img4,
    desc: "Our comprehensive risk assessment meticulously evaluates the potential risks and uncertainties involved with various investments. We identify triggers and mitigating strategies, and furnish businesses with the confidence to make prudent and well-informed investment choices.",
  },
];

export default function OurService() {
  return (
    <div className="bg-black max-w-[1240px] mx-auto text-white py-12 px-4 md:px-16">
      <h2 className="text-2xl font-semibold uppercase mb-8 border-b border-gray-700 pb-2">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index}>
            <h3 className="text-white font-bold text-xl my-4">
              {service.title}
            </h3>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-65 object-cover  shadow-md mb-3"
            />
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
