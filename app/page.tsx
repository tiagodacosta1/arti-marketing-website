import EmailForm from "./EmailForm";
import FAQSection from "./FAQSection";
import UserTypeSection from "./UserTypeSection";
import LandingMoreInfo from "./LandingMoreInfo";
import ThreeStepApproach from "./ThreeStepApproach";
import HighlightedFeatures from "./HighlightedFeatures";
import Hero from "./Hero";
import Features from "./Features";
import FeaturesThreeRows from "./FeaturesThreeRows";

export default function Home() {
  return (
    <>

      <Hero></Hero>
      <Features></Features>
      <LandingMoreInfo />
      <ThreeStepApproach />
      <HighlightedFeatures />
      <FeaturesThreeRows></FeaturesThreeRows>
      <UserTypeSection />
      <EmailForm />
      <FAQSection />
    </>
  );
}
