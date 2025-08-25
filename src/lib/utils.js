import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ClassName = (...inputs) => {
  return twMerge(clsx(inputs));
};
