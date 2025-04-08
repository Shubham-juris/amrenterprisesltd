import bg_image from "../../assets/stockmarket/header.jpg";

export default function StockHeader() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg_image})` }}
        className="bg-cover bg-center h-64 flex items-center justify-center"
      >
        <h1 className="text-[#030303] text-7xl md:text-4xl font-bold text-center px-4">
          Navigating the Stock Market with Amayra Enterprises
        </h1>
      </div>
      <div className="max-w-[740px] mx-auto text-center my-10 text-white ">
        <h2 className="text-3xl my-6">
          Our Approach to Stock Market Investing
        </h2>
        <p>
          Discover our unique strategies that blend in-depth analysis with
          cutting-edge technology to empower your investment decisions. We
          provide personalized service tailored to meet your financial goals.
        </p>
      </div>
    </div>
  );
}
