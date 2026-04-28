import type { CaseStudy } from "./types";

const caseStudies: CaseStudy[] = [
  {
    slug: "cart-lifecycle-management",
    title: "Cart Lifecycle Management",
    subtitle:
      "Translating a physical warehouse workflow into a coordinated digital system for operations teams.",
    tags: ["UX Design", "B2B", "Workflow"],
    year: "2026",
    duration: "3 Months",
    role: "UI/UX Designer & UI Developer",
    client: "Confidential — B2B Warehouse Automation",
    readingTime: "~6 min read",

    overview:
      "I led the design of the Cart Lifecycle Module — a core component of a B2B warehouse automation platform used by operations teams to manage cart movement from induction to completion. The module enables users to track cart states, configure tote layouts, and coordinate actions across both admin and workstation interfaces. My focus was on structuring complex workflows, reducing operational friction, and ensuring reliable state transitions in real-time environments.",
    overviewImages: [
      {
        slot: "1.1",
        src: "/images/case-studies/cart-lifecycle/Hero%20Image.png",
        alt: "Cart Lifecycle Management admin dashboard showing cart induction, status counters, and cart management table on a laptop",
        caption: "Centralized lifecycle visibility across two interfaces — no manual status checks across the warehouse floor.",
      },
    ],

    problem: {
      statement:
        "The team had a document describing how carts move physically through a warehouse — but no digital interaction model to match it.",
      context:
        "When I joined the project, the documentation described the physical flow from induction to picking and completion. What it lacked was any definition of how this should work digitally. There was no clear answer to: how carts move through states in the system, which users control which actions, or how the system handles edge cases like incomplete carts or hardware failures. Without resolving these, building a reliable real-time system wasn't possible.",
      userInsight:
        "Most iterations were driven not by visual refinement — but by clarifying operational behavior and failure handling.",
    },
    problemImages: [],

    myRole: {
      description:
        "Led UX design and contributed to UI development for the Cart Lifecycle Module, working across Admin and Workstation interfaces with geographically distributed stakeholders.",
      responsibilities: [
        "Led UX design of the Cart Lifecycle Module — a core component of the warehouse automation platform",
        "Structured workflows and defined state transitions across Admin and Workstation interfaces",
        "Defined system behavior, validation logic, and edge-case handling",
        "Contributed to UI implementation alongside the development team",
      ],
    },

    constraints: [
      "Geographically separated from client and warehouse operations",
      "No direct access to physical hardware or end users",
      "Fixed installation timeline with no buffer",
      "Strict adherence to an existing design system",
    ],
    constraintImages: [],

    solutionOverview:
      "The first major design decision was structural. Instead of placing all actions inside one interface, I separated responsibilities across two coordinated surfaces — aligning each with real operational roles while keeping the cart lifecycle consistent across both.\n\nThe Admin Interface handles cart induction, editing, deletion, tote configuration, and lifecycle visibility. The Workstation Interface handles real-time picking, tote fulfillment, cart completion, and recovery.",
    solutionImages: [
      {
        slot: "3.1",
        src: "/images/case-studies/cart-lifecycle/Admin%20Interface.png",
        alt: "Admin Interface showing Cart Induction scan field, Cart Status counters, and Cart Management table",
        caption: "Admin Interface — cart induction, real-time status visibility, and full lifecycle management in one view.",
      },
      {
        slot: "3.2",
        src: "/images/case-studies/cart-lifecycle/Workstation%20Interface.png",
        alt: "Workstation Interface showing Operating Mode, Item Details, and Cart Rack tote grids with Remove Cart and Task Complete actions",
        caption: "Workstation Interface — real-time picking, tote fulfillment, and explicit cart completion controls.",
      },
    ],

    process: [
      {
        phase: "Defining the Cart Lifecycle",
        description:
          "Before any UI could be designed, the system needed a shared language. I mapped the physical workflow into six discrete digital states: Available → Inducting → Inducted → In Progress → Completed → Inactive, with a specific rule that only Completed carts can transition to Inactive. This state model became the foundation for all logic, validation, and interface behavior across both interfaces.",
        imageSlots: [
          {
            slot: "4.1",
            src: "/images/case-studies/cart-lifecycle/Cart%20Lifecycle.png",
            alt: "Cart lifecycle state diagram showing six states: Available, Inducting, Inducted, In Progress, Completed, and Inactive connected in a circular flow",
            caption: "Six discrete states gave the whole team a shared language before a single screen was built.",
          },
        ],
      },
      {
        phase: "Rethinking Cart Induction",
        description:
          "The first design used a modal-based \"Build New Cart\" flow. While technically correct, the button created unnecessary friction — induction was the most frequent task operators performed. Through client discussions and workflow reviews, we redesigned it: cart scanning became the first visible action, with the scan field auto-focused when the screen loaded. This turned induction into a scan-first workflow, matching how operators actually work.",
        imageSlots: [
          {
            slot: "5.1",
            src: "/images/case-studies/cart-lifecycle/Before%20auto-focused%20scan%20field.png",
            alt: "Admin interface in dark mode highlighting the 'Build New Cart' button as the only entry point for cart induction",
            caption: "Before — induction required clicking 'Build New Cart', opening a multi-step modal. Extra friction for the most frequent task.",
          },
          {
            slot: "5.2",
            src: "/images/case-studies/cart-lifecycle/Build%20New%20Cart%20Steps.png",
            alt: "Three-step Build New Cart modal flow: scan cart ID, select a tote position, then scan tote ID to complete induction",
            caption: "The original modal-based flow — three deliberate steps before a cart was inducted.",
          },
          {
            slot: "5.3",
            src: "/images/case-studies/cart-lifecycle/Cart%20Scanning%20Outside%20Modal.png",
            alt: "Admin interface with Cart Induction panel visible on the main page, scan field auto-focused and ready for input",
            caption: "After — induction moved to the main view with the scan field auto-focused on load. No modal, no extra step.",
          },
        ],
      },
      {
        phase: "Handling Dynamic Cart Layouts",
        description:
          "Carts in the warehouse are not uniform — different carts have different numbers of shelves and tote positions. A fixed UI grid wouldn't hold up in practice. We implemented dynamic tote grids generated from backend configuration, with a maximum of 8 columns × 5 rows. Each cart's layout mirrored its physical structure so operators could instantly map the screen to the real cart in front of them.",
        imageSlots: [
          {
            slot: "6.1",
            src: "/images/case-studies/cart-lifecycle/Handling%20Dynamic%20Cart%20Layouts.png",
            alt: "Three Induct Cart modal variations showing dynamic tote grid sizing: a 4-column grid, a single-column grid, and a full 8×5 grid",
            caption: "Three grid configurations — the same interface adapts to any cart hardware without design changes.",
          },
        ],
      },
      {
        phase: "Preventing Configuration Errors",
        description:
          "The initial Edit Cart experience allowed free modification with minimal system feedback. This introduced risk — incorrect configurations during induction could propagate downstream into picking operations. The interface lacked validation for invalid cart IDs, no indication of incorrect tote entries, and no restrictions on editing already-processed totes. We introduced inline safeguards: visual indicators for valid and invalid entries, and confirmation dialogs before clearing configurations.",
        imageSlots: [
          {
            slot: "7.1",
            src: "/images/case-studies/cart-lifecycle/Edit%20carts.png",
            alt: "Edit Cart modal before and after: original design with a greyed-out Update Cart button vs. improved design with active tote highlighted and inline scan field",
            caption: "Before — the Update Cart button was always greyed, giving no indication of whether changes were valid.",
          },
          {
            slot: "7.2",
            src: "/images/case-studies/cart-lifecycle/Edit%20Cart%20Design%20Improvements.png",
            alt: "Three Edit Cart states showing validation progression: neutral totes, a valid tote highlighted green, and an invalid tote flagged with a red scan field and disabled Done button",
            caption: "After — valid totes highlighted green, invalid entries flagged in red with the action button disabled until resolved.",
          },
          {
            slot: "7.3",
            src: "/images/case-studies/cart-lifecycle/Confirmation%20Dialogs.png",
            alt: "Two confirmation dialogs: 'Discard Changes?' warning users all entered data will be lost, and 'Clear All?' requiring an acknowledgement checkbox before proceeding",
            caption: "Confirmation dialogs with explicit acknowledgement guard against accidental data loss.",
          },
        ],
      },
      {
        phase: "Clarifying Completion Logic",
        description:
          "We initially explored automatic completion once all totes were filled. But operational discussions revealed that automation could create ambiguity during real warehouse runs — carts could be marked done before operators were ready, causing downstream errors that were expensive to reverse. We retained explicit controls: Remove Cart for emergency early removal (e.g. hardware failure), and Complete Cart for final confirmation. In high-stakes environments, control beats convenience.",
        imageSlots: [
          {
            slot: "8.1",
            src: "/images/case-studies/cart-lifecycle/initially%20explored%20automatic%20completion.png",
            alt: "Workstation screen from the initial auto-completion exploration showing both cart racks with Remove Cart buttons and no explicit complete action",
            caption: "The initial exploration — auto-completion looked clean, but operational discussions revealed the risk.",
          },
          {
            slot: "8.2",
            src: "/images/case-studies/cart-lifecycle/Remove%20Cart%20for%20early%20removal.png",
            alt: "Workstation screen highlighting the Remove Cart button on Cart Rack Left for emergency early cart removal",
            caption: "Remove Cart — available at any time for emergency removal due to hardware failure or mid-run issues.",
          },
          {
            slot: "8.3",
            src: "/images/case-studies/cart-lifecycle/Complete%20Cart%20for%20final%20confirmation.png",
            alt: "Workstation screen showing Cart Complete and Remove Cart buttons side by side for explicit operator-controlled completion",
            caption: "Cart Complete — explicit controls ensure operators decide when a cart is truly done.",
          },
          {
            slot: "8.4",
            src: "/images/case-studies/cart-lifecycle/When%20completed%2C%20user%20can%20scan%20another%20cart%20now..png",
            alt: "Workstation screen after cart completion showing a prompt to enter a new cart ID to continue operations",
            caption: "After completion — the interface immediately prompts for the next cart, keeping operators in motion.",
          },
        ],
      },
      {
        phase: "Simplifying Visual States",
        description:
          "Early designs relied on multiple color states to signal tote status. While visually expressive, it created confusion and conflicted with the design system. We simplified the hierarchy: subtle emphasis for active totes, green for completed totes, muted styling for inactive positions. One color, one meaning — this reduced cognitive load during high-speed picking.",
        imageSlots: [
          {
            slot: "9.1",
            src: "/images/case-studies/cart-lifecycle/Early%20designs%20relied%20on%20multiple%20color%20states%20to%20signal%20tote%20status..png",
            alt: "Workstation interface showing multiple competing color states across the tote grid — different colors for active, pending, and filled totes causing visual confusion",
            caption: "Before — multiple colors, multiple meanings. Hard to read under pressure.",
          },
          {
            slot: "9.2",
            src: "/images/case-studies/cart-lifecycle/simplified%20visual%20hierarchy.png",
            alt: "Workstation interface with simplified color hierarchy: green-highlighted totes for completed positions, muted styling for inactive slots",
            caption: "After — green for completed, muted for inactive, subtle for active. One color, one meaning.",
          },
        ],
      },
    ],

    keyDecisions: [
      {
        question: "How should cart induction begin?",
        options: [
          "Modal-based 'Build New Cart' flow — operator initiates setup before scanning",
          "Scan-first workflow — scanning is the first and only action on screen load",
        ],
        chosen: "Scan-first workflow",
        rationale:
          "Cart induction is the highest-frequency task on the warehouse floor. A modal flow required deliberate setup before any action could occur. Shifting to scan-first eliminated that friction — the scan field is auto-focused on load, keeping operators in motion and matching the physical habit of scanning barcodes they already had.",
      },
      {
        question: "Should cart layout be fixed or dynamically configurable?",
        options: [
          "Fixed grid layout — simpler to build, visually consistent",
          "Dynamic tote grid — generated from backend config, up to 8 × 5 per cart",
        ],
        chosen: "Dynamic tote grid",
        rationale:
          "Carts in the warehouse varied significantly in physical structure. A fixed grid would have forced operators to mentally reconcile mismatches between the screen and the actual cart in front of them. The interface needed to adapt to hardware reality, not the other way around.",
      },
      {
        question: "Should cart completion be automated or operator-controlled?",
        options: [
          "Automated — system marks cart done when all totes are filled",
          "Explicit controls — completion and removal require deliberate operator action",
        ],
        chosen: "Explicit operator controls",
        rationale:
          "Automation introduced real operational risk: a cart auto-completing while an operator wasn't ready could trigger downstream errors that were expensive to reverse. In a warehouse environment, the cost of a wrong completion is high. Giving operators deliberate control — Complete Cart and Remove Cart — was more trustworthy and aligned with how they think about their own workflow.",
      },
    ],

    outcome: {
      summary:
        "The Cart Lifecycle Module was successfully deployed within the client's installation timeline. The system delivered centralized lifecycle visibility across two interfaces, faster induction through a scan-first workflow, clearer real-time picking states through a simplified visual hierarchy, and safer completion and recovery handling with explicit operator controls.",
      reflection:
        "Many of the most important design decisions were not about layout — they were about defining how the system behaves under real operational conditions. In high-stakes warehouse environments, clarity and explicit control consistently outperform automation. The best interactions were the ones operators didn't have to think about — not because the system decided for them, but because the interface made the right action obvious.",
    },
    outcomeImages: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export { caseStudies };
