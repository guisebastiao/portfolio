import { useTranslation } from "react-i18next";

interface StatProps {
  value: string;
  labelKey: string;
}

export const Stat = ({ value, labelKey }: StatProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-w-36 flex-1 h-24 border-2 rounded-lg border-foreground/10 bg-neutral-300 dark:bg-zinc-800 flex flex-col items-center justify-center gap-1">
      <h4 className="font-bold text-xl text-blue-600">{value}</h4>
      <span className="text-sm">{t(labelKey as any)}</span>
    </div>
  );
};
