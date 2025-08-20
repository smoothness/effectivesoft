import { NavLink, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { logout as apiLogout } from '@/api/auth'

const activeStyle = {
  fontWeight: 'bold',
  backgroundColor: 'oklch(45.2% 0.211 324.591)',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
}
function Navigation() {
  const active = ({ isActive }: { isActive: boolean }) => (isActive ? activeStyle : {})
  const [authenticated, setAuthenticated] = useState<boolean>(
    () => typeof window !== 'undefined' && !!localStorage.getItem('auth_token')
  )
  const navigate = useNavigate()

  useEffect(() => {
    function onStorage() {
      setAuthenticated(!!localStorage.getItem('auth_token'))
    }

    // storage event fires across tabs; auth-change covers same-tab updates
    window.addEventListener('storage', onStorage)

    function onAuthChange() {
      setAuthenticated(!!localStorage.getItem('auth_token'))
    }

    window.addEventListener('auth-change', onAuthChange)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('auth-change', onAuthChange)
    }
  }, [])

  async function handleLogout() {
    try {
      await apiLogout({ password: '' })
    } catch {
      //:TODO
    }

    try {
      localStorage.removeItem('auth_token')
    } catch {
      //:TODO
    }

    setAuthenticated(false)
    navigate('/login')
  }

  return (
    <nav className="p-8">
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to="/" style={active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" style={active}>
            Planets
          </NavLink>
        </li>

        {!authenticated && (
          <li>
            <NavLink to="/login" style={active}>
              Login
            </NavLink>
          </li>
        )}

        {authenticated && (
          <li>
            <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
