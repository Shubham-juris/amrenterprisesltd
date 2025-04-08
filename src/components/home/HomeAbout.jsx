import img1 from "../../assets/home/aboutImg/img1.webp";
import img2 from "../../assets/home/aboutImg/img2.webp";

const AboutSection = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase md:text-4xl">
          Who We Are at Amayra Enterprises
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Our Mission */}
          <div className="flex flex-col space-y-4 rounded-lg p-4">
            <img src={img1} alt="" />
            <h3 className="text-xl font-semibold text-blue-400">Our Mission</h3>
            <p className="text-gray-300">
              At Amayra Enterprises, our mission is to empower businesses to
              achieve sustainable growth and success by providing innovative
              solutions tailored to their unique needs. Through strategic
              guidance, industry expertise, and collaborative partnerships, we
              strive to unlock new opportunities, drive operational excellence,
              and create long-term value for our clients.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col space-y-4 rounded-lg  p-4">
            <img src={img2} alt="" />
            <h3 className="text-xl font-semibold text-blue-400">Our Vision</h3>
            <p className="text-gray-300">
              Our vision at Amayra Enterprises is to be the leading partner of
              choice for businesses seeking to thrive in a dynamic and
              competitive marketplace. We envision a future where every
              business, regardless of size or industry, has the tools,
              resources, and support needed to realize its full potential and
              make a positive impact on the world.
            </p>
          </div>
        </div>

        {/* Unlocking Growth Section */}
        <div className="mt-16 rounded-lg  p-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Unlocking Growth: Capital and Investment Strategies with Amayra
            Enterprises
          </h3>
          <p className="mx-auto max-w-4xl text-gray-300">
            In our consultation with Amayra Enterprises, we'll analyze your
            current business situation, explore growth goals, and discuss
            challenges. We'll then tailor capital and investment strategies,
            explore international opportunities, and discuss potential
            partnerships. We'll outline actionable steps to drive your business
            forward.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-block rounded bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
