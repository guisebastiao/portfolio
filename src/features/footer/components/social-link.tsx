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
    className="rounded-full p-1.5 transition border border-transparent hover:bg-foreground/20 hover:border-border"
  >
    {children}
  </a>
);
