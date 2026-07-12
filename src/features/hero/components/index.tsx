"use client";

import { ProfileImage } from "@/features/hero/components/profile-image";
import { Content } from "@/features/hero/components/content";
import { Meteors } from "@/shared/components/ui/meteors";

export const Hero = () => {
  return (
    <div
      data-container="0"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center mt-16 gap-20 py-8 md:flex-row"
    >
      <Meteors className="absolute inset-0" />
      <Content />
      <ProfileImage />
    </div>
  );
};
