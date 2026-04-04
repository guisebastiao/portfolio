import { Button } from "@/shared/components/ui/button";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
}

export const MenuToggle = ({ open, onToggle }: MenuToggleProps) => (
  <Button
    size="icon-sm"
    variant="ghost"
    onClick={onToggle}
    className="z-100 md:hidden"
  >
    <X
      className={twMerge("absolute size-5", open ? "opacity-100" : "opacity-0")}
    />
    <Menu
      className={twMerge(
        "absolute size-5",
        !open ? "opacity-100" : "opacity-0",
      )}
    />
  </Button>
);
