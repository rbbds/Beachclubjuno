interface WaveTransitionProps {
  fillColor: string;
  className?: string;
}

export function WaveTransition({ fillColor, className = '' }: WaveTransitionProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden ${className}`}>
      <svg 
        className="w-full h-[80px] md:h-[80px]"
        viewBox="0 0 1200 80" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'none' }}
      >
        <path 
          d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,80 L0,80 Z" 
          fill={fillColor}
          style={{ animation: 'none' }}
        />
      </svg>
    </div>
  );
}