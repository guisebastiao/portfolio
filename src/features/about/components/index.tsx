import { StacksCard } from "@/features/about/components/stacks-card";
import { InfoCard } from "@/features/about/components/info-card";
import { Header } from "@/features/about/components/header";
import { useAge } from "@/features/about/hooks/use-age";

export const About = () => {
  const { age } = useAge();

  return (
    <div
      data-container="1"
      className="w-full min-h-screen flex flex-col items-center gap-6 py-8"
    >
      <Header />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <InfoCard age={age} />
        <StacksCard />
      </div>
    </div>
  );
};
