import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme, coordinates?: { x: number; y: number }) => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: "system",
            setTheme: (theme: Theme, coordinates?: { x: number; y: number }) => {
                if (coordinates) {
                    document.documentElement.style.setProperty("--x", `${coordinates.x}%`);
                    document.documentElement.style.setProperty("--y", `${coordinates.y}%`);
                } else {
                    // Fallback au centre
                    document.documentElement.style.setProperty("--x", "50%");
                    document.documentElement.style.setProperty("--y", "50%");
                }

                // @ts-ignore - View Transitions API not in all browsers yet
                if (typeof document !== 'undefined' && 'startViewTransition' in document) {
                    (document as any).startViewTransition(() => {
                        set({ theme });
                    });
                } else {
                    set({ theme });
                }
            },
        }),
        {
            name: "theme-preference",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
