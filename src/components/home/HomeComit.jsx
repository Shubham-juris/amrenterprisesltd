const CommitmentSection = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase md:text-4xl">
          Our Commitment to You
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {/* Expertise */}
          <div className="flex flex-col space-y-4">
            <div className=" overflow-hidden ">
              <img
                src="https://ext.same-assets.com/3760615566/822608616.jpeg"
                alt="Expertise"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">Expertise</h3>
            <p className="text-gray-300">
              Benefit from the expertise of our seasoned professionals who bring
              years of experience and deep industry knowledge to every client
              relationship.
            </p>
          </div>

          {/* Transparency */}
          <div className="flex flex-col space-y-4">
            <div className=" overflow-hidden">
              <img
                src="https://ext.same-assets.com/3760615566/1576570039.jpeg"
                alt="Transparency"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              Transparency
            </h3>
            <p className="text-gray-300">
              We believe in transparent communication and clear, straightforward
              advice. With us, you'll always know where you stand and have a
              clear understanding of your financial options.
            </p>
          </div>

          {/* Customization */}
          <div className="flex flex-col space-y-4">
            <div className="overflow-hidden">
              <img
                src="https://ext.same-assets.com/3760615566/2807898056.jpeg"
                alt="Customization"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              Customization
            </h3>
            <p className="text-gray-300">
              Your financial goals are unique, and so are our solutions. We
              tailor our services to your specific needs, preferences, and
              long-term objectives, ensuring that every plan is as individual as
              you are.
            </p>
          </div>

          {/* Partnership */}
          <div className="flex flex-col space-y-4">
            <div className="overflow-hidden">
              <img
                src="https://ext.same-assets.com/3760615566/51746776.jpeg"
                alt="Partnership"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">Partnership</h3>
            <p className="text-gray-300">
              When you choose Amayra, you're not just a client — you're a valued
              partner. We're committed to building lasting relationships based
              on trust, integrity, and mutual respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
