import { ProfileImage } from "@/features/hero/components/profile-image";
import { Content } from "@/features/hero/components/content";
import { Meteors } from "@/shared/components/ui/meteors";

export const Hero = () => {
  return (
    <div
      data-container="0"
      className="relative flex min-h-screen w-full flex-col items-center justify-center md:flex-row gap-6 py-8"
    >
      <Meteors className="pointer-events-none absolute inset-0" />
      <Content />
      <ProfileImage />
    </div>
  );
};
