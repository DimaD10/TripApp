import { ReactNode } from "react";

export type FancyboxProps = {
  children: ReactNode;
  delegate?: string;
  options?: Record<string, any>;
}