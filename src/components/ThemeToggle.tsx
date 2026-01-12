
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/theme-store";

export function ThemeToggle() {
    const { theme, setTheme } = useThemeStore();

    const toggleTheme = () => {
        let nextTheme: "light" | "dark";
        if (theme === "system") {
            const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            nextTheme = isSystemDark ? "light" : "dark";
        } else {
            nextTheme = theme === "dark" ? "light" : "dark";
        }

        // Animation depuis le centre
        setTheme(nextTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
        </button>
    );
}
