import React from "react";

const BusinPot = () => {
  return (
    <div className=" text-white  px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-10space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold uppercase">
          Maximize Your Business Potential
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Why Choose Amayra Enterprises for Investment Strategies?
          </h3>
          <p className="text-sm text-gray-300 ">
            Expertise Our team of financial experts brings extensive experience
            and knowledge in investment management, asset allocation, and risk
            management, enabling us to deliver tailored investment strategies
            that meet our clients' unique needs and objectives.
          </p>
          <p className="text-sm text-gray-300 ">
            Personalized Approach We take a personalized approach to investment
            strategy, taking the time to understand each client’s financial
            goals, risk tolerance, and investment preferences. We then tailor
            our recommendations to align with their individual circumstances and
            aspirations.
          </p>
          <p className="text-sm text-gray-300 ">
            Transparency Transparency is paramount in our client relationships.
            We provide clear and transparent communication throughout the
            investment process, keeping clients informed of our strategies,
            performance, and any changes or developments that may impact their
            portfolios.
          </p>
          <p className="text-sm text-gray-300">
            Commitment to Success At Amayra Enterprises, we are committed to our
            clients’ success. We strive to deliver investment strategies that
            not only meet their financial goals but also provide peace of mind
            and confidence in their financial future.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Ready to Optimize Your Investment Strategy?
            </h3>
            <p className="text-sm text-gray-300">
              Contact us today to learn more about our investment strategies and
              how Amayra Enterprises can help you achieve your long-term
              financial goals and aspirations.
            </p>
          </div>
          <button className="w-fit bg-sky-500 hover:bg-sky-600 text-black font-semibold px-6 py-2 rounded shadow transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinPot;
