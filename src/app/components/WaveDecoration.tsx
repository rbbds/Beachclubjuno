import DefaultWave from '../../imports/Default-wave.svg';
import InvertedWave from '../../imports/Inverted-wave.svg';
import SpecialWave from '../../imports/Special-wave.svg';

interface WaveDecorationProps {
  variant?: 'default' | 'inverted' | 'special';
  className?: string;
}

export function WaveDecoration({ variant = 'special', className = '' }: WaveDecorationProps) {
  const WaveComponent = {
    default: DefaultWave,
    inverted: InvertedWave,
    special: SpecialWave,
  }[variant];

  return <img src={WaveComponent} alt="" className={className} />;
}
