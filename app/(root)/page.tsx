import React from "react";
import { cn } from "@/lib/utils";
import { HeaderBox } from "@/components/shared/header-box";
import { TotalBalanceBox } from "@/components/shared/total-balance-box";

interface Props {
  className?: string;
}

const Home: React.FC<Props> = ({ className }) => {
  const loggedIn = { firstName: "Vitaliy" };
  return (
    <section className={cn("home", className)}>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>
      </div>
    </section>
  );
};

export default Home;
