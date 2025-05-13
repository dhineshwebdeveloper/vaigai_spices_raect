import React from "react";
import QualityIntroSection from "../components/Quality/QualityInteroSection";
import SourcingSection from "../components/Quality/SourcingSection";
import ProcessingSection from "../components/Quality/ProcessingSection";
import QualityControlSection from "../components/Quality/QualityControlSection";
import CertificationsStandardsSection from "../components/Quality/CertificationsStandardsSection";
import PackagingInspectionSection from "../components/Quality/PackagingInspectionSection";
import CustomerSatisfactionSection from "../components/Quality/CustomerSatisfactionSection";
import WhyQualityMattersSection from "../components/Quality/WhyQualityMattersSection";
import ContactSection from "../components/ContactSection";


const Quality = () => {
  return(
    <>
    <QualityIntroSection />
    <SourcingSection />
    <ProcessingSection />
    <QualityControlSection />
    <CertificationsStandardsSection />
    <PackagingInspectionSection />
    <CustomerSatisfactionSection />
    <WhyQualityMattersSection />
    <ContactSection />
  
    </>
  )
};

export default Quality;
