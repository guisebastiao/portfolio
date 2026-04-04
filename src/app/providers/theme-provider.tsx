import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
  useCallback,
  useRef,
} from "react";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const THEME_STORAGE_KEY = "theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeContext = createContext<ThemeState>({} as ThemeState);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      applyTheme();
      return;
    }

    if (!document.startViewTransition) {
      applyTheme();
      return;
    }

    document.startViewTransition(applyTheme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
