import header_img from "../../../assets/solution/capital/header.jpg";

export default function CapitalHeader() {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white py-4">
      <h1 className="text-2xl font-bold border-b-2 border-white pb-5 mb-5">
        Capital Allocation
      </h1>
      <img src={header_img} alt="" className="my-10 " />
      <p className=" leading-relaxed">
        Capital allocation refers to the strategic process of distributing
        financial resources among various investment opportunities or business
        activities. It involves determining how to deploy capital effectively to
        maximize returns while managing risk. By allocating capital wisely,
        businesses can optimize their investment portfolios, fund growth
        initiatives, and enhance shareholder value.
      </p>
    </div>
  );
}
