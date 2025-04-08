const GetStartedSection = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Get Started Today
          </h2>
          <p className="mb-8 text-gray-300">
            Ready to take control of your financial future? Contact us today to
            schedule a consultation and learn more about how Amayra Enterprises
            Capitals and Investment can help you achieve your financial goals.
            Whether you're an individual investor, a business owner, or an
            institutional client, we're here to support you every step of the
            way.
          </p>
          <a
            href="/contact-us"
            className="inline-block rounded bg-blue-500 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
