import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { JunoButton } from '../components/JunoButton';
import { Users, Coffee, Lightbulb, Quote } from 'lucide-react';
import { images } from '../data/images';

export function Bedrijfsfeesten() {
  useEffect(() => {
    document.title = 'Zakelijke evenementen aan zee | Beachclub Juno Kijkduin';
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const formats = [
    {
      icon: Users,
      title: 'Teambuilding op het strand',
      description: 'Halfdag buiten met activiteiten die uw team dichter bij elkaar brengen. Van beachvolleybal tot culinaire workshops — allemaal met catering inbegrepen.',
      price: 'Vanaf €45 p.p.',
    },
    {
      icon: Coffee,
      title: 'Vergaderen met uitzicht',
      description: 'Dagarrangement inclusief vergaderruimte met zeezicht, professionele AV-faciliteiten, koffie/thee den gehele dag en een verzorgde lunch.',
      price: 'Vanaf €65 p.p.',
    },
    {
      icon: Lightbulb,
      title: 'Bedrijfsfeest',
      description: 'Avondprogramma met uitgebreid diner, welkomstdrankjes en entertainment naar keuze. Van live muziek tot DJ — wij regelen het allemaal.',
      price: 'Vanaf €85 p.p.',
    },
  ];

  const steps = [
    { number: 1, title: 'Vrijblijvend gesprek', description: 'We luisteren naar uw wensen en behoeften' },
    { number: 2, title: 'Offerte op maat', description: 'Een voorstel dat perfect bij u past' },
    { number: 3, title: 'Persoonlijke begeleiding', description: 'Van planning tot uitvoering aan uw zijde' },
    { number: 4, title: 'Onvergetelijke dag', description: 'Uw evenement, perfect verzorgd' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <PageHero
        image={images.bedrijfsfeesten.hero}
        title="ZAKELIJK AAN ZEE"
        subtitle="Vergaderen, vieren of teambuilding — altijd met uitzicht."
        waveVariant="inverted"
        height="h-screen"
      />

      {/* Intro */}
      <section className="py-20 px-6 font-body">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-lg leading-relaxed mb-6">
              Juno is de perfecte locatie voor bedrijven die iets bijzonders zoeken. Of het nu gaat 
              om een productlancering, een teamuitje of een eindejaarsfeest — wij zorgen voor een 
              onvergetelijke dag.
            </p>
            <p className="text-primary text-lg leading-relaxed">
              Met de Noordzee als inspirerende achtergrond, professionele faciliteiten en een team 
              dat tot in de puntjes voor u zorgt, wordt elk zakelijk evenement een succes.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={images.bedrijfsfeesten.team}
              alt="Teambuilding op het strand bij Beachclub Juno Kijkduin"
              className="w-full h-[500px] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Drie smaken */}
      <section className="py-20 px-6 bg-secondary/10 font-body">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            title="DRIE SMAKEN"
            subtitle="Van inspirerende teambuilding tot formele vergaderingen — kies wat bij u past"
            waveVariant="special"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <button 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left w-full hover:scale-105 duration-300"
              >
                <format.icon className="w-12 h-12 text-primary mb-4" />
                <h3 
                  className="text-primary mb-3 tracking-wide font-display"
                  style={{ 
                    fontSize: '1.75rem',
                    lineHeight: '1.2'
                  }}
                >
                  {format.title}
                </h3>
                <p className="text-primary leading-relaxed mb-4">
                  {format.description}
                </p>
                <p className="text-accent font-medium text-lg">
                  {format.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 px-6 font-body">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="HOE HET WERKT" waveVariant="special" />

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Wave connection line */}
            <div className="absolute top-12 left-0 right-0 h-1 flex items-center">
              <WaveDecoration className="w-full h-8 text-secondary" />
            </div>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="bg-primary text-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md font-display"
                    style={{ 
                      fontSize: '1.5rem'
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 
                    className="text-primary mb-2 tracking-wide font-display"
                    style={{ 
                      fontSize: '1.25rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-primary text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="bg-primary text-background w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display"
                  style={{ 
                    fontSize: '1.25rem'
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 
                    className="text-primary mb-1 tracking-wide font-display"
                    style={{ 
                      fontSize: '1.25rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-primary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktisch */}
      <section className="py-20 px-6 bg-secondary/10 font-body">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="PRAKTISCHE INFORMATIE" waveVariant="special" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capaciteit & Beschikbaarheid */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 
                className="text-primary mb-4 tracking-wide font-display"
                style={{ 
                  fontSize: '1.75rem'
                }}
              >
                CAPACITEIT & BESCHIKBAARHEID
              </h3>
              <ul className="space-y-3 text-primary text-lg">
                <li><strong>Capaciteit:</strong> 10 tot 200 personen</li>
                <li><strong>Beschikbaar:</strong> Het hele jaar door</li>
                <li><strong>Vergaderzalen:</strong> 2 aparte ruimtes beschikbaar</li>
                <li><strong>Flexibele opstellingen:</strong> Theater, U-vorm, cabaret</li>
              </ul>
            </div>

            {/* Faciliteiten */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 
                className="text-primary mb-4 tracking-wide font-display"
                style={{ 
                  fontSize: '1.75rem'
                }}
              >
                FACILITEITEN
              </h3>
              <ul className="space-y-3 text-primary text-lg">
                <li>✓ Gratis parkeren op eigen terrein</li>
                <li>✓ Professionele AV-apparatuur (beamer, geluid, microfoons)</li>
                <li>✓ Hoogwaardige catering & drankenpakketten</li>
                <li>✓ Buitenruimte voor teambuilding activiteiten</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-primary font-body">
        <div className="max-w-[900px] mx-auto text-center">
          <Quote className="w-16 h-16 text-accent mx-auto mb-6" />
          <blockquote className="text-background text-2xl md:text-3xl leading-relaxed mb-8">
            "Ons team had een fantastische dag bij Juno. De locatie, het eten en de service 
            waren subliem. Een aanrader voor ieder bedrijf dat iets bijzonders zoekt."
          </blockquote>
          <p className="text-background/80 text-lg">
            — Sarah van der Berg, Managing Director bij Coastal Innovation
          </p>
        </div>
      </section>

      <div className="bg-primary px-6"><hr className="border-background/20 max-w-[1000px] mx-auto" /></div>

      {/* CTA Block */}
      <section className="py-20 px-6 bg-primary font-body">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-background mb-6 tracking-wider font-display"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1'
            }}
          >
            MAAK ER EEN DAG<br />OM NOOIT TE VERGETEN
          </h2>
          
          <WaveDecoration variant="inverted" className="w-32 h-4 mx-auto mb-8" />
          
          <p className="text-background text-xl mb-10 max-w-2xl mx-auto">
            Klaar om uw volgende zakelijke evenement naar een hoger niveau te tillen? 
            Laten we samen bouwen aan een onvergetelijke ervaring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <JunoButton variant="primary" size="lg">
              Vraag offerte aan
            </JunoButton>
            <JunoButton variant="outline-light" size="lg">
              Neem contact op
            </JunoButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}