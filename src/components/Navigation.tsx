import Link from 'next/link'

const navLinks = [
  { href: '/', text: 'トップへ' },
  { href: '/about', text: '事業所情報' },
  { href: '/contact', text: 'お問合せ' },
  { href: '/recruitment', text: '採用情報' },
]

export const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col items-center gap-4 pl-4 md:flex-row">
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="p-2 transition-colors duration-200 hover:text-gray-600 md:p-0"
          data-astro-prefetch
        >
          {link.text}
        </Link>
      ))}
    </nav>
  )
}
