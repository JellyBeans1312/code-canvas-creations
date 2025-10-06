import Link from 'next/link'
import { useContext } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo, Logomark } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia';
import { RootLayoutContext } from '@/components/RootLayout';

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Freedom Lawns', href: '/work/freedom-lawns' },
      { title: 'JBP Janitorial', href: '/work/jbp-janitorial' },
      { title: 'Mira', href: '/work/mira' },
      { title: 'Coreledger', href: '/work/coreledger' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Documentation', href: '/documentation' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-accentOne">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-accentOne">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-accentTwo"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-accentOne">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-accentOne">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-accentThree bg-transparent py-4 pl-6 pr-20 text-base/6 text-accentOne ring-4 ring-transparent transition placeholder:text-accentOne focus:border-accentOne focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            {/* <NewsletterForm /> */}
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link
            href="/"
            aria-label="Home"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <Logomark
              className="h-8 sm:hidden"
              filled={logoHovered}
            />
            <Logo
              className="hidden h-8 sm:flex"
              filled={logoHovered}
            />
          </Link>
          <p className="text-sm text-accentThree">
            © CodeCanvas Creations LLC. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
