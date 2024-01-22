"use client";

import * as React from "react";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Company = dynamic(() => import('@/components/about-us/company'), { ssr: false });
const Service = dynamic(() => import('@/components/about-us/service'), { ssr: false });
const CompanyProgress = dynamic(() => import('@/components/ThemeRegistry/LandingPage/company-progress'), { ssr: false });
const TimeLineSection = dynamic(() => import('@/components/about-us/timeline-section'), { ssr: false });
const QuestionForm = dynamic(() => import('@/components/QuestionForm'), { ssr: false });

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
