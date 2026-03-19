import { WaveDecoration } from './WaveDecoration';

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  altText?: string;
  waveVariant?: 'default' | 'inverted' | 'special';
  height?: string;
}

export function PageHero({
  image,
  title,
  subtitle,
  altText,
  waveVariant = 'inverted',
  height = 'h-[50vh] min-h-[320px]',
}: PageHeroProps) {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${height}`}>
      {/* Background image */}
      <img
        src={image}
        alt={altText || title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-background uppercase font-display"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
          }}
        >
          {title}
        </h1>
        
        <WaveDecoration variant={waveVariant} className="w-24 h-3 mx-auto mb-5 mt-4" />
        
        {subtitle && (
          <p className="text-background/80 max-w-md mx-auto text-lg font-body">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}