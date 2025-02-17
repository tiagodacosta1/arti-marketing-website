import EmailForm from "./EmailForm";
import FAQSection from "./FAQSection";
import UserTypeSection from "./UserTypeSection";
import LandingMoreInfo from "./LandingMoreInfo";
import ThreeStepApproach from "./ThreeStepApproach";
import HighlightedFeatures from "./HighlightedFeatures";
import Hero from "./Hero";
import Features from "./Features";

export default function Home() {
  return (
    <>

      <Hero></Hero>
      <Features></Features>
      <LandingMoreInfo />
      <ThreeStepApproach />
      <HighlightedFeatures />
      <UserTypeSection />
      <EmailForm />
      <FAQSection />
    </>
  );
}
