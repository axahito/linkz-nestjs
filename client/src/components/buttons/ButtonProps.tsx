import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  children: ReactNode;
}
