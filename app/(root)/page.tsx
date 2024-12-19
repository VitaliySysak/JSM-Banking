import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Home: React.FC<Props> = ({ className }) => {
  return <div className={cn(className)}>Home</div>;
};

export default Home;
