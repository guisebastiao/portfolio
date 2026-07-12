"use client";

import { useTrackEvents } from "@/features/experience/hooks/use-track-events";
import type { Certification } from "@/assets/data/certifications";
import { BaseImage } from "@/shared/components/base-image";
import { Button } from "@/shared/components/ui/button";
import { useTranslation } from "react-i18next";
import { BadgeCheck } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/shared/components/ui/dialog";

type CertificationItemProps = {
  certification: Certification;
};

export const CertificationModal = ({ certification }: CertificationItemProps) => {
  const { t } = useTranslation("experience");

  const { openedCertification } = useTrackEvents();

  const handleDialogOpen = () => {
    openedCertification(certification.name);
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={handleDialogOpen}
        render={
          <Button className="mt-auto" variant="outline">
            <BadgeCheck className="text-foreground/80" />
            <span className="font-normal text-[13px] text-foreground/80">{t("modal.button")}</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="line-clamp-1 pr-5">{t(certification.name)}</DialogTitle>
          <DialogDescription>{t(certification.description)}</DialogDescription>
        </DialogHeader>
        <div className="w-full aspect-[1.35/1] rounded-lg overflow-hidden border-2">
          <BaseImage src={certification.certificate} alt={certification.name} loading="lazy" />
        </div>
        <DialogFooter>
          <DialogClose
            render={
              <Button variant="outline" className="w-full">
                {t("modal.button-close")}
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
