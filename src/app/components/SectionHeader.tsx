import { WaveDecoration } from './WaveDecoration';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  waveVariant?: 'default' | 'inverted' | 'special';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  waveVariant = 'special',
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2
        className="uppercase tracking-wide font-display"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          lineHeight: '1',
        }}
      >
        {title}
      </h2>
      
      <WaveDecoration
        variant={waveVariant}
        className={`w-24 h-3 mt-3 mb-5 ${align === 'center' ? 'mx-auto' : ''}`}
      />
      
      {subtitle && (
        <p className={`text-lg max-w-2xl font-body mb-8 opacity-80 ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}