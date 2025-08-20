import { Navigate } from 'react-router'

type Props = {
  children: React.ReactElement
}

function ProtectedRoute({ children }: Props) {
  // Simple client-side guard: check for an auth token in localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
