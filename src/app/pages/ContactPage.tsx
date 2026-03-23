import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';
import { WaveDecoration } from '../components/WaveDecoration';
import { WaveTransition } from '../components/WaveTransition';
import { SectionWaveTop } from '../components/SectionWaveTop';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { images } from '../data/images';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Beachclub Juno Kijkduin';
    return () => { document.title = 'Beachclub Juno — Zon. Strand. Cultuur. | Kijkduin'; };
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/mbdzwgnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, phone, email, message })
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError('Er ging iets mis. Probeer het opnieuw of mail ons direct op info@clubjuno.nl');
      }
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw of mail ons direct op info@clubjuno.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* Hero */}
      <PageHero
        image={images.hero.main}
        title="CONTACT"
        subtitle="Heb je een vraag? We horen graag van je."
        waveVariant="inverted"
        height="h-[40vh] min-h-[280px]"
        waveColor="#e8f0f3"
      />

      {/* Main Content Section */}
      <section className="relative py-20 px-6 pb-32 bg-navy-soft">
        <SectionWaveTop fillColor="#e8f0f3" />
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-primary font-display" style={{ fontSize: '2.5rem', letterSpacing: '0.04em' }}>
              NEEM CONTACT OP
            </h2>
            <WaveDecoration variant="special" className="w-20 h-3 mt-3 mb-6" />
            
            <p className="text-lg text-primary leading-relaxed mb-8">
              Heb je nog vragen? Laat het ons weten via het contactformulier 
              of bel ons even. We horen graag van je.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-primary">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  Strand Zuid 18<br />
                  2554 ZZ Den Haag
                </div>
              </div>

              <div className="flex gap-3 items-start text-primary">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+31624734660" className="hover:text-accent transition-colors">
                  06 2473 4660
                </a>
              </div>

              <div className="flex gap-3 items-start text-primary">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@clubjuno.nl" className="hover:text-accent transition-colors">
                  info@clubjuno.nl
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-primary font-display mb-3" style={{ fontSize: '2rem', letterSpacing: '0.04em' }}>
                  BERICHT VERZONDEN
                </h3>
                <WaveDecoration variant="special" className="w-16 h-2 mx-auto my-3" />
                <p className="text-primary">
                  Bedankt! We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <div>
                {/* Name Field */}
                <div className="mb-5">
                  <label className="block font-medium text-primary mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-secondary/40 rounded-lg px-4 py-3 text-primary bg-white focus:outline-none focus:border-primary transition-colors font-body"
                  />
                </div>

                {/* Phone Field */}
                <div className="mb-5">
                  <label className="block font-medium text-primary mb-1">
                    Telefoonnummer <span className="font-normal text-primary/50 text-sm">(optioneel)</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-secondary/40 rounded-lg px-4 py-3 text-primary bg-white focus:outline-none focus:border-primary transition-colors font-body"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-5">
                  <label className="block font-medium text-primary mb-1">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-secondary/40 rounded-lg px-4 py-3 text-primary bg-white focus:outline-none focus:border-primary transition-colors font-body"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-5">
                  <label className="block font-medium text-primary mb-1">
                    Uw bericht
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full border border-secondary/40 rounded-lg px-4 py-3 text-primary bg-white focus:outline-none focus:border-primary transition-colors font-body min-h-[140px]"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-red-600 text-sm mb-3">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !name || !email || !message}
                  className="w-full bg-accent text-background py-4 rounded-lg hover:bg-accent/85 transition-colors font-body font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verzend'}
                </button>
              </div>
            )}
          </div>
        </div>
        
        <WaveTransition fillColor="#f6f4db" />
      </section>

      {/* Map Section */}
      <section className="relative bg-background pb-36">
        <div className="max-w-[1200px] mx-auto px-6 pt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.6928813641894!2d4.210399193146445!3d52.067115599610986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b08dc0d19d8b%3A0xc3d99879c097fa70!2sBoca%20Grandi!5e0!3m2!1snl!2snl!4v1773924227964!5m2!1snl!2snl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
            title="Locatie Beachclub Juno, Strand Zuid 18, Kijkduin"
          />
        </div>
        
        <WaveTransition fillColor="#3d7183" />
      </section>

      <Footer />
    </div>
  );
}