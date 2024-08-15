import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const statusConfig = {
  active: {
    text: "Active",
    bgColor: "bg-green-200",
    textColor: "text-green-800",
  },
  executed: {
    text: "Executed",
    bgColor: "bg-blue-200",
    textColor: "text-blue-800",
  },
  rejected: {
    text: "Rejected",
    bgColor: "bg-red-200",
    textColor: "text-red-800",
  },
};
export type StatusType = keyof typeof statusConfig;