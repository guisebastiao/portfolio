"use client";

interface SocialLinkProps extends React.AnchorHTMLAttributes<
  HTMLAnchorElement | Omit<"target", "rel">
> {
  href: string;
  children: React.ReactNode;
}

export const SocialLink = ({ children, ...props }: SocialLinkProps) => (
  <a
    {...props}
    target="_blank"
    rel="noreferrer"
    className="rounded-full p-2 transition border border-transparent hover:bg-foreground/10 hover:border-border"
  >
    {children}
  </a>
);
