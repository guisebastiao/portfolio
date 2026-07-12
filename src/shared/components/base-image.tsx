"use client";

import { GA_EVENTS, trackEvent } from "@/shared/lib/analytics";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useState, type SyntheticEvent } from "react";
import Image, { type ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

type BaseImageProps = ImageProps & {
  wrapperClassName?: string;
};

type Status = "loading" | "loaded" | "error";

export const BaseImage = ({
  alt,
  className,
  wrapperClassName,
  onLoad,
  onError,
  ...props
}: BaseImageProps) => {
  const [status, setStatus] = useState<Status>("loading");

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setStatus("loaded");
    onLoad?.(event);
  };

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = `Image: ${event.currentTarget.alt}`;
    handleImageErrorTrackEvent(image);
    setStatus("error");
    onError?.(event);
  };

  const handleImageErrorTrackEvent = (image: string) => {
    trackEvent(GA_EVENTS.IMAGE_ERRORED, {
      image,
    });
  };

  return (
    <div className={twMerge("relative size-full overflow-hidden", wrapperClassName)}>
      {status === "loading" && <Skeleton className="absolute inset-0 z-10 rounded-md" />}
      <Image
        alt={alt}
        fill
        loading="eager"
        data-status={status}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, 400px"
        className={twMerge(
          "size-full object-cover transition-opacity duration-300",
          "data-[status=loading]:opacity-0",
          "data-[status=loaded]:opacity-100",
          "data-[status=error]:opacity-0",
          className,
        )}
        {...props}
      />
    </div>
  );
};
