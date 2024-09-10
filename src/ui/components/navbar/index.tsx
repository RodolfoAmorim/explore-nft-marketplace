import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavbarItemProps {
  name: string
  link: string
  blank?: boolean
  active?: boolean
}

function NavbarItem({
  name,
  link,
  blank = false,
  active = false,
}: NavbarItemProps) {
  return (
    <li
      data-active={active}
      className="data-[active='true']:text-gray-100 xl:text-lg xl:font-normal xl:leading-normal xl:tracking-widest xl:text-gray-400"
    >
      <a href={link} target={blank ? '_blank' : ''} rel="noreferrer">
        {name}
      </a>
    </li>
  )
}

interface NavbarProps {
  showMenu: boolean
  controlMenu: () => void
}

export function Navbar({ controlMenu, showMenu }: NavbarProps) {
  return (
    <nav
      data-open={showMenu}
      className="invisible fixed inset-0 z-40 flex -translate-y-3 items-center justify-center bg-gray-900 opacity-0 transition-all duration-500 data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100 xl:visible xl:relative xl:flex-1 xl:translate-y-0 xl:bg-transparent xl:opacity-100"
    >
      <button
        className="absolute right-6 top-6 xl:hidden"
        onClick={controlMenu}
      >
        <X strokeWidth={1.5} />
      </button>

      <div className="flex w-full flex-col items-center justify-center gap-10 xl:flex-row xl:justify-between">
        <ul className="flex w-full flex-col items-center justify-center gap-4 xl:w-auto xl:flex-1 xl:flex-row xl:gap-12">
          <NavbarItem link="/" name="Home" active />
          <NavbarItem link="/" name="Explore" />
          <NavbarItem link="/" name="Collection" />
          <NavbarItem link="/" name="Blog" />
          <NavbarItem link="/" name="Contacts" />
        </ul>

        <Link to="/login">
          <button className="relative flex items-center justify-center rounded-ssm bg-gray-900 px-6 py-3 before:absolute before:-inset-px before:-z-10 before:rounded-sm before:bg-gradient xl:bg-gradient">
            Connect Wallet
          </button>
        </Link>
      </div>
    </nav>
  )
}
