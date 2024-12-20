import React from "react";
import { cn } from "@/lib/utils";
import { AuthForm } from "@/components/shared/auth-form";

const SignUp = () => {
  return (
    <section className={cn("flex-center size-full max-sm:px-6")}>
      <AuthForm type="sing-up" />
    </section>
  );
};

export default SignUp;
