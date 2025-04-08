import BusinPot from "../components/InvestStrat/BusinPot";
import InvestStrat from "../components/InvestStrat/InvestStrat";
import Keystrat from "../components/InvestStrat/KeyStrat";
import TodayStrat from "../components/InvestStrat/TodayStrat";

export default function InvestStratPage() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <InvestStrat />
      <TodayStrat />
      <Keystrat />
      <BusinPot />
    </div>
  );
}
