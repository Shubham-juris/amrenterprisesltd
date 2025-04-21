import img1 from "../../assets/InvestStrat/img1.jpg";
import img2 from "../../assets/InvestStrat/img2.jpg";

export default function TodayStrat() {
  const content = [
    {
      heading: `Amayra Investment overview`,
      image: img1,
      text: `Amayra Investments employs a diversified, fundamental approach to investment, emphasizing long-term value creation and risk management. Our active management strategy, coupled with rigorous fundamental analysis, allows us to identify undervalued assets and capitalize on market opportunities while mitigating risk. With a client-centric focus, we tailor investment solutions to meet individual financial goals and preferences, integrating sustainable investing principles for long-term success. `,
    },
    {
      heading: `Tailored solutions to the clients`,
      image: img2,
      text: `Amayra Investments specializes in providing tailored investment solutions designed to meet the unique financial goals and objectives of our clients. Through a personalized approach, we carefully consider individual risk tolerance, time horizon, and investment preferences to craft customized portfolios that align with each client's specific needs `,
    },
  ];
  return (
    <section className="bg-black text-white px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-10  space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold uppercase">
          Transform your business strategy today
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {content.map((item) => (
          <ItemContent
            key={item.heading}
            heading={item.heading}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

const ItemContent = ({ heading, image, text }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{heading}</h3>
    <img
      src={image}
      alt="Investment overview"
      className="w-full h-70 object-cover mb-4"
    />
    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
  </div>
);
