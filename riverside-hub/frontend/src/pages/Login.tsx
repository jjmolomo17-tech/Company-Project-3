import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else window.location.href = '/dashboard'
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-4">
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
