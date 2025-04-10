import MarketAbout from "../components/solution/marketinsight/MarketAbout";
import MarketHeader from "../components/solution/marketinsight/MarketHeader";
import MarketOther from "../components/solution/marketinsight/MarketOther";

export default function MarketInsight() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <MarketHeader />
      <MarketAbout />
      <MarketOther />
    </div>
  );
}
