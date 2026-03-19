import { WaveDecoration } from './WaveDecoration';
import { JunoButton } from './JunoButton';

interface EventManagerContactProps {
  name: string;
  role: string;
  photo: string;
  intro: string;
  phone: string;
  email: string;
  bgColor?: 'cream' | 'sage';
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
  const bgClass = bgColor === 'cream' ? 'bg-background' : 'bg-secondary/20';

  return (
    <section className={`py-20 px-6 font-body ${bgClass}`}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="font-display text-accent text-lg tracking-wide mb-2">
            LET'S TALK
          </div>
          <h2
            className="font-display text-primary mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              lineHeight: '1',
            }}
          >
            {name.toUpperCase()}
          </h2>
          <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
          <p className="text-primary text-lg leading-relaxed mb-8">
            {intro}
          </p>
          <div className="flex gap-4">
            <JunoButton variant="secondary" href={`tel:${phone}`}>
              Bel ons
            </JunoButton>
            <JunoButton variant="outline-dark" href={`mailto:${email}`}>
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
