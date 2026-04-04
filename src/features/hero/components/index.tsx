import { ProfileImage } from "@/features/hero/components/profile-image";
import { Content } from "@/features/hero/components/content";
import { Meteors } from "@/shared/components/ui/meteors";

export const Hero = () => {
  return (
    <div
      data-container="0"
      className="relative w-full min-h-dvh flex flex-col items-center justify-center md:flex-row gap-6 py-8 mt-16"
    >
      <Meteors className="absolute inset-0" />
      <Content />
      <ProfileImage />
    </div>
  );
};
