import React, { useEffect } from "react";
import { useThemeStore } from "../store/theme-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeStore();

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    useEffect(() => {
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            const root = document.documentElement;
            if (theme === "system") {
                root.classList.remove("light", "dark");
                root.classList.add(mediaQuery.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    return <>{children}</>;
}
