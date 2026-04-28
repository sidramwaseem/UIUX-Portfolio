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
    title: "Workflow Builder — Empty State",
    tags: ["UI", "B2B", "Empty State"],
    category: "UI",
    aspect: "landscape",
    gradient: "linear-gradient(135deg, #0d1631 0%, #1a2d6b 60%, #2D5BE3 100%)",
  },
  {
    id: "02",
    title: "Dashboard Data Density Study",
    tags: ["UI", "Data Viz", "Dark Mode"],
    category: "System",
    aspect: "wide",
    gradient: "linear-gradient(160deg, #111110 0%, #1c1b1a 50%, #2a2927 100%)",
  },
  {
    id: "03",
    title: "SaaS Landing — Hero Section",
    tags: ["Marketing", "Landing Page"],
    category: "Marketing",
    aspect: "portrait",
    gradient: "linear-gradient(to bottom, #1a1917 0%, #3d2014 50%, #c4511a 100%)",
  },
  {
    id: "04",
    title: "Type Scale Exploration — Fraunces",
    tags: ["Typography", "Editorial"],
    category: "Typography",
    aspect: "square",
    gradient: "linear-gradient(135deg, #f5f4f0 0%, #e8e4dc 60%, #d9d7d2 100%)",
  },
  {
    id: "05",
    title: "Permission System — Role Matrix",
    tags: ["UI", "System Design", "Table"],
    category: "System",
    aspect: "landscape",
    gradient: "linear-gradient(135deg, #0f1a0e 0%, #14331a 50%, #1a5c29 100%)",
  },
  {
    id: "06",
    title: "Brand Mark Exploration",
    tags: ["Branding", "Logo"],
    category: "Branding",
    aspect: "square",
    gradient: "linear-gradient(135deg, #1a1917 0%, #2D5BE3 100%)",
  },
  {
    id: "07",
    title: "Whitepaper Layout — B2B Fintech",
    tags: ["Marketing", "Print", "Editorial"],
    category: "Marketing",
    aspect: "portrait",
    gradient: "linear-gradient(160deg, #f5f4f0 0%, #edecea 40%, #c5bfb5 100%)",
  },
  {
    id: "08",
    title: "Notification Center — State Map",
    tags: ["UI", "Component", "States"],
    category: "UI",
    aspect: "square",
    gradient: "linear-gradient(to bottom right, #1a1230 0%, #2d1b69 50%, #7c3aed 100%)",
  },
  {
    id: "09",
    title: "Social Media — Campaign System",
    tags: ["Marketing", "Social", "Templates"],
    category: "Marketing",
    aspect: "square",
    gradient: "linear-gradient(135deg, #2D5BE3 0%, #4D78F5 50%, #7ca3f8 100%)",
  },
  {
    id: "10",
    title: "Color Palette — Enterprise System",
    tags: ["System", "Color", "Tokens"],
    category: "System",
    aspect: "wide",
    gradient:
      "linear-gradient(to right, #1a1917 0%, #2D5BE3 25%, #7c3aed 50%, #c4511a 75%, #166534 100%)",
  },
  {
    id: "11",
    title: "Onboarding Checklist — Micro-copy",
    tags: ["UI", "Onboarding", "Copy"],
    category: "UI",
    aspect: "landscape",
    gradient: "linear-gradient(135deg, #0d1631 0%, #0f2352 50%, #1a3a7a 100%)",
  },
  {
    id: "12",
    title: "Wordmark — Variable Weight Study",
    tags: ["Typography", "Branding"],
    category: "Typography",
    aspect: "landscape",
    gradient: "linear-gradient(135deg, #1a1917 0%, #3d3830 100%)",
  },
];

export const ALL_CATEGORIES: ShotCategory[] = [
  "UI",
  "System",
  "Marketing",
  "Branding",
  "Typography",
];
