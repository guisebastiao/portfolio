import { useTranslation } from "react-i18next";

interface StatProps {
  value: string;
  labelKey: string;
}

export const Stat = ({ value, labelKey }: StatProps) => {
  const { t } = useTranslation();

  return (
    <div className="border border-foreground/15 rounded-lg bg-foreground/5 flex-1 py-3">
      <h4 className="font-bold text-xl text-primary text-center">{value}</h4>
      <span className="block text-sm text-center font-medium text-foreground/75">
        {t(labelKey as any)}
      </span>
    </div>
  );
};
