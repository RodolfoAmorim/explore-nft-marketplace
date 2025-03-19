import { Link } from 'react-router-dom'
import { Logo } from '../logo'

const footerLinks = [
  {
    name: 'Marketplace',
    links: [
      {
        name: 'All NFTs',
        link: '/',
      },
      {
        name: 'Customize',
        link: '/',
      },
      {
        name: 'Connect Wallet',
        link: '/',
      },
    ],
  },
  {
    name: 'Company',
    links: [
      {
        name: 'Help Center',
        link: '/',
      },
      {
        name: 'Terms of Service',
        link: '/',
      },
      {
        name: 'Privacy Policy',
        link: '/',
      },
    ],
  },
  {
    name: 'Account',
    links: [
      {
        name: 'Profile',
        link: '/',
      },
      {
        name: 'My Connection',
        link: '/',
      },
      {
        name: 'Create & Update',
        link: '/',
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="container relative mx-auto mt-32 flex w-full flex-col items-center justify-start gap-12 px-6 pb-8 text-center before:absolute before:inset-0 before:top-20 before:-z-10 before:bg-ellipse before:bg-top lg:flex-row lg:flex-wrap lg:justify-center xl:mt-48 xl:flex-row">
      <Logo className="z-10 text-6xl font-bold leading-relaxed tracking-tight text-gray-100 lg:w-full xl:w-auto" />

      <div className="flex w-full flex-col items-center justify-start gap-12 md:flex-row md:gap-0 xl:w-auto xl:flex-1">
        {footerLinks.map((link, i) => (
          <div key={i} className="w-full md:flex-1">
            <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide xl:text-left xl:text-2xl">
              {link.name}
            </h6>

            <ul className="mt-3 flex w-full flex-col items-center justify-start gap-3 xl:items-start">
              {link.links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.link}
                    className="text-base leading-snug tracking-wider opacity-80 transition-colors hover:opacity-100"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-3 lg:max-w-96">
        <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide xl:text-left xl:text-2xl">
          Subscribe to out Newsletter
        </h6>

        <div className="flex w-full items-center justify-center">
          <input
            type="email"
            placeholder="Enter"
            className="h-14 flex-1 rounded-bl rounded-tl border-2 border-blue-500 bg-transparent px-4 outline-none focus:border-blue-300"
          />

          <button className="flex h-14 w-28 items-center justify-center gap-4 rounded-br rounded-tr bg-blue-500 px-4 py-3 text-base font-semibold leading-relaxed tracking-wide transition-colors hover:bg-blue-300">
            Send
          </button>
        </div>
      </div>
    </footer>
  )
}
