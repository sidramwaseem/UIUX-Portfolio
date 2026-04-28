export type SurfaceCategory = "Social Media";

export type SurfaceAspect = "document" | "square" | "browser";

export interface Surface {
  id: string;
  title: string;
  description: string;
  category: SurfaceCategory;
  client: string;
  year: string;
  aspect: SurfaceAspect;
  gradient: string;
  src?: string;
  images?: string[];
  href?: string;
}

export const surfaces: Surface[] = [
  {
    id: "sm01",
    title: "Business Automation",
    description: "8-slide carousel exploring automation strategies for modern enterprises.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0f1923 0%, #1a2d4a 100%)",
    src: "/images/social-media/Business Automation Carousel/01.jpg",
    images: [
      "/images/social-media/Business Automation Carousel/01.jpg",
      "/images/social-media/Business Automation Carousel/02.jpg",
      "/images/social-media/Business Automation Carousel/1.jpg",
      "/images/social-media/Business Automation Carousel/2.jpg",
      "/images/social-media/Business Automation Carousel/3.jpg",
      "/images/social-media/Business Automation Carousel/4.jpg",
      "/images/social-media/Business Automation Carousel/5.jpg",
      "/images/social-media/Business Automation Carousel/6.jpg",
    ],
  },
  {
    id: "sm02",
    title: "Data & AI Infographics",
    description: "Thought leadership infographics on AI, data trends, and enterprise strategy.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0d1631 0%, #1e3a8a 100%)",
    src: "/images/social-media/Infographs/5 things AI leadership.jpg",
    images: [
      "/images/social-media/Infographs/5 things AI leadership.jpg",
      "/images/social-media/Infographs/6 Data Trends CEOs Can't Ignore.jpg",
      "/images/social-media/Infographs/Accelerate Scalable Growth  (1).jpg",
      "/images/social-media/Infographs/Accelerate Scalable Growth  (2).jpg",
      "/images/social-media/Infographs/Infograph Data Silos.jpg",
      "/images/social-media/Infographs/Predictive analysis.jpg",
      "/images/social-media/Infographs/Predictive Analysis 2.jpg",
      "/images/social-media/Infographs/Strengths.jpg",
    ],
  },
  {
    id: "sm03",
    title: "Life at E64",
    description: "Culture carousel showcasing team moments and company life.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #1a1008 0%, #3d2010 100%)",
    src: "/images/social-media/Life at E64/01.jpg",
    images: [
      "/images/social-media/Life at E64/01.jpg",
      "/images/social-media/Life at E64/02.jpg",
      "/images/social-media/Life at E64/03.jpg",
      "/images/social-media/Life at E64/04.jpg",
      "/images/social-media/Life at E64/05.jpg",
      "/images/social-media/Life at E64/6.jpg",
    ],
  },
  {
    id: "sm04",
    title: "Single Source of Truth",
    description: "6-slide carousel communicating the SSOT framework for enterprise data strategy.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0f1a0e 0%, #1a4a24 100%)",
    src: "/images/social-media/SSOT/01.jpg",
    images: [
      "/images/social-media/SSOT/01.jpg",
      "/images/social-media/SSOT/02.jpg",
      "/images/social-media/SSOT/03.jpg",
      "/images/social-media/SSOT/04.jpg",
      "/images/social-media/SSOT/05.jpg",
      "/images/social-media/SSOT/06.jpg",
    ],
  },
  {
    id: "sm05",
    title: "LinkedIn Campaign Series",
    description: "Multi-part visual series for LinkedIn engagement and thought leadership.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #1a1917 0%, #2D5BE3 100%)",
    src: "/images/social-media/JPEG/01.jpg",
    images: [
      "/images/social-media/JPEG/01.jpg",
      "/images/social-media/JPEG/02.jpg",
      "/images/social-media/JPEG/3.jpg",
      "/images/social-media/JPEG/4.jpg",
      "/images/social-media/JPEG/5.jpg",
      "/images/social-media/JPEG/6.jpg",
    ],
  },
  {
    id: "sm06",
    title: "Confident Humility",
    description: "Values carousel exploring the leadership principle of confident humility.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #1a0a20 0%, #4a1a6a 100%)",
    src: "/images/social-media/Confident Humility Carousel/Title.jpg",
    images: [
      "/images/social-media/Confident Humility Carousel/Title.jpg",
      "/images/social-media/Confident Humility Carousel/Title copy.jpg",
      "/images/social-media/Confident Humility Carousel/Sadia.jpg",
      "/images/social-media/Confident Humility Carousel/Usman Dawoodi.jpg",
    ],
  },
  {
    id: "sm07",
    title: "Growth at E64",
    description: "Team growth spotlight carousel featuring E64 members and their journeys.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0a1a10 0%, #1a4a30 100%)",
    src: "/images/social-media/Growth at E64/1. The E64 way of growing together.png",
    images: [
      "/images/social-media/Growth at E64/1. The E64 way of growing together.png",
      "/images/social-media/Growth at E64/2. Imran.png",
      "/images/social-media/Growth at E64/3. Ghazia.png",
      "/images/social-media/Growth at E64/4. Saeed.png",
    ],
  },
  {
    id: "sm08",
    title: "Analytical Problem-Solving",
    description: "3-slide carousel on structured analytical thinking for business challenges.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0d1631 0%, #2D5BE3 100%)",
    src: "/images/social-media/Analytical Problem carousel/Title copy.jpg",
    images: [
      "/images/social-media/Analytical Problem carousel/Title copy.jpg",
      "/images/social-media/Analytical Problem carousel/01 copy.jpg",
      "/images/social-media/Analytical Problem carousel/02 copy.jpg",
    ],
  },
  {
    id: "sm09",
    title: "All Hands",
    description: "Company all-hands event highlights.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #1a1410 0%, #3d2a1a 100%)",
    src: "/images/social-media/All Hands/Picture.png",
    images: [
      "/images/social-media/All Hands/Picture.png",
      "/images/social-media/All Hands/Picture-1.png",
    ],
  },
  {
    id: "sm10",
    title: "Blog Excerpts",
    description: "LinkedIn article excerpts designed for high engagement and readability.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #111110 0%, #2a2927 100%)",
    src: "/images/social-media/Blog Excerpts/Blog excerpt second.jpg",
    images: [
      "/images/social-media/Blog Excerpts/Blog excerpt second.jpg",
      "/images/social-media/Blog Excerpts/LinkedIn Blog - 3 .jpg",
    ],
  },
  {
    id: "sm11",
    title: "Strength of Team",
    description: "Standalone post celebrating team strength and collaboration.",
    category: "Social Media",
    client: "Enterprise64",
    year: "2024",
    aspect: "square",
    gradient: "linear-gradient(135deg, #0d1631 0%, #1e3a8a 100%)",
    src: "/images/social-media/Strength of Team.jpg",
  },
];

// btoa("sidrauiux") — do not store plain password
export const AUTH_HASH = "c2lkcmF1aXV4";
export const AUTH_STORAGE_KEY = "surfaces_v1";
