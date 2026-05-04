Make the following changes. Do not change any styling, layout, or component structure.

--- CHANGE 1: sanity/schemas/bruiloftenPage.ts ---
In the intro object fields array, add after ctaSecondary:
{ name: 'brochureUrl', title: 'Brochure PDF URL', type: 'url', description: 'Link naar downloadbare brochure PDF. Laat leeg om knop te verbergen.' },

--- CHANGE 2: sanity/schemas/zakelijkeEventsPage.ts ---
In the aanbod object fields array, add after subtitle:
{ name: 'brochureUrl', title: 'Brochure PDF URL', type: 'url', description: 'Link naar downloadbare brochure PDF. Laat leeg om knop te verbergen.' },

Add a new top-level defineField after the faq field:
defineField({
  name: 'fotostrip1',
  title: 'Foto strip 1 (halverwege)',
  type: 'object',
  fields: [
    { name: 'text', title: 'Overlay tekst', type: 'string' },
    { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
  ],
}),
defineField({
  name: 'fotostrip2',
  title: 'Foto strip 2 (onder waarom sectie)',
  type: 'object',
  fields: [
    { name: 'text', title: 'Overlay tekst', type: 'string' },
    { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
  ],
}),

--- CHANGE 3: sanity/schemas/particuliereEventsPage.ts ---
In the aanbod object fields array, add after subtitle:
{ name: 'brochureUrl', title: 'Brochure PDF URL', type: 'url', description: 'Link naar downloadbare brochure PDF. Laat leeg om knop te verbergen.' },

Add same two fotostrip fields as CHANGE 2 after the faq field.

--- CHANGE 4: src/app/pages/Bruiloften.tsx ---

Add state after introCtaSecondary:
  const [brochureUrl, setBrochureUrl] = useState('');

In Sanity fetch, after ctaSecondary:
  if (data.intro?.brochureUrl) setBrochureUrl(data.intro.brochureUrl);

Find:
            <JunoButton variant="outline-dark" size="lg">
              {introCtaSecondary}
            </JunoButton>

Replace with:
            {brochureUrl ? (
              <JunoButton variant="outline-dark" size="lg" href={brochureUrl} target="_blank">
                {introCtaSecondary}
              </JunoButton>
            ) : (
              <JunoButton variant="outline-dark" size="lg" className="opacity-50 pointer-events-none">
                {introCtaSecondary}
              </JunoButton>
            )}

--- CHANGE 5: src/app/pages/Bedrijfsfeesten.tsx ---

Add states after aanbodSubtitle state:
  const [brochureUrl, setBrochureUrl] = useState('');
  const [fotostrip1Text, setFotostrip1Text] = useState('EEN LOCATIE DIE INSPIREERT');
  const [fotostrip1Image, setFotostrip1Image] = useState(images.bedrijfsfeesten.team);
  const [fotostrip2Text, setFotostrip2Text] = useState('JUNO — WAAR INSPIRATIE BEGINT');
  const [fotostrip2Image, setFotostrip2Image] = useState(images.intro.terrace);

In Sanity fetch, after aanbod subtitle:
  if (data.aanbod?.brochureUrl) setBrochureUrl(data.aanbod.brochureUrl);
  if (data.fotostrip1?.text) setFotostrip1Text(data.fotostrip1.text);
  if (data.fotostrip1?.image) setFotostrip1Image(urlFor(data.fotostrip1.image).width(1800).url());
  if (data.fotostrip2?.text) setFotostrip2Text(data.fotostrip2.text);
  if (data.fotostrip2?.image) setFotostrip2Image(urlFor(data.fotostrip2.image).width(1800).url());

Find Download brochure button:
            <JunoButton variant="outline-dark" size="lg">Download brochure</JunoButton>

Replace with:
            {brochureUrl ? (
              <JunoButton variant="outline-dark" size="lg" href={brochureUrl} target="_blank">Download brochure</JunoButton>
            ) : (
              <JunoButton variant="outline-dark" size="lg" className="opacity-50 pointer-events-none">Download brochure</JunoButton>
            )}

Find SECTION 3 — SFEER FOTO STRIP and replace the entire section with:
      {/* SECTION 3 — SFEER FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img
          src={fotostrip1Image}
          alt={fotostrip1Text}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            {fotostrip1Text}
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

Find SECTION 6 — SECOND FOTO STRIP and replace the entire section with:
      {/* SECTION 6 — SECOND FOTO STRIP */}
      <section className="relative overflow-hidden h-[500px] group">
        <img
          src={fotostrip2Image}
          alt={fotostrip2Text}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-display text-background text-center px-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}
          >
            {fotostrip2Text}
          </h2>
          <WaveDecoration variant="inverted" className="w-24 h-3 mx-auto mt-4" />
        </div>
      </section>

--- CHANGE 6: src/app/pages/ParticuliereEvents.tsx ---

Apply identical changes as CHANGE 5 but with these static fallbacks:
  const [fotostrip1Text, setFotostrip1Text] = useState('FEESTEN MET UITZICHT OP ZEE');
  const [fotostrip1Image, setFotostrip1Image] = useState(images.bedrijfsfeesten.team);
  const [fotostrip2Text, setFotostrip2Text] = useState('JUNO — VOOR JOUW BIJZONDERE MOMENT');
  const [fotostrip2Image, setFotostrip2Image] = useState(images.intro.terrace);

And fetch from particuliereEventsPage instead of zakelijkeEventsPage.
MICE widget ID remains '8f1c3d9ed6cc' throughout.