"use client";

import React from "react";
import CountUp from "react-countup";

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="total-balance-amount flex-center gap-2">
      <CountUp decimals={2} decimal="," prefix="$" start={100} end={amount} />
    </p>
  );
};
