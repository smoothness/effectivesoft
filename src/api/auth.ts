// const AUTH_BASE_URL = 'https://effectivesoftbe.vercel.app/'
// const AUTH_BASE_URL = 'http://localhost:3000/'
// const AUTH_BASE_URL = '/' // Use relative URL with Vite proxy

// Environment-based configuration
const AUTH_BASE_URL = import.meta.env.DEV
  ? '/' // Use proxy in development
  : 'https://effectivesoftbe.vercel.app' // Use production URL in build

type AuthPayload = {
  email?: string
  username?: string
  password: string
  remember_me?: boolean
}

type AuthResponse = unknown

async function login(payload: AuthPayload): Promise<AuthResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const res = await fetch(`${AUTH_BASE_URL}auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Login failed: ${res.status} ${errBody}`)
  }

  const data = await res.json()
  console.log('🚀 ~ login ~ data:', data)

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('auth_token', data?.access_token)
      try {
        // Notify the current window/tab that auth state changed
        window.dispatchEvent(new Event('auth-change'))
      } catch {
        // ignore
      }
    }
  } catch {
    // ignore storage errors
  }

  return data
}

async function logout(payload: AuthPayload): Promise<AuthResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const res = await fetch(`${AUTH_BASE_URL}auth/logout`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Logout failed: ${res.status} ${errBody}`)
  }

  const data = await res.json()

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('auth_token')
    }
  } catch {
    // ignore
  }

  return data
}

export type { AuthPayload }
export { login, logout }
