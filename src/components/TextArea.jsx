import { forwardRef, useEffect, useRef } from "react";

export const TextArea = forwardRef(({ ...props }, ref) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textarea = textAreaRef.current;

    const handleResize = () => {
      if (textarea) {
        const { scrollHeight } = textarea;
        textarea.style.height = `${scrollHeight}px`;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (textarea) {
      resizeObserver.observe(textarea);
      handleResize();
    }
  }, []);

  return (
    <textarea
      ref={(el) => {
        textAreaRef.current = el;
        if (ref) ref(el);
      }}
      {...props}
    />
  );
});

TextArea.displayName = "TextArea";
