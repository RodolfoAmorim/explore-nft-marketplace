import { X } from 'lucide-react'

interface NavbarItemProps {
  name: string
  link: string
  blank?: boolean
}

function NavbarItem({ name, link, blank = false }: NavbarItemProps) {
  return (
    <li className="">
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
      className="invisible fixed inset-0 z-40 flex -translate-y-3 items-center justify-center bg-gray-900 opacity-0 transition-all duration-500 data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100"
    >
      <button className="absolute right-6 top-6" onClick={controlMenu}>
        <X strokeWidth={1.5} />
      </button>

      <div className="flex w-full flex-col items-center justify-center gap-10">
        <ul className="flex w-full flex-col items-center justify-center gap-4">
          <NavbarItem link="/" name="Explore" />
          <NavbarItem link="/" name="Collection" />
          <NavbarItem link="/" name="Blog" />
          <NavbarItem link="/" name="Contacts" />
        </ul>

        <div>
          <button className="relative flex items-center justify-center rounded-ssm bg-gray-900 px-6 py-3 before:absolute before:-inset-px before:-z-10 before:rounded-sm before:bg-gradient">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
