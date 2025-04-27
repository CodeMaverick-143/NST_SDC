import type { FC } from "react"

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circuit board background */}
      <rect width="40" height="40" rx="6" className="fill-primary" />

      {/* Circuit lines */}
      <path
        d="M5 10H15M15 10V15M15 10H25M25 10V5M25 10H35M5 20H10M10 20V25M10 20H20M20 20V15M20 20H30M30 20V25M30 20H35M5 30H15M15 30V35M15 30H25M25 30V25M25 30H35"
        stroke="currentColor"
        className="stroke-primary-foreground/30"
        strokeWidth="1"
      />

      {/* Code brackets */}
      <path
        d="M12 8L6 16L12 24"
        stroke="currentColor"
        className="stroke-secondary"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8L34 16L28 24"
        stroke="currentColor"
        className="stroke-secondary"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Slash - representing coding */}
      <path
        d="M24 6L16 26"
        stroke="currentColor"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Binary dots */}
      <circle cx="8" cy="32" r="2" className="fill-primary-foreground/70" />
      <circle cx="16" cy="32" r="2" className="fill-secondary/70" />
      <circle cx="24" cy="32" r="2" className="fill-primary-foreground/70" />
      <circle cx="32" cy="32" r="2" className="fill-accent/70" />
    </svg>
  )
}

export default Logo
