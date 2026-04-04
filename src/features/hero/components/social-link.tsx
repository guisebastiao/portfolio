interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SocialLink = ({ href, children }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="rounded-full p-2.5 transition border border-transparent hover:bg-foreground/20 hover:border-border"
  >
    {children}
  </a>
);
