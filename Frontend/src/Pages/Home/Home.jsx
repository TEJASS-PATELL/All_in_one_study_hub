import './JobSearch.css';
import React from "react";
import BenefitsSection from '../../components/Home/BenefitsSection';
import JobSections from '../../Components/Home/JobSections';
import Faq from '../../Components/Home/Faq';
import HomeTop from '../../Components/Home/HomeTop';

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
