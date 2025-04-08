import React from "react";
import aboutImage from "../../assets/about/enterprice.jpg";

export default function Enterprice() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-2 items-stretch gap-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold uppercase border-b border-gray-500 pb-2 mb-6">
            About Amayra Enterprises
          </h2>
          <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              Welcome to Amayra Enterprises Capitals and Investment, where
              financial expertise meets personalized service.
            </p>
            <p>
              At Amayra, we believe that every investor deserves a partner who
              is committed to their financial success. Established with a vision
              to empower individuals and businesses to achieve their financial
              goals, we specialize in providing comprehensive capital management
              and investment solutions tailored to your unique needs.
            </p>
            <p>
              Our journey began with a simple yet profound mission: to deliver
              exceptional financial services with integrity, transparency, and a
              relentless dedication to client satisfaction. With a team of
              seasoned professionals boasting decades of collective experience
              in the financial industry, we combine expertise with innovation to
              offer a diverse range of investment strategies and wealth
              management solutions.
            </p>
            <p>
              Our journey began with a simple yet profound mission: to deliver
              exceptional financial services with integrity, transparency, and a
              relentless dedication to client satisfaction. With a team of
              seasoned professionals boasting decades of collective experience
              in the financial industry, we combine expertise with innovation to
              offer a diverse range of investment strategies and wealth
              management solutions..
            </p>
            <p>
              What sets us apart is our unwavering commitment to understanding
              your aspirations, risk tolerance, and financial objectives.
              Whether you're planning for retirement, building your investment
              portfolio, or seeking strategic guidance for your business
              ventures, we take the time to listen, analyze, and devise
              personalized strategies designed to optimize your financial
              potential.
            </p>
            <p>
              Transparency is the cornerstone of our approach. We believe in
              fostering open, honest, and collaborative relationships with our
              clients, built on trust and mutual respect. Our transparent fee
              structure, clear communication, and unbiased advice ensure that
              you have the information and insight needed to make informed
              decisions about your financial future.
            </p>
            <p>
              At Amayra, we recognize that the financial landscape is constantly
              evolving. That's why we remain committed to staying ahead of the
              curve, continuously adapting our strategies to capitalize on
              emerging opportunities and mitigate potential risks. Whether it's
              navigating market fluctuations, identifying lucrative investment
              avenues, or optimizing your tax efficiency, our team is dedicated
              to providing proactive guidance and support every step of the way.
            </p>
            <p>
              Beyond our commitment to excellence in financial management, we
              are deeply invested in giving back to the communities we serve.
              Through philanthropic initiatives and community outreach programs,
              we strive to make a positive impact and create a brighter future
              for generations to come.
            </p>
            <p>
              Thank you for considering Amayra Enterprises Capitals and
              Investment as your trusted financial partner. We look forward to
              embarking on this journey together, guiding you towards financial
              prosperity and peace of mind.
            </p>
          </div>
        </div>

        <div className="flex">
          <img
            src={aboutImage}
            alt="Stock graph with magnifier"
            className=" shadow-md w-full object-cover"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
