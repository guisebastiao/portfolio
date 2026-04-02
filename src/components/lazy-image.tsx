import { Skeleton } from "@/components/ui/skeleton";
import { twMerge } from "tailwind-merge";
import React, {
  forwardRef,
  useState,
  useCallback,
  ImgHTMLAttributes,
} from "react";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  (
    { className, wrapperClassName, onLoad, onError, alt = "", ...props },
    ref,
  ) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">(
      "loading",
    );

    const handleLoad = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        setStatus("loaded");
        onLoad?.(e);
      },
      [onLoad],
    );

    const handleError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        setStatus("error");
        onError?.(e);
      },
      [onError],
    );

    return (
      <div className={twMerge("relative overflow-hidden", wrapperClassName)}>
        {status === "loading" && (
          <Skeleton className="absolute inset-0 rounded-md" />
        )}
        <img
          ref={ref}
          alt={alt}
          loading="lazy"
          decoding="async"
          data-status={status}
          onLoad={handleLoad}
          onError={handleError}
          className={twMerge(
            "w-full h-full object-cover transition-opacity duration-300",
            "data-[status=loading]:opacity-0",
            "data-[status=loaded]:opacity-100",
            "data-[status=error]:opacity-0",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

LazyImage.displayName = "LazyImage";
