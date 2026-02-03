# Power Apps Template - starter

An opinionated **Vite + TypeScript + React** starter template for building Power Apps code apps.

Designed for common app scenarios, easy extensibility, and minimal setup.

---

## Highlights

- **⚡ Modern tooling** - Vite, Typescript, and React
- **🎨 Out-of-box styling** - Tailwind, shadcn/ui components, and theming out of the box
- **🔋 Batteries included** - Curated libraries pre-wired for common scenarios
- **✅ Standard patterns** - Industry standard patterns and practices
- **🤖 Agent friendly** - Optimized for use with coding agents

---

## 🗂 Pre-installed libraries

- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - pre-installed UI components
- [Lucide](https://lucide.dev/) - beautiful and consistent icons
- [React Router](https://reactrouter.com/) - pages, routing
- [Tanstack Query](https://tanstack.com/query/docs) - data fetching, state management
- [Tanstack Table](https://tanstack.com/query/docs) - interactive tables, datagrids

---

## Local dev (Power Apps Code App)

This repo is intended to run as a **Power Apps Code App** (preview). The Power Platform CLI (PAC) manages:

- Initializing the app workspace (creates `power.config.json`)
- Adding connector-backed data sources (generates `src/generated/**`)
- Producing a **Local Play** URL that runs your local app inside the Power Apps host

### 1) Authenticate + select environment

```powershell
pac auth create
pac env select --environment <environmentId>
```

### 2) Initialize the code app workspace

```powershell
pac code init -n "learning-app" -env <environmentId>
```

Notes:

- If you see “Config file already exists”, `power.config.json` already exists (delete it only if you intentionally want to re-init for a different app).

### 3) Add Office 365 Users connector (for avatars)

1. In [Power Apps](https://make.powerapps.com) create (or reuse) an **Office 365 Users** connection.
2. Find its connection id:

    ```powershell
    pac connection list
    ```

3. Add it as a data source (this generates typed services under `src/generated/`):

```powershell
pac code add-data-source -a "shared_office365users" -c "<connectionId>"
```

Expected generated files:

- `src/generated/services/Office365UsersService.ts`
- `src/generated/models/Office365UsersModel.ts`

### 4) Run locally and open “Local Play”

```powershell
npm install
npm run dev
```

The dev server prints a **Power Apps Local Play** URL. Open it in the same browser profile you use for your Power Apps tenant.

### Office 365 avatar UI

- The header avatar is rendered by `UserAvatar` (see `src/components/user-avatar.tsx`).
- It uses Power Apps user context plus the generated `Office365UsersService` to fetch the signed-in user’s photo, and falls back to initials if unavailable.

### Todo

- [ ] After expanding the category, show the label of some courses with multiple links
