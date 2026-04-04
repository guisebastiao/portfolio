import { CertificationItem } from "@/features/experience/components/certification-item";
import { GraduationItem } from "@/features/experience/components/graduation-item";
import { Header } from "@/features/experience/components/header";
import { slideX } from "@/features/experience/variants/slide-x";
import { certifications } from "@/shared/utils/certifications";
import { Card } from "@/features/experience/components/card";
import { BookmarkCheck, GraduationCap } from "lucide-react";
import { graduations } from "@/shared/utils/graduations";
import { useTranslation } from "react-i18next";
import type { Language } from "@/i18n";

export const Experience = () => {
  const { t, i18n } = useTranslation();

  const lang: Language = i18n.language.split("-")[0] as Language;

  const grads = graduations[lang] ?? graduations.pt;
  const certs = certifications[lang] ?? certifications.pt;

  return (
    <section
      data-container="3"
      className="flex w-full flex-col items-center gap-6 py-8"
    >
      <Header />
      <div className="w-full space-y-3">
        <Card
          icon={GraduationCap}
          title={t("sections.experience.card-top.title")}
          variants={slideX(-80)}
        >
          {grads.map((grad, index) => (
            <GraduationItem key={index} grad={grad} />
          ))}
        </Card>
        <Card
          icon={BookmarkCheck}
          title={t("sections.experience.card-bottom.title")}
          variants={slideX(80)}
        >
          {certs.map((cert, index) => (
            <CertificationItem key={index} certification={cert} />
          ))}
        </Card>
      </div>
    </section>
  );
};
