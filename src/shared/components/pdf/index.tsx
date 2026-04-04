import { PdfPagination } from "@/shared/components/pdf/pdf-pagination";
import { type Certification } from "@/data/certifications";
import { PdfLoading } from "@/shared/components/pdf/pdf-loading";
import { useTranslation } from "react-i18next";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { toast } from "sonner";

export const PdfDocument = ({
  certification,
}: {
  certification: Certification;
}) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { t } = useTranslation();

  const hasMutiplePages = numPages > 1;

  const handlePrev = () => setPageNumber((prev) => Math.max(1, prev - 1));
  const handleNext = () =>
    setPageNumber((prev) => Math.min(numPages, prev + 1));

  const handleLoadError = (error: Error) => {
    console.error("PDF load error:", error);
    toast.error(t("pdf.error.message"));
  };

  return (
    <Document
      file={certification.certificate}
      loading={<PdfLoading />}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      onLoadError={handleLoadError}
    >
      <div className="rounded-lg overflow-hidden">
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </div>
      {hasMutiplePages && (
        <PdfPagination
          pageNumber={pageNumber}
          numPages={numPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </Document>
  );
};
