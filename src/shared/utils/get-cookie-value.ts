import { cookies } from "next/headers";

type CookieOptions<T extends string> = {
  key: string;
  fallback: T;
  isValid: (value: string | undefined) => value is T;
};

export const getCookieValue = async <T extends string>({
  key,
  fallback,
  isValid,
}: CookieOptions<T>): Promise<T> => {
  const cookieStore = await cookies();
  const value = cookieStore.get(key)?.value;
  return isValid(value) ? value : fallback;
};
