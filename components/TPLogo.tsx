// components/TPLogo.tsx
export default function TPLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * (150 / 220)}
      viewBox="0 0 220 150"
      role="img"
      aria-labelledby="tp-logo-title tp-logo-desc"
    >
      <title id="tp-logo-title">TP Balance Leverage monochrome balance logo</title>
      <desc id="tp-logo-desc">
        A black balance beam rising toward the right with a small left sphere,
        a large right sphere, and a central triangular fulcrum.
      </desc>
      <g fill="#000000">
        <path d="M18 92 L199 52 Q207 50 210 57 Q212 64 204 67 L24 108 Q16 109 13 102 Q11 95 18 92 Z" />
        <path d="M104 91 L80 135 Q77 141 84 143 L135 143 Q142 142 139 135 Z" />
        <circle cx="31" cy="85" r="12" />
        <circle cx="174" cy="39" r="27" />
      </g>
    </svg>
  );
}
