import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const SignUp: React.FC<Props> = ({ className }) => {
  return <div className={cn(className)}>SignUp</div>;
};

export default SignUp;
