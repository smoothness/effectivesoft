const AUTH_BASE_URL = import.meta.env.VITE_AUTH_ENDPOINT

type AuthPayload = {
  email?: string
  username?: string
  password: string
  remember_me?: boolean
}

type AuthResponse = unknown

async function login(payload: AuthPayload, token?: string): Promise<AuthResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (token) headers.Authorization = token

  const res = await fetch(`${AUTH_BASE_URL}auth/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Login failed: ${res.status} ${errBody}`)
  }

  return res.json()
}

async function logout(payload: AuthPayload, token?: string): Promise<AuthResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (token) headers.Authorization = token

  const res = await fetch(`${AUTH_BASE_URL}auth/logout/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Logout failed: ${res.status} ${errBody}`)
  }

  return res.json()
}

export type { AuthPayload }
export { login, logout }
