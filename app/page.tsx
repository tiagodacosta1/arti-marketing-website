import { ArrowUpRight } from "lucide-react";
import EmailForm from "./EmailForm";
import FAQSection from "./FAQSection";
import UserTypeSection from "./UserTypeSection";
import LandingMoreInfo from "./LandingMoreInfo";
import ThreeStepApproach from "./ThreeStepApproach";
import HighlightedFeatures from "./HighlightedFeatures";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-xl font-semibold">Logo</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 items-center">
            <li className="hover:text-gray-900 cursor-pointer">What we offer</li>
            <li className="hover:text-gray-900 cursor-pointer">For who</li>
            <li className="hover:text-gray-900 cursor-pointer">Who we are</li>
            <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
            {/* Sign Up Button */}
            <li>
              <button
                className="px-5 py-2 border-2 border-[#1789FC] text-[#1789FC] rounded-full hover:bg-[#1789FC] hover:text-white transition-colors"
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content Section Below Header - Centered */}
      <section className="flex flex-col items-center justify-center min-h-screen py-16 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Title Here</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Here is a brief description or paragraph explaining more about the content or purpose.
        </p>
        <button className="flex items-center bg-blue-500 text-white font-medium px-1 py-1 rounded-full">
          <span className="w-6 h-12 bg-white rounded-l-full "></span> {/* Half circle on the left */}
          <div className="px-2">          Sign up for early access</div>

          <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
            <ArrowUpRight className="text-blue-500" size={20} />
          </span>
        </button>
      </section>
      <LandingMoreInfo></LandingMoreInfo>
      <ThreeStepApproach></ThreeStepApproach>

      <HighlightedFeatures></HighlightedFeatures>

      <UserTypeSection></UserTypeSection>
      <EmailForm></EmailForm>
      <FAQSection></FAQSection>
    </>
  );
}
