import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="container relative mx-auto mt-32 flex w-full flex-col items-center justify-start gap-12 px-6 pb-8 text-center before:absolute before:inset-0 before:top-20 before:-z-10 before:bg-ellipse before:bg-top">
      <strong className="z-10 text-6xl font-bold leading-relaxed tracking-tight text-gray-100">
        Explorer
      </strong>

      <div className="flex w-full flex-col items-center justify-start gap-12 md:flex-row md:gap-0">
        <div className="w-full md:flex-1">
          <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide">
            Marketplace
          </h6>

          <ul className="mt-3 flex w-full flex-col items-center justify-start gap-3">
            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                All NFTs
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Customize
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Connect Wallet
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:flex-1">
          <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide">
            Company
          </h6>

          <ul className="mt-3 flex w-full flex-col items-center justify-start gap-3">
            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Help Center
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Term of Service
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:flex-1">
          <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide">
            Account
          </h6>

          <ul className="mt-3 flex w-full flex-col items-center justify-start gap-3">
            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                My Collection
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-base leading-snug tracking-wider opacity-80"
              >
                Create & Update
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-3">
        <h6 className="block w-full text-2xl font-semibold leading-relaxed tracking-wide">
          Subscribe to out Newsletter
        </h6>

        <div className="flex w-full items-center justify-center">
          <input
            type="text"
            placeholder="Enter"
            className="bg-transparent h-14 flex-1 rounded-bl rounded-tl border-2 border-blue-500 px-4"
          />

          <button className="flex h-14 w-28 items-center justify-center gap-4 rounded-br rounded-tr bg-blue-500 px-4 py-3 text-base font-semibold leading-relaxed tracking-wide">
            Send
          </button>
        </div>
      </div>
    </footer>
  )
}
