import { ReactTyped } from "react-typed";
import { skills } from "@/utils/skills";

export const TypedText = () => {
  return (
    <ReactTyped
      strings={skills}
      typeSpeed={70}
      backSpeed={70}
      backDelay={1500}
      loop
    />
  );
};
