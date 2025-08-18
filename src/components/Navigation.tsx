import { NavLink } from 'react-router'

const activeStyle = {
  fontWeight: 'bold',
  backgroundColor: 'oklch(45.2% 0.211 324.591)',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
}
function Navigation() {
  const active = ({ isActive }: { isActive: boolean }) => (isActive ? activeStyle : {})

  return (
    <nav className="p-8">
      <ul className="flex">
        <li className="me-2">
          <NavLink to="/" style={active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" style={active}>
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
