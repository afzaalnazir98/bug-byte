"use client";

import * as React from "react";
import Container from "@/components/container";
import QuestionForm from "@/components/QuestionForm";
import Offering from "@/components/services/Offering";
import Work from "@/components/services/Work";

export default function Service() {
  return (
    <>
      <Offering />
      <Work />
      <QuestionForm />
    </>
  );
}
