import { ProfileImage } from "@/features/hero/components/profile-image";
import { Meteors } from "@/components/ui/meteors";
import { Content } from "@radix-ui/react-dialog";

export const Hero = () => {
  return (
    <section
      data-container="0"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 py-8 md:flex-row"
    >
      <Meteors className="pointer-events-none absolute inset-0" />
      <Content />
      <ProfileImage />
    </section>
  );
};
