import { useState } from 'react'
import { useNavigate } from 'react-router'
import { login } from '@/api/auth'

function LoginPage() {
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const payload = identifier.includes('@') ? { email: identifier, password } : { username: identifier, password }

      await login(payload)

      navigate('/')
    } catch (err: unknown) {
      setError('Login failed')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white/80 dark:bg-slate-900/80 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl !mb-4">Sign in to EffectiveSoft</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email or Username</label>
          <input
            className="w-full p-2 border rounded"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded hover:opacity-90 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
