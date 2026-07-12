"use client";

type SocialLinkProps = {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

export const SocialLink = ({ href, onClick, children }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={onClick}
    className="rounded-full p-2.5 transition border border-transparent hover:bg-foreground/10 hover:border-border"
  >
    {children}
  </a>
);
