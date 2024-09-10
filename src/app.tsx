import { BrowserRouter } from 'react-router-dom'
import { Router } from './app/router/router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
