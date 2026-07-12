"use client";

import { CertificationItem } from "@/features/experience/components/certification-item";
import { GraduationItem } from "@/features/experience/components/graduation-item";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { BookmarkCheck, GraduationCap, Briefcase } from "lucide-react";
import { WorkItem } from "@/features/experience/components/work-item";
import { CERTIFICATIONS } from "@/assets/data/certifications";
import { Card } from "@/features/experience/components/card";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { GRADUATIONS } from "@/assets/data/graduations";
import { useTranslation } from "react-i18next";
import { WORKS } from "@/assets/data/works";

export const Experience = () => {
  const { t } = useTranslation("experience");

  return (
    <div data-container="3" className="flex min-h-screen w-full flex-col gap-10 py-8">
      <DiaTextReveal className="text-3xl font-bold" duration={1.5} text={t("title")} />
      <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-12">
        <div className="xl:col-span-5 flex flex-col gap-3">
          <Card
            icon={Briefcase}
            title={t("card-middle.title")}
            {...motionVariantHelper(fadeSlide({ x: -50 }))}
          >
            <div className="flex flex-col gap-4">
              {WORKS.map((work, index) => (
                <WorkItem key={index} work={work} />
              ))}
            </div>
          </Card>
          <Card
            icon={GraduationCap}
            title={t("card-top.title")}
            {...motionVariantHelper(fadeSlide({ x: -50 }))}
          >
            <div className="flex flex-col gap-4">
              {GRADUATIONS.map((graduation, index) => (
                <GraduationItem key={index} graduation={graduation} />
              ))}
            </div>
          </Card>
        </div>
        <div className="xl:col-span-7">
          <Card
            icon={BookmarkCheck}
            title={t("card-bottom.title")}
            {...motionVariantHelper(fadeSlide({ x: 50 }))}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((certification, index) => (
                <CertificationItem key={index} certification={certification} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
