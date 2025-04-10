export default function MarketAbout() {
  const data = [
    {
      title: "Current market Trends",
      description:
        "Overview of prevailing trends shaping the industry. Analysis of shifts in consumer behavior and preferences. Examination of market dynamics influencing business strategies.",
    },
    {
      title: "Growth Opportunities",
      description:
        "Identification of key growth areas and emerging markets. Exploration of untapped opportunities for expansion. How the company can capitalize on market growth trends.",
    },
    {
      title: "Competitive Landscape",
      description:
        "Assessment of competitors' strategies and market positioning. Analysis of competitors' strengths, weaknesses, opportunities, and threats. Insights into competitor offerings and potential areas of differentiation.",
    },
  ];

return (
    <section className="bg-black text-white py-12 px-6 md:px-10">
        <h2 className="text-3xl font-bold uppercase border-b border-gray-700 pb-2 mb-10">
            About Amayra Marketing Insights
        </h2>
        <div className="grid grid-cols-1 justify-center my-auto md:grid-cols-3 gap-10">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="border-r border-gray-700 justify-center pr-6 last:border-0"
                >
                    <h3 className="text-3xl text-blue-500 font-semibold mb-3">
                        {item.title}
                    </h3>
                    <p className="text-base text-gray-300">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
);
}
