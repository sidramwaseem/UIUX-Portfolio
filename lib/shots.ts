export type ShotCategory = "UI" | "Marketing" | "Branding" | "Typography" | "System";

export type ShotAspect = "landscape" | "portrait" | "square" | "wide";

export interface Shot {
  id: string;
  title: string;
  tags: string[];
  category: ShotCategory;
  aspect: ShotAspect;
  /**
   * CSS gradient string — replace with `src` once real images are available.
   * When `src` is set, `gradient` is used as the background-color fallback.
   */
  gradient: string;
  src?: string;
  href?: string;
}

export const shots: Shot[] = [
  {
    id: "01",
    title: "E-Commerce UI — Multi-Screen Layout",
    tags: ["UI", "E-Commerce", "Mobile"],
    category: "UI",
    aspect: "square",
    gradient: "#4fa3a5",
    src: "/images/Shots/Shots 1.png",
  },
  {
    id: "02",
    title: "Button Component Library",
    tags: ["UI", "Component", "System"],
    category: "System",
    aspect: "wide",
    gradient: "#f5f4e8",
    src: "/images/Shots/Shots 2.png",
  },
  {
    id: "03",
    title: "Status Filter — Dropdown Component",
    tags: ["UI", "Component", "Filter"],
    category: "UI",
    aspect: "portrait",
    gradient: "#f5c842",
    src: "/images/Shots/Shots 3.png",
  },
  {
    id: "04",
    title: "Authentication Screens — Sign Up & Log In",
    tags: ["UI", "Auth", "Forms"],
    category: "UI",
    aspect: "landscape",
    gradient: "#f5c842",
    src: "/images/Shots/Shots 4.png",
  },
];

export const ALL_CATEGORIES: ShotCategory[] = [
  "UI",
  "System",
];
