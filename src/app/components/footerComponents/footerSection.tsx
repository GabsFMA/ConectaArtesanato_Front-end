interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <ul className="text-white text-sm space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}