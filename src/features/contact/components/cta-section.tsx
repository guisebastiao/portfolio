import { ShimmerButton } from "@/shared/components/ui/shimmer-button";
import { AuroraText } from "@/shared/components/ui/aurora-text";
import { slideX } from "@/features/contact/variants/slide-x";
import { COLORS } from "@/features/contact/constants/colors";
import { motionProps } from "@/shared/utils/motion-props";
import { useTheme } from "@/app/hooks/use-theme";
import { useTranslation } from "react-i18next";
import { ScrollText } from "lucide-react";
import { motion } from "motion/react";

export const CTASection = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleRedirect = () =>
    window.open("https://www.linkedin.com/in/guilherme-sebastiao/", "_blank");

  return (
    <motion.div
      className="w-full max-w-xl space-y-16 py-20"
      {...motionProps(slideX(-80))}
    >
      <AuroraText
        className="py-2 text-center text-5xl font-bold leading-16 text-shadow-2xs"
        colors={theme === "dark" ? COLORS.dark : COLORS.light}
      >
        {t("sections.contact.contratar.title")}
      </AuroraText>
      <ShimmerButton
        onClick={handleRedirect}
        className="h-9 w-full max-w-xl gap-2 text-sm font-medium"
      >
        <ScrollText className="size-4" />
        <span>{t("sections.contact.contratar.button-name")}</span>
      </ShimmerButton>
    </motion.div>
  );
};
