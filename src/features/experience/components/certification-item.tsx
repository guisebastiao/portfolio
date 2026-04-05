import type { certifications } from "@/data/certifications";
import { PdfDocument } from "@/shared/components/pdf";
import { Button } from "@/shared/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";

interface CertificationItemProps {
  certification: (typeof certifications)["pt"][number];
}

export const CertificationItem = ({
  certification,
}: CertificationItemProps) => (
  <div className="flex items-center rounded-lg border border-transparent px-3 py-1.5 transition hover:border-border hover:bg-foreground/10">
    <div className="flex-1 space-y-0.5">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full aspect-square bg-primary" />
        <h3 className="text-[15px] font-semibold text-foreground">
          {certification.name}
        </h3>
      </div>
      <p className="pl-4 text-xs leading-relaxed text-muted-foreground">
        {certification.description}
      </p>
    </div>
    {certification.certificate && (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost">
            <SquareArrowOutUpRight className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="line-clamp-1 pr-5">
              {certification.name}
            </DialogTitle>
            <DialogDescription>{certification.description}</DialogDescription>
          </DialogHeader>
          <PdfDocument certification={certification} />
        </DialogContent>
      </Dialog>
    )}
  </div>
);
