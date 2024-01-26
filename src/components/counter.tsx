"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Box } from "@mui/material";

export default function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [formattedValue,isFormattedValue]=useState(0);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 1000,
    stiffness: 1000,
    duration: 0.5
  });
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
          isFormattedValue(latest >= 1000 ? "1K+" : latest >= 100 ? "100+" : latest.toFixed(0))
          console.log("formattedValue",formattedValue);
    });
  }, [springValue]);

  return <Box ref={ref} >{formattedValue}</Box>;
}
