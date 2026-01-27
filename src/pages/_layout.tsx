import { Outlet, NavLink } from "react-router-dom"
import Logo from '@/assets/one-finance-logo.svg'
import { UserAvatar } from "@/components/user-avatar"

type LayoutProps = { showHeader?: boolean }

const menu = ["Home", "Learnings", "Mentoring", "My Profile"]

export default function Layout({ showHeader = true }: LayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      {showHeader && (
        <header className="h-24 border-b flex items-center">
          <img src={Logo} alt="One Finance logo" className="h-20" />
          <div className="mx-auto w-full max-w-7xl px-6 flex items-center justify-end gap-16">
            <nav className="flex items-center gap-8">
              {menu.map(item => {
                const processed = item.replace(" ", "-").toLocaleLowerCase()
                return (
                  <NavLink key={processed} to={processed === "home" ? "/" : processed} className={({ isActive }) => `text-sm hover:text-foreground ${isActive ? "text-foreground font-bold" : "text-muted-foreground"}`}>
                    {item}
                  </NavLink>
                )
              })}
            </nav>
            <UserAvatar />
          </div>
        </header>
      )}

      <main className="flex-1 flex">
        <div className="flex-1 mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}