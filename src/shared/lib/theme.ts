export const themes = {
  light: "light",
  dark: "dark",
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export const THEME_COOKIE_KEY = "app_theme";
export const DEFAULT_THEME = themes.light;

export const isTheme = (value: string | undefined | null): value is Theme => {
  return typeof value === "string" && Object.values(themes).includes(value as Theme);
};
