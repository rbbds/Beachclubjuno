interface WaveDecorationProps {
  className?: string;
}

export function WaveDecoration({ className = "" }: WaveDecorationProps) {
  return (
    <svg 
      viewBox="0 0 200 20" 
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
