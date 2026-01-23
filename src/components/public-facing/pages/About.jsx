import AboutHero from "@/components/public-facing/about/AboutHero.jsx";
import AboutInstitute from "@/components/public-facing/about/AboutInstitute.jsx";
import LeadershipMessage from "@/components/public-facing/about/LeadershipMessage.jsx";
import Achievements from "@/components/public-facing/about/Achievements.jsx";
import InfrastructureSection from "@/components/public-facing/about/Infrastructure.jsx";
import ValuesSection from "@/components/public-facing/about/Values.jsx";


const About = () => {
  return (
    <>
      <AboutHero/>
      <AboutInstitute/>
      <LeadershipMessage/>
      <Achievements/>
      <InfrastructureSection/>
      <ValuesSection/>
      <AboutHero/>
    </>
  )
}

export default About