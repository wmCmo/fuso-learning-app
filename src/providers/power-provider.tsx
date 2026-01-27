import { useEffect, type ReactNode } from "react";
import { initialize, getContext, type IContext } from "@microsoft/power-apps/app";

let contextPromise: Promise<IContext> | null = null;

export function ensurePowerAppsContext(): Promise<IContext> {
  if (contextPromise) return contextPromise;

  contextPromise = (async () => {
    await initialize();
    return await getContext();
  })();

  return contextPromise;
}

type PowerProviderProps = { children: ReactNode }

export function PowerProvider({ children }: PowerProviderProps) {
  useEffect(() => {
    ensurePowerAppsContext()
      .then(() => {
        console.log("Power Apps SDK initialized successfully");
      })
      .catch((error) => {
        console.error("Power Apps SDK initialize/getContext failed:", error);
      });
  }, []);

  return <>{children}</>;
}