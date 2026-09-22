export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Accent spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
        {/* Subtle pulse ring */}
        <div className="w-20 h-20 rounded-full border border-accent/10 animate-pulse absolute" />
      </div>
    </div>
  )
}
