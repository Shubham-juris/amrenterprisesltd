import Chart from "./Chart";

export default function OurMisson() {
  return (
    <div className="max-w-[1100px] mx-auto bg-black text-white">
      <h2 className="text-3xl my-8">Our Vision</h2>
      <p>
        Explore our proven strategies designed to optimize performance and
        mitigate risks. From long-term holdings to aggressive day trading, learn
        how our expertise aligns with your investment style.
      </p>
      <div className="my-16">
        <Chart />
      </div>
    </div>
  );
}
