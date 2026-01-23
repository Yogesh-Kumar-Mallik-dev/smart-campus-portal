import AdmissionsHero from "@/components/public-facing/Admission/AdmissionHero.jsx";
import ProgramsOffered from "@/components/public-facing/Admission/ProgramsOffered.jsx";
import AdmissionProcess from "@/components/public-facing/Admission/AdmissionProcess.jsx";
import EligibilityCriteria from "@/components/public-facing/Admission/EligibilityCriteria.jsx";
import FeeStructure from "@/components/public-facing/Admission/FeeStructure.jsx";
import Scholarships from "@/components/public-facing/Admission/Scholarships.jsx";
import FAQSection from "@/components/public-facing/Admission/AdmissionFAQ.jsx";

const Admission = () => {
  return (
      <>
        <AdmissionsHero/>
        <ProgramsOffered/>
        <AdmissionProcess/>
        <EligibilityCriteria/>
        <FeeStructure/>
        <Scholarships/>
        <FAQSection/>
      </>
  )
}

export default Admission;