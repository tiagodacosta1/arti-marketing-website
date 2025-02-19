import React from 'react';
import EmailForm from '../EmailForm';
import ComparisonSection from './ComparisonSection';
import WhyArti from './WhyArti';
import WhoWeAreComponent from './WhoWeAreComponent';
import EducationalStats from './EducationalStats';
import HeroWhoWeAre from './HeroWhoWeAre';

const WhoWeArePage: React.FC = () => {
    return (
        <div>
            <HeroWhoWeAre></HeroWhoWeAre>
            <EducationalStats></EducationalStats>
            <WhoWeAreComponent></WhoWeAreComponent >
            <WhyArti></WhyArti>
            <ComparisonSection></ComparisonSection>
            <EmailForm></EmailForm>
        </div>
    );
};

export default WhoWeArePage;