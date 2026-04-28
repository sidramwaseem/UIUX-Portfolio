export type Tag =
  | "UX Design"
  | "Product Design"
  | "B2B"
  | "Marketing"
  | "Landing Page"
  | "Design System"
  | "Workflow"
  | "Research";

export interface CaseStudyImage {
  slot: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
  methods?: string[];
  imageSlots?: CaseStudyImage[];
}

export interface KeyDecision {
  question: string;
  options: string[];
  chosen: string;
  rationale: string;
}

export interface OutcomeMetric {
  value: string;
  label: string;
  context?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: Tag[];
  year: string;
  duration: string;
  role: string;
  client: string;
  readingTime: string;
  previewImage?: string;

  overview: string;
  overviewImages?: CaseStudyImage[];
  problem: {
    statement: string;
    context: string;
    userInsight?: string;
  };
  problemImages?: CaseStudyImage[];
  myRole: {
    description: string;
    responsibilities: string[];
  };
  constraints?: string[];
  constraintImages?: CaseStudyImage[];
  solutionOverview?: string;
  solutionImages?: CaseStudyImage[];
  process: ProcessStep[];
  keyDecisions: KeyDecision[];
  outcome: {
    summary: string;
    metrics?: OutcomeMetric[];
    reflection?: string;
  };
  outcomeImages?: CaseStudyImage[];
}
