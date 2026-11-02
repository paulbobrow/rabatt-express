type IconName =
  | "food"
  | "fashion"
  | "tech"
  | "travel"
  | "beauty"
  | "delivery"
  | "market"
  | "place"
  | "lunch";

type Props = {
  name: IconName;
  className?: string;
};

/** Clean line icons – MyDealz-ähnliche Kategorie-Piktogramme */
export function CategoryIcon({ name, className = "" }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `cat-icon ${className}`,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "food":
      return (
        <svg {...common}>
          <path d="M4 11h16v2a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-2z" />
          <path d="M8 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2" />
          <path d="M14 11V8a1.5 1.5 0 0 1 3 0v3" />
        </svg>
      );
    case "fashion":
      return (
        <svg {...common}>
          <path d="M9 4h6l2 4-3 1v11H10V9L7 8l2-4z" />
        </svg>
      );
    case "tech":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "travel":
      return (
        <svg {...common}>
          <path d="M10 21l1-7 8-3-8-3-1-7-2 7-8 3 8 3 2 7z" />
        </svg>
      );
    case "beauty":
      return (
        <svg {...common}>
          <path d="M12 3c2 3 5 5 5 9a5 5 0 1 1-10 0c0-4 3-6 5-9z" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "market":
      return (
        <svg {...common}>
          <path d="M4 8h16l-1 12H5L4 8z" />
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        </svg>
      );
    case "place":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "lunch":
      return (
        <svg {...common}>
          <path d="M4 10h16v1a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-1z" />
          <path d="M8 10V5M12 10V4M16 10V6" />
        </svg>
      );
    default:
      return null;
  }
}
