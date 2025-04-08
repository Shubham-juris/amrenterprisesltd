import AboutHero from "../components/about/AboutHero";
import Enterprice from "../components/about/Enterprice";
import Subscribe from "../components/about/Subscribe";

export default function AboutPage() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <AboutHero />
      <Enterprice />
      <Subscribe />
    </div>
  );
}
