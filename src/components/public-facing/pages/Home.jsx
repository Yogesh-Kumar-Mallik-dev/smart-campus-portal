import Hero from "@/components/public-facing/home/Hero.jsx";
import SpatialGrid from "@/components/public-facing/home/CoursesSection.jsx";
import Believe from "@/components/public-facing/home/Believe.jsx";
import WhyBBDIT from "@/components/public-facing/home/WhyBBDIT.jsx";
import HomeNotice from "@/components/public-facing/home/HomeNotice.jsx";
import CampusLife from "@/components/public-facing/home/CampusLifel.jsx";
import Placements from "@/components/public-facing/home/PlacementsCarousel.jsx";
import FinalCTA from "@/components/public-facing/home/FinalCTA.jsx";

const Home = () => {
  return (
    <>
      <Hero/>
      <Believe />
      <WhyBBDIT />
      <SpatialGrid/>
      <HomeNotice/>
      <CampusLife />
      <Placements/>
      <FinalCTA/>
    </>
  )
}

export default Home;