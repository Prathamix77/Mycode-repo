type ProgressCircleProps = {
  label: string
  value: number // 0–100
  size?: number // px (default 90)
}

export default function ProgressCircle({
  label,
  value,
  size = 90,
}: ProgressCircleProps) {
  const strokeWidth = size * 0.16
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2 tracking-tighter">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#4EAE50"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
        />
      </svg>

      <span className="text-sm text-gray-700">{label}</span>
    </div>
  )
}
