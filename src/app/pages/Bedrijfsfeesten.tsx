import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WaveDecoration } from '../components/WaveDecoration';
import { Users, Coffee, Lightbulb, Quote } from 'lucide-react';
import { images } from '../data/images';

export function Bedrijfsfeesten() {
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
    <div className="min-h-screen bg-[#f6f4db]">
      <Navigation />

      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src={images.bedrijfsfeesten.hero}
          alt="Corporate event by the beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 
            className="text-[#f6f4db] mb-6 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
              lineHeight: '0.9'
            }}
          >
            ZAKELIJK AAN ZEE
          </h1>
          
          <WaveDecoration variant="inverted" className="w-48 h-8 mb-6" />
          
          <p 
            className="text-[#f6f4db] text-xl md:text-2xl"
            style={{ fontFamily: 'Museo, sans-serif' }}
          >
            Vergaderen, vieren of teambuilding — altijd met uitzicht.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#3d7183] text-lg leading-relaxed mb-6">
              Juno is de perfecte locatie voor bedrijven die iets bijzonders zoeken. Of het nu gaat 
              om een productlancering, een teamuitje of een eindejaarsfeest — wij zorgen voor een 
              onvergetelijke dag.
            </p>
            <p className="text-[#3d7183] text-lg leading-relaxed">
              Met de Noordzee als inspirerende achtergrond, professionele faciliteiten en een team 
              dat tot in de puntjes voor u zorgt, wordt elk zakelijk evenement een succes.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={images.bedrijfsfeesten.team}
              alt="Team building outdoors"
              className="w-full h-[500px] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Drie smaken */}
      <section className="py-20 px-6 bg-[#9fbaae]/10" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-[#3d7183] mb-4 tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              DRIE SMAKEN
            </h2>
            <WaveDecoration variant="special" className="w-24 h-6 mx-auto mt-3 mb-4" />
            <p className="text-[#3d7183] text-lg max-w-2xl mx-auto">
              Van inspirerende teambuilding tot formele vergaderingen — kies wat bij u past
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <button 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left w-full hover:scale-105 duration-300"
              >
                <format.icon className="w-12 h-12 text-[#3d7183] mb-4" />
                <h3 
                  className="text-[#3d7183] mb-3 tracking-wide"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '1.75rem',
                    lineHeight: '1.2'
                  }}
                >
                  {format.title}
                </h3>
                <p className="text-[#3d7183] leading-relaxed mb-4">
                  {format.description}
                </p>
                <p className="text-[#cc6435] font-medium text-lg">
                  {format.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-[#3d7183] tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              HOE HET WERKT
            </h2>
            <WaveDecoration variant="special" className="w-24 h-6 mx-auto mt-3 mb-4" />
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Wave connection line */}
            <div className="absolute top-12 left-0 right-0 h-1 flex items-center">
              <WaveDecoration className="w-full h-8 text-[#9fbaae]" />
            </div>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="bg-[#3d7183] text-[#f6f4db] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.5rem'
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 
                    className="text-[#3d7183] mb-2 tracking-wide"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.25rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#3d7183] text-sm">
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
                <div className="bg-[#3d7183] text-[#f6f4db] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '1.25rem'
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 
                    className="text-[#3d7183] mb-1 tracking-wide"
                    style={{ 
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '1.25rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#3d7183]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktisch */}
      <section className="py-20 px-6 bg-[#9fbaae]/10" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-[#3d7183] tracking-wide"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1'
              }}
            >
              PRAKTISCHE INFORMATIE
            </h2>
            <WaveDecoration variant="special" className="w-24 h-6 mx-auto mt-3 mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capaciteit & Beschikbaarheid */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 
                className="text-[#3d7183] mb-4 tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.75rem'
                }}
              >
                CAPACITEIT & BESCHIKBAARHEID
              </h3>
              <ul className="space-y-3 text-[#3d7183] text-lg">
                <li><strong>Capaciteit:</strong> 10 tot 200 personen</li>
                <li><strong>Beschikbaar:</strong> Het hele jaar door</li>
                <li><strong>Vergaderzalen:</strong> 2 aparte ruimtes beschikbaar</li>
                <li><strong>Flexibele opstellingen:</strong> Theater, U-vorm, cabaret</li>
              </ul>
            </div>

            {/* Faciliteiten */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 
                className="text-[#3d7183] mb-4 tracking-wide"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.75rem'
                }}
              >
                FACILITEITEN
              </h3>
              <ul className="space-y-3 text-[#3d7183] text-lg">
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
      <section className="py-20 px-6 bg-[#3d7183]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <Quote className="w-16 h-16 text-[#cc6435] mx-auto mb-6" />
          <blockquote className="text-[#f6f4db] text-2xl md:text-3xl leading-relaxed mb-8">
            "Ons team had een fantastische dag bij Juno. De locatie, het eten en de service 
            waren subliem. Een aanrader voor ieder bedrijf dat iets bijzonders zoekt."
          </blockquote>
          <p className="text-[#f6f4db]/80 text-lg">
            — Sarah van der Berg, Managing Director bij Coastal Innovation
          </p>
        </div>
      </section>

      <div className="bg-[#3d7183] px-6"><hr className="border-[#f6f4db]/20 max-w-[1000px] mx-auto" /></div>

      {/* CTA Block */}
      <section className="py-20 px-6 bg-[#3d7183]" style={{ fontFamily: 'Museo, sans-serif' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 
            className="text-[#f6f4db] mb-6 tracking-wider"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1'
            }}
          >
            MAAK ER EEN DAG<br />OM NOOIT TE VERGETEN
          </h2>
          
          <WaveDecoration variant="inverted" className="w-48 h-6 mx-auto mb-8" />
          
          <p className="text-[#f6f4db] text-xl mb-10 max-w-2xl mx-auto">
            Klaar om uw volgende zakelijke evenement naar een hoger niveau te tillen? 
            Laten we samen bouwen aan een onvergetelijke ervaring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#cc6435] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#b55730] transition-colors">
              Vraag offerte aan
            </button>
            <button className="border-2 border-[#f6f4db] text-[#f6f4db] px-8 py-4 text-lg rounded-lg hover:bg-[#f6f4db] hover:text-[#3d7183] transition-colors">
              Neem contact op
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}