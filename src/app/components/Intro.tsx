export function Intro() {
  return (
    <section id="verhaal" className="py-20 px-6" style={{ fontFamily: 'Museo, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className="text-[#3d7183] mb-6 tracking-wide"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            MEER DAN EEN<br />BEACHCLUB
          </h2>
          <div className="space-y-4 text-[#3d7183] text-lg leading-relaxed">
            <p>
              Beachclub Juno is een ontmoetingsplek voor liefhebbers van goed eten, 
              mooi design en culturele verdieping. Gelegen aan het strand van Kijkduin, 
              bieden wij een unieke combinatie van culinaire excellentie en inspirerende 
              evenementen.
            </p>
            <p>
              Van jazz en theater tot comedy — bij ons komt cultuur tot leven met de 
              Noordzee als decor. En voor de mooiste momenten in uw leven, zoals bruiloften 
              en zakelijke bijeenkomsten, bieden wij een onvergetelijke setting.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1767667995308-639861440ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsdWIlMjB0ZXJyYWNlJTIwb2NlYW4lMjB2aWV3fGVufDF8fHx8MTc3MzgzNjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beach club terrace"
            className="w-full h-[500px] object-cover rounded-xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}