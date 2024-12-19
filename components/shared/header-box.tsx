import React from "react";
import { cn } from "@/lib/utils";

export const HeaderBox: React.FC<HeaderBoxProps> = ({ type, title, user, subtext, className }) => {
  return (
    <div className={cn("header-box", className)}>
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && <span className="text-bankGradient">&nbsp;{user}</span>}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};
