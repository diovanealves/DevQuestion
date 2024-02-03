import {
  Globe,
  LucideIcon,
  Settings,
  Smartphone,
  Terminal,
} from "lucide-react";

export interface mockCategory {
  id: number;
  name: "Front-End" | "Back-End" | "Mobile" | "DevOps";
  icon: LucideIcon;
}

export const mockCategories: mockCategory[] = [
  { id: 1, name: "Front-End", icon: Globe },
  { id: 2, name: "Back-End", icon: Terminal },
  { id: 3, name: "Mobile", icon: Smartphone },
  { id: 4, name: "DevOps", icon: Settings },
];
