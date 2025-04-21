import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-black text-white flex flex-col justify-center max-w-7xl  py-16 px-6 md:px-20">
      <h2 className="text-xl font-bold uppercase border-b border-gray-700 pb-2 mb-10">
        Contact Us
      </h2>
      <div className="md:flex md:justify-between md:space-x-10">
        {/* Left Side: Form */}
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <h3 className="text-white text-lg font-semibold">Drop us a line!</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded"
          ></textarea>

          <div className="flex justify-between items-center text-sm text-blue-400">
            <a href="#" className="hover:underline">
              Attach Files
            </a>
            <span className="text-gray-400">Attachments (0)</span>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-6 rounded">
            Send
          </button>

          <p className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>

        {/* Right Side: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-white text-lg font-semibold">
            Better yet, see us in person!
          </h3>
          <p className="text-gray-300 text-sm">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>

          <div>
            <h4 className="font-semibold">Amayra Enterprises</h4>
            <p className="text-sm text-gray-300">
              Unit # 1, 5009D 51 Street, Barrhead, Alberta T7N 1L1, Canada
            </p>
            <p className="text-blue-400 mt-1 text-sm">
              +1 780-800-1628
              <br />
              <a href="mailto:contact@amrenterprises.com" className="underline">
                contact@amrenterprises.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Mon &nbsp;&nbsp;&nbsp;&nbsp;09:00 a.m. – 05:00 p.m.</li>
              <li>Tue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 a.m. – 05:00 p.m.</li>
              <li>Wed &nbsp;&nbsp;&nbsp;&nbsp;09:00 a.m. – 05:00 p.m.</li>
              <li>Thu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 a.m. – 05:00 p.m.</li>
              <li>
                Fri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 a.m. –
                05:00 p.m.
              </li>
              <li>
                Sat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed
              </li>
              <li>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
