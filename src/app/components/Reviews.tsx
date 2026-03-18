import { Star } from 'lucide-react';
import { WaveDecoration } from './WaveDecoration';

const reviews = [
  {
    name: 'Marieke V.',
    text: 'Een onvergetelijke avond. De comedyshow was hilarisch en het eten was verrassend goed. Absoluut een aanrader!',
    stars: 5,
    date: '2 weken geleden',
  },
  {
    name: 'Thomas & Lisa',
    text: 'Onze bruiloft bij Juno was een droom. Prachtige locatie, geweldige service en het uitzicht op zee maakte alles perfect.',
    stars: 5,
    date: '1 maand geleden',
  },
  {
    name: 'Peter D.',
    text: 'Heerlijk lunchen met uitzicht op zee. De sfeer is relaxed maar verzorgd. We komen zeker terug.',
    stars: 5,
    date: '3 weken geleden',
  },
];

function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'fill-[#cc6435] text-[#cc6435]' : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function GoogleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="py-20 px-6 bg-[#f6f4db]" style={{ fontFamily: 'Museo, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-[#3d7183] mb-2 tracking-wide"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1'
            }}
          >
            WAT ONZE GASTEN ZEGGEN
          </h2>
          <WaveDecoration variant="special" className="w-24 h-6 mx-auto mt-3 mb-4" />
          <div className="flex items-center justify-center gap-2 text-[#3d7183]">
            <span className="text-lg">Gebaseerd op Google Reviews</span>
            <GoogleIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div 
            className="text-[#3d7183] mb-3"
            style={{ 
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '5rem',
              lineHeight: '1'
            }}
          >
            4.8
          </div>
          <StarRating rating={5} className="justify-center mb-2" />
          <p className="text-[#3d7183]/70 text-sm">
            gebaseerd op 284 beoordelingen
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars and Date */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.stars} />
                <span className="text-[#3d7183]/60 text-sm">{review.date}</span>
              </div>

              {/* Reviewer Name */}
              <h3 className="text-[#3d7183] font-bold text-lg mb-3">
                {review.name}
              </h3>

              {/* Review Text */}
              <p className="text-[#3d7183] leading-relaxed mb-4 line-clamp-3">
                {review.text}
              </p>

              {/* Google Icon */}
              <div className="flex justify-end">
                <GoogleIcon className="w-4 h-4 opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=beachclub+juno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#cc6435] text-[#cc6435] px-8 py-3 rounded-lg hover:bg-[#cc6435] hover:text-[#f6f4db] transition-colors text-lg"
          >
            Bekijk alle reviews op Google →
          </a>
        </div>
      </div>
    </section>
  );
}