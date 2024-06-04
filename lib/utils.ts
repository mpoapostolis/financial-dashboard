import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uniqueByKeyFilter<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set<T[keyof T]>();
  return arr.filter((obj) => {
    const keyValue = obj[key];
    if (!seen.has(keyValue)) {
      seen.add(keyValue);
      return true;
    }
    return false;
  });
}
