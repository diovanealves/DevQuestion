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
  description: string;
  icon: LucideIcon;
}

export const mockCategories: mockCategory[] = [
  {
    id: 1,
    name: "Front-End",
    description: "Perguntas sobre o desenvolvimento Front-End",
    icon: Globe,
  },
  {
    id: 2,
    name: "Back-End",
    description: "Perguntas sobre o desenvolvimento Back-End",
    icon: Terminal,
  },
  {
    id: 3,
    name: "Mobile",
    description: "Perguntas sobre o desenvolvimento Mobile",
    icon: Smartphone,
  },
  {
    id: 4,
    name: "DevOps",
    description: "Perguntas sobre DevOps and CI/CD",
    icon: Settings,
  },
];
