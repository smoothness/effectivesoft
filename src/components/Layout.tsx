import { Outlet } from 'react-router'

import Navigation from '@/components/Navigation'

function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]" dir="ltr">
      <header className="flex justify-between items-center [@media(max-width:1440px)]:px-10">
        <h1 className="[@media(max-width:700px)]:!text-4xl">EffectiveSoft 🌃</h1>
        <Navigation />
      </header>
      <main className="py-8 [@media(max-width:1440px)]:px-10">
        <Outlet />
      </main>
      <footer className="p-8 text-center">
        <p>&copy; {new Date().getFullYear()} EffectiveSoft All rights reserved 🚀</p>
      </footer>
    </div>
  )
}

export default Layout
