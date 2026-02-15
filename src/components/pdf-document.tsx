import { CertificationType } from "@/utils/certifications";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Document, Page } from "react-pdf";
import { useState } from "react";

interface PdfDocumentProps {
  certification: CertificationType;
}

export const PdfDocument = ({ certification }: PdfDocumentProps) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Document
      file={certification.certificate}
      loading={
        <div className="w-full aspect-[1.35/1] flex items-center justify-center">
          <Spinner />
        </div>
      }
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      onLoadError={(error) => console.error("PDF load error:", error)}
    >
      <div className="rounded-lg overflow-hidden">
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} width={600} />
      </div>
      {numPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <Button
            size="icon-sm"
            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft />
          </Button>
          <span className="text-xs">
            Página {pageNumber} de {numPages}
          </span>
          <Button
            size="icon-sm"
            onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
            disabled={pageNumber >= numPages}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </Document>
  );
};
