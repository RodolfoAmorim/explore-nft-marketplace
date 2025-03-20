import { Login } from '@/pages/auth/login'
import { Home } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/explore-nft-marketplace" element={<Home />} />
      <Route path="/explore-nft-marketplace/login" element={<Login />} />
    </Routes>
  )
}
