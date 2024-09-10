import { AlignRight } from 'lucide-react'
import { Navbar } from '../navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../logo'

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)

    if (!showMobileMenu) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  return (
    <header className="container mx-auto flex h-20 w-full items-center justify-between gap-2 px-6 before:absolute before:left-0 before:top-0 before:-z-10 before:h-40 before:w-52 before:bg-ellipse before:bg-[length:18.5rem_18.5rem] before:bg-right-bottom before:bg-no-repeat lg:px-8 xl:h-32 xl:bg-cover xl:before:h-[460px] xl:before:w-[460px] xl:before:bg-[length:200%] xl:before:bg-right-bottom">
      <Link to="/">
        <Logo />
      </Link>

      <Navbar controlMenu={handleShowMobileMenu} showMenu={showMobileMenu} />

      <button
        className="relative z-10 block h-10 w-10 rounded-ssm after:absolute after:-inset-px after:-z-10 after:rounded-ssm after:bg-gradient xl:hidden"
        onClick={handleShowMobileMenu}
      >
        <span className="flex h-full w-full items-center justify-center rounded-ssm bg-gray-900">
          <AlignRight strokeWidth={1.25} />
        </span>
      </button>
    </header>
  )
}
