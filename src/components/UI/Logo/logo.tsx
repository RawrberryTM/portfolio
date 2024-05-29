import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src={"/imgs/logo.png"}
      alt="logo"
      width={50}
      height={50}
      className={cn(className)}
    />
  );
};

export default Logo;
