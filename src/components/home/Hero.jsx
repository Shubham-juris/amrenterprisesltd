const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black py-24 text-white">
      {/* Background overlay with opacity */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://ext.same-assets.com/3760615566/959332716.jpeg')",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold uppercase tracking-wide md:text-6xl">
            Unlocking Your Business Success
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            At Amayra Enterprises, we are dedicated to guiding businesses
            towards sustainable growth through tailored solutions.
          </p>
          <a
            href="/contact-us"
            className="inline-block rounded bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
