import React from "react";
import { cn, formatAmount } from "@/lib/utils";
import { AnimatedCounter } from "./animated-counter";
import { DoughnutChart } from "./doughnut-chart";

export const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({ accounts=[], totalBanks, totalCurrentBalance, className }) => {
  return (
    <section className={cn("total-balance", className)}>
      <div className="total-balance-chart"><DoughnutChart accounts={accounts} /></div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Currenttext-balance</p>
          
          <AnimatedCounter amount={totalCurrentBalance} />
          {/* {formatAmount(totalCurrentBalance)} */}

        </div>
      </div>
    </section>
  );
};
