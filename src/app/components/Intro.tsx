import { useState, useEffect } from 'react';
import { images } from '../data/images';
import { WaveDecoration } from './WaveDecoration';
import { sanityClient, urlFor } from '../../lib/sanity';

export function Intro() {
  const [title, setTitle] = useState('MEER DAN EEN\nBEACHCLUB');
  const [paragraph1, setParagraph1] = useState('Beachclub Juno is een ontmoetingsplek voor liefhebbers van goed eten, mooi design en culturele verdieping. Gelegen aan het strand van Kijkduin, bieden wij een unieke combinatie van culinaire excellentie en inspirerende evenementen.');
  const [paragraph2, setParagraph2] = useState('Van jazz en theater tot comedy — bij ons komt cultuur tot leven met de Noordzee als decor. En voor de mooiste momenten in uw leven, zoals bruiloften en zakelijke bijeenkomsten, bieden wij een onvergetelijke setting.');
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homePage"][0]{ intro }`)
      .then(data => {
        if (data?.intro?.title) setTitle(data.intro.title);
        if (data?.intro?.paragraph1) setParagraph1(data.intro.paragraph1);
        if (data?.intro?.paragraph2) setParagraph2(data.intro.paragraph2);
        if (data?.intro?.image) setImage(urlFor(data.intro.image).width(1080).url());
      })
      .catch(() => {});
  }, []);

  return (
    <section id="verhaal" className="py-20 px-6 font-body">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-primary mb-6 tracking-wide font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            {title}
          </h2>
          <WaveDecoration variant="special" className="w-20 h-3 mb-6" />
          <div className="space-y-4 text-primary text-lg leading-relaxed">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl shadow-sm group">
          <img 
            src={image ?? images.intro.terrace}
            alt="Terras van Beachclub Juno met uitzicht op de Noordzee"
            loading="lazy"
            className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}