type Props = { className?: string; height?: string }

export default function PalmStrip({ className = "", height = "h-12" }: Props) {
  return (
    <div
      aria-hidden
      className={`palm-bg ${height} w-full ${className}`}
    />
  )
}
