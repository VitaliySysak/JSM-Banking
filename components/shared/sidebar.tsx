"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" className="size-[24px] max-xl:size-14" />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}`);
          return (
            <Link key={item.label} href={item.route} className={cn("sidebar-link", { "bg-bank-gradient": isActive })}>
              <div className="relative size-6">
                <Image className={cn({'brightness-[3] invert-0': isActive})} src={item.imgURL} alt={item.label} fill />
              </div>
              <p className={cn('sidebar-label', {'!text-white': isActive})}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
