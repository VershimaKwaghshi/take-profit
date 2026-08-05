type Props = {
  className?: string;
  tone?: "ink" | "paper";
  showLabel?: boolean;
};

export default function FloorMotif({
  className = "",
  tone = "ink",
  showLabel = true,
}: Props) {
  const curveColor = tone === "ink" ? "#14151a" : "#f6f5f3";
  const floorColor = "#7a2620";
  const labelColor = tone === "ink" ? "#6b6b6e" : "#c9c8c4";

  return (
    <svg
      viewBox="0 0 1000 240"
      fill="none"
      className={`floor-motif w-full ${className}`}
      aria-hidden="true"
    >
      <line
        x1="40"
        y1="190"
        x2="960"
        y2="190"
        stroke={floorColor}
        strokeWidth="1.5"
        strokeDasharray="6 8"
        opacity="0.55"
      />

      <path
        className="curve"
        d="M40,66 C160,54 224,150 342,176 C420,193 470,193 528,176 C648,148 706,58 960,42"
        stroke={curveColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {showLabel && (
        <text
          x="960"
          y="212"
          textAnchor="end"
          fontSize="13"
          fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.12em"
          fill={labelColor}
        >
          PROTECTED FLOOR
        </text>
      )}
    </svg>
  );
}
