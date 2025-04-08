export default function HomeSercvice() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase md:text-4xl">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ItemContainer
            heading="Wealth Management"
            text={`From investment planning and portfolio management to retirement planning
        and estate planning, our wealth management services are designed to help
        you grow and protect your wealth over the long term.`}
          />
          <ItemContainer
            heading={"Financial Planning"}
            text={`Whether you're saving for a home, funding your child's education, or planning for
              retirement, our comprehensive financial planning services provide the roadmap you
              need to achieve your goals with confidence.`}
          />
          <ItemContainer
            heading={"Investment Advisory"}
            text={`Gain access to our expert investment advice and guidance, backed by thorough research,
              analysis, and market insights. Let us help you navigate the complexities of the financial
              markets and make informed investment decisions.`}
          />
          <ItemContainer
            heading={"Business Consulting"}
            text={`If you're a business owner, our business consulting services can help you optimize your
              operations, manage risk, and drive growth. From strategic planning to financial analysis,
              we're here to support your business every step of the way.`}
          />
        </div>
      </div>
    </section>
  );
}

function ItemContainer({ heading, text }) {
return (
    <div className="flex flex-col space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-blue-400">{heading}</h3>
        <p className="text-gray-300 lg:max-w-lg">{text}</p>
    </div>
);
}
