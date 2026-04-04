import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useTranslation } from "react-i18next";

interface PdfPaginationProps {
  pageNumber: number;
  numPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export const PdfPagination = ({
  pageNumber,
  numPages,
  onPrev,
  onNext,
}: PdfPaginationProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between mt-4">
      <Button size="icon" onClick={onPrev} disabled={pageNumber <= 1}>
        <ChevronLeft />
      </Button>
      <span className="text-xs">
        {t("pdf.info.page")} {pageNumber} {t("pdf.info.of")} {numPages}
      </span>
      <Button size="icon" onClick={onNext} disabled={pageNumber >= numPages}>
        <ChevronRight />
      </Button>
    </div>
  );
};
