"use client";

import { useState } from "react";
import Image from "next/image";
import { getTenantLogo } from "@/lib/data/tenants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  tenantName: string;
  className?: string;
  aspectClass?: string;
};

function logoInitials(name: string): string {
  const cleaned = name.replace(/\([^)]*\)/g, "").trim();
  const words = cleaned.split(/[\s&'.-]+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
  }
  if (cleaned.length <= 3) return cleaned.toUpperCase();
  return cleaned.slice(0, 2).toUpperCase();
}

export function BrandLogo({
  tenantName,
  className,
  aspectClass = "aspect-square",
}: BrandLogoProps) {
  const src = getTenantLogo(tenantName);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center rounded-lg border border-brand-gold/25 bg-brand-black/60",
          aspectClass,
          className,
        )}
      >
        <span className="font-display text-2xl font-light text-gradient-gold">
          {logoInitials(tenantName)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-white/[0.03]",
        aspectClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={`${tenantName} logo`}
        fill
        className="object-contain p-3"
        sizes="(max-width: 768px) 25vw, 12vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
