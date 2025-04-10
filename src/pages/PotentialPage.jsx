import PontentialAbout from "../components/solution/potential/PotentIalAbout";
import PotentialHeader from "../components/solution/potential/PotentialHeader";
import PontentialOther from "../components/solution/potential/PotentialOther";
import PotentialPartner from "../components/solution/potential/PotentialPartner";
import PontentialWithUs from "../components/solution/potential/PotentialWithUs";

export default function PotentialPage() {
  return (
    <div className="max-w-[1240px] m-auto">
      <PotentialHeader />
      <PontentialWithUs />
      <PontentialAbout />
      <PontentialOther />
      <PotentialPartner />
    </div>
  );
}
