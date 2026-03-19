CREATE: New contact page /contact for Beachclub Juno

Use the existing design system throughout:
- Colors: bg-primary (#3d7183), bg-accent (#cc6435), bg-background (#f6f4db), bg-secondary (#9fbaae)
- Fonts: font-display (Bebas Neue) for headings, font-body (Museo) for body text
- Same Navigation and Footer components as other pages
- 80px section padding, 12px card radius, 8px button radius
- No custom CSS — only Tailwind utilities and existing theme.css classes

---

ROUTES UPDATE:

In src/app/routes.tsx:
- Import the new ContactPage component
- Add route: { path: "/contact", Component: ContactPage }

In src/app/components/Footer.tsx:
- In the Navigatie column, change the "Contact" button from:
    <button onClick={() => scrollToSection('contact')} ...>Contact</button>
  To a Link:
    <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">Contact</Link>
  Make sure Link is imported from 'react-router' at the top of the file.

In src/app/components/Navigation.tsx:
- Change the desktop "Contact" button from scrollToSection('contact') to navigate('/contact')
  Use the existing navigate from useNavigate() which is already imported.
- Do the same for the mobile nav item for "Contact" if present.

---

FILE TO CREATE: src/app/pages/ContactPage.tsx

PAGE STRUCTURE:

1. HERO SECTION
- Same compact PageHero component as other subpages
- image: images.hero.main
- title: "CONTACT"
- subtitle: "Heb je een vraag? We horen graag van je."
- waveVariant: "inverted"
- height: "h-[40vh] min-h-[280px]"

2. MAIN CONTENT SECTION
- py-20 px-6, bg-background
- max-w-[1200px] mx-auto
- Two-column grid on desktop (md:grid-cols-2), stacked on mobile
- gap-16 between columns

LEFT COLUMN — contact info:
  - Bebas Neue heading: "NEEM CONTACT OP"
  - WaveDecoration variant="special" w-20 h-3 mt-3 mb-6
  - Intro text (Museo, text-lg, text-primary, leading-relaxed):
    "Heb je nog vragen? Laat het ons weten via het contactformulier 
    of bel ons even. We horen graag van je."
  - Spacer mb-8
  - Contact details using lucide-react icons (Phone, Mail, MapPin):
    
    MapPin icon (text-accent) + text:
      Strand Zuid 18
      2554 ZZ Den Haag
    
    Phone icon (text-accent) + text:
      <a href="tel:+31624734660">06 2473 4660</a>
    
    Mail icon (text-accent) + text:
      <a href="mailto:info@clubjuno.nl">info@clubjuno.nl</a>
    
  - Each contact item: flex gap-3 items-start, text-primary, mb-4

RIGHT COLUMN — contact form:
  - White card: bg-white rounded-xl p-8 shadow-sm
  - Form fields (each with a label above in Museo font-medium text-primary mb-1):
    
    1. Naam* — text input, full width, required
    2. Telefoonnummer — text input, full width, not required
    3. E-mailadres* — email input, full width, required
    4. Uw bericht* — textarea, full width, min-h-[140px], required
    
  - Input styling (apply to all inputs and textarea):
    w-full border border-secondary/40 rounded-lg px-4 py-3 
    text-primary bg-white focus:outline-none focus:border-primary 
    transition-colors mb-5 font-body
    
  - Submit button: full width, bg-accent text-background, py-4 rounded-lg
    hover:bg-accent/85 transition-colors font-body font-medium text-lg
    Button text: "Verzend"

FORM IMPLEMENTATION:
  - Use useState for: name, phone, email, message, isSubmitting, isSuccess, error
  - Do NOT use an HTML <form> element with action/method attributes
  - Use a <div> wrapper instead, with a button onClick async handler
  - On click, POST to Formspree using fetch():

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

  SUCCESS STATE: Replace entire form content with:
    - CheckCircle icon (lucide-react), text-accent, w-12 h-12, mx-auto mb-4
    - Bebas Neue heading (text-center): "BERICHT VERZONDEN"
    - WaveDecoration variant="special" w-16 h-2 mx-auto my-3
    - Museo text (text-center, text-primary):
      "Bedankt! We nemen zo snel mogelijk contact met je op."

  ERROR STATE: Show above submit button:
    - text-red-600 text-sm mb-3
    - Message: "Er ging iets mis. Probeer het opnieuw of mail ons 
      direct op info@clubjuno.nl"

  LOADING STATE: 
    - Disable submit button while isSubmitting is true
    - Change button text to "Verzenden..." during fetch

3. MAP SECTION
- Below the two-column section, full width
- max-w-[1200px] mx-auto px-6 pb-20
- Google Maps iframe for Strand Zuid 18, Den Haag:
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.8!2d4.2265!3d52.0458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAyJzQ0LjkiTiA0wrAxMycyNS40IkU!5e0!3m2!1snl!2snl!4v1234567890"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-xl"
  />

---

ARCHITECTURE RULES:
- Import Navigation from '../components/Navigation'
- Import Footer from '../components/Footer'
- Import PageHero from '../components/PageHero'
- Import WaveDecoration from '../components/WaveDecoration'
- useEffect for document.title: 'Contact | Beachclub Juno Kijkduin'
- fontFamily declarations on section wrapper level only
- No custom CSS
- No inline drawer logic