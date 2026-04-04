import { CertificationItem } from "@/features/experience/components/certification-item";
import { GraduationItem } from "@/features/experience/components/graduation-item";
import { Header } from "@/features/experience/components/header";
import { slideX } from "@/features/experience/variants/slide-x";
import { Card } from "@/features/experience/components/card";
import { BookmarkCheck, GraduationCap } from "lucide-react";
import { motionProps } from "@/shared/utils/motion-props";
import { certifications } from "@/data/certifications";
import { graduations } from "@/data/graduations";
import { useTranslation } from "react-i18next";
import type { Language } from "@/i18n";

export const Experience = () => {
  const { t, i18n } = useTranslation();

  const lang: Language = i18n.language.split("-")[0] as Language;

  const grads = graduations[lang] ?? graduations.pt;
  const certs = certifications[lang] ?? certifications.pt;

  return (
    <div
      data-container="3"
      className="w-full min-h-dvh flex flex-col items-center gap-6 py-8"
    >
      <Header />
      <div className="w-full space-y-3">
        <Card
          icon={GraduationCap}
          title={t("sections.experience.card-top.title")}
          {...motionProps(slideX(-80))}
        >
          {grads.map((grad, index) => (
            <GraduationItem key={index} grad={grad} />
          ))}
        </Card>
        <Card
          icon={BookmarkCheck}
          title={t("sections.experience.card-bottom.title")}
          {...motionProps(slideX(80))}
        >
          {certs.map((cert, index) => (
            <CertificationItem key={index} certification={cert} />
          ))}
        </Card>
      </div>
    </div>
  );
};
