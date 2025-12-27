import './JobSearch.css';
import React from "react";
import BenefitsSection from '../Components/BenefitsSection';
import JobSections from '../Components/JobSections';
import Faq from '../Components/Faq';
import HomeTop from '../Components/HomeTop';

function JobSearch() {
  return (
    <section className='main-section'>
      <HomeTop />
      <JobSections />
      <BenefitsSection />
      <Faq />
    </section>
  );
}

export default JobSearch;
