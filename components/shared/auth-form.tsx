"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomInput } from "@/components/shared/custom-input";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof authFormSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3"></div>
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
          {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          <p className="text-16 font-normal text-gray-600">{user ? "Link your account to get started" : "Please enter your details"}</p>
        </h1>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput name="email" label="Email" placeholder="Enter your email" type="email" control={form.control} />
              <CustomInput name="password" label="Password" placeholder="Enter your password" type="password" control={form.control} />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp; Loading...{" "}
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center items-center gap-1">
            <p>{type === "sign-in" ? "Don't have an account?" : "Already have an account"}</p>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="form-link">
              {type === "sign-in" ? "Sign-up" : "Sign-in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};
