import { WaveDecoration } from './WaveDecoration';
import { JunoButton } from './JunoButton';

interface EventManagerContactProps {
  name: string;
  role: string;
  photo: string;
  intro: string;
  phone: string;
  email: string;
  bgColor?: 'cream' | 'sage' | 'navy';
}

export function EventManagerContact({
  name,
  role,
  photo,
  intro,
  phone,
  email,
  bgColor = 'cream',
}: EventManagerContactProps) {
  const bgClass = bgColor === 'cream' ? 'bg-background' : bgColor === 'sage' ? 'bg-primary' : 'bg-primary';
  const textClass = bgColor === 'cream' ? 'text-primary' : 'text-background';
  const waveVariant = bgColor === 'cream' ? 'special' : 'inverted';
  const buttonOutlineVariant = bgColor === 'cream' ? 'outline-dark' : 'outline-light';

  return (
    <section className={`py-28 px-6 font-body ${bgClass}`}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="font-display text-accent text-lg tracking-wide mb-2">
            LET'S TALK
          </div>
          <h2
            className={`font-display ${textClass} mb-4`}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              lineHeight: '1',
            }}
          >
            {name.toUpperCase()}
          </h2>
          <WaveDecoration variant={waveVariant} className="w-20 h-3 mb-6" />
          <p className={`${textClass} text-lg leading-relaxed mb-8`}>
            {intro}
          </p>
          <div className="flex gap-4">
            <JunoButton variant="secondary" href={`tel:${phone}`}>
              Bel ons
            </JunoButton>
            <JunoButton variant={buttonOutlineVariant} href={`mailto:${email}`}>
              Stuur een mail
            </JunoButton>
          </div>
        </div>

        {/* Right column */}
        <div>
          <img
            src={photo}
            alt={name}
            className="w-full h-[400px] object-cover object-top rounded-xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}