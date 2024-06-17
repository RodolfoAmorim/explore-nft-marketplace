import { AlignRight } from 'lucide-react'
import { Navbar } from '../navbar'
import { useState } from 'react'

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
    <header className="flex h-20 w-full items-center justify-between gap-2 px-6 before:absolute before:left-0 before:top-0 before:-z-10 before:h-40 before:w-52 before:bg-ellipse before:bg-[length:18.5rem_18.5rem] before:bg-right-bottom">
      <strong className="z-10 text-2xl font-bold leading-relaxed tracking-tight text-gray-100">
        Explorer
      </strong>

      <Navbar controlMenu={handleShowMobileMenu} showMenu={showMobileMenu} />

      <button
        className="relative z-10 block h-10 w-10 rounded-ssm after:absolute after:-inset-px after:-z-10 after:rounded-ssm after:bg-gradient"
        onClick={handleShowMobileMenu}
      >
        <span className="flex h-full w-full items-center justify-center rounded-ssm bg-gray-900">
          <AlignRight strokeWidth={1.25} />
        </span>
      </button>
    </header>
  )
}
