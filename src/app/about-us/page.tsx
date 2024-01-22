"use client";

import * as React from "react";
import Company from "@/components/about-us/company";
import QuestionForm from "@/components/QuestionForm";
import Service from "@/components/about-us/service";
import CompanyProgress from "@/components/ThemeRegistry/LandingPage/company-progress";
import TimeLineSection from "@/components/about-us/timeline-section";
import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header num={1} url={"/assets/images/about-us-bg.png"} />
      <Company />
      <Service />
      <CompanyProgress />
      <TimeLineSection />
      <QuestionForm />
    </>
  );
}
