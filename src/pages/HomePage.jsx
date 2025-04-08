import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeComit from "../components/home/HomeComit";
import HomeSercvice from "../components/home/HomeService";
import HomeGetStart from "../components/home/HomeGetStart";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeComit />
      <HomeSercvice />
      <HomeGetStart />
    </div>
  );
}
