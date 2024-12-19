import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const SignIn: React.FC<Props> = ({ className }) => {
  return <div className={cn(className)}>SignIn</div>;
};

export default SignIn;
