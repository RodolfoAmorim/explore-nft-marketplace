import { Logo } from '@/ui/components/logo'
import { Eye, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <main>
      <Logo />

      <h1>Login</h1>

      <form action="/">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter your email address..." />
        </div>

        <div>
          <label htmlFor="email">Password</label>
          <input type="text" placeholder="Enter your password..." />
          <button>
            <Eye />
          </button>
        </div>

        <div>
          <Link to="/">Forgot Password?</Link>
        </div>

        <button>Login</button>
      </form>

      <div>
        <span />
        <span>Or</span>
        <span />
      </div>

      <div>
        <button>
          <Wallet />
          Connect with Wallet
        </button>
      </div>
    </main>
  )
}
