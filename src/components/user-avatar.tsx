import { useEffect, useMemo, useState } from "react"
import { ensurePowerAppsContext } from "@/providers/power-provider"

type UserAvatarProps = {
  className?: string
  size?: number
}

function getInitials(name: string | undefined) {
  const trimmed = name?.trim()
  if (!trimmed) return "?"

  const parts = trimmed.split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? "?"
  const last = parts.length > 1 ? parts[1]?.[0] : ""
  return (first + last).toUpperCase()
}

// If the Office 365 Users connector has been added via PAC CLI, codegen will create:
// src/generated/services/Office365UsersService.ts
// We load it optionally (no build-time dependency) so the app still runs without it.
const office365UsersServiceImporters = import.meta.glob(
  "../generated/services/Office365UsersService.{ts,tsx,js,jsx}",
  { eager: false }
)

async function tryLoadOffice365UsersService(): Promise<any | null> {
  const importer = Object.values(office365UsersServiceImporters)[0]
  if (!importer) return null

  const mod = (await importer()) as any
  return mod?.Office365UsersService ?? null
}

export function UserAvatar({ className, size = 36 }: UserAvatarProps) {
  const [displayName, setDisplayName] = useState<string | undefined>(undefined)
  const [photoSrc, setPhotoSrc] = useState<string | null>(null)

  const initials = useMemo(() => getInitials(displayName), [displayName])

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      try {
        const ctx = await ensurePowerAppsContext()
        if (cancelled) return

        const name = ctx.user.fullName ?? ctx.user.userPrincipalName
        setDisplayName(name)

        const Office365UsersService = await tryLoadOffice365UsersService()
        if (!Office365UsersService) return

        const profileResp = (await (Office365UsersService.MyProfile_V2
          ? Office365UsersService.MyProfile_V2(
            "id,displayName,jobTitle,id,userPrincipalName"
          )
          : Office365UsersService.MyProfile?.())) as any

        const profile = profileResp?.data ?? profileResp
        const idOrUpn =
          profile?.id ??
          profile?.userPrincipalName ??
          ctx.user.userPrincipalName ??
          undefined

        if (!idOrUpn) return

        const getPhotoFn =
          Office365UsersService.UserPhoto_V2 ?? Office365UsersService.UserPhoto

        if (!getPhotoFn) return

        let photoData: string | null = null
        try {
          photoData = (await getPhotoFn(idOrUpn))?.data
        } catch {
          // Some tenants require UPN rather than GUID (or vice versa).
          if (profile?.userPrincipalName && profile.userPrincipalName !== idOrUpn) {
            photoData = (await getPhotoFn(profile.userPrincipalName))?.data
          }
        }

        if (cancelled) return

        if (photoData) {
          setPhotoSrc(`data:image/jpeg;base64,${photoData}`)
        }
      } catch {
        // Not running inside Power Apps host (or init failed). Fall back to initials.
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [])

  if (photoSrc) {
    return (
      <img
        src={photoSrc}
        alt={displayName ? `${displayName} avatar` : "User avatar"}
        className={
          "rounded-full object-cover border border-border shrink-0 " +
          (className ?? "")
        }
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div
      className={
        "rounded-full bg-muted text-muted-foreground border border-border grid place-items-center font-medium shrink-0 " +
        (className ?? "")
      }
      style={{ width: size, height: size, fontSize: Math.max(12, size * 0.35) }}
      aria-label={displayName ? `${displayName} avatar` : "User avatar"}
      title={displayName}
    >
      {initials}
    </div>
  )
}
