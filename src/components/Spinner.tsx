import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return <div className={twMerge("size-4 border-[2px] border-transparent border-t-black dark:border-t-white rounded-full animate-spin", className)} />;
};
