import { useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { SectionWaveTop } from './SectionWaveTop';
import { WaveTransition } from './WaveTransition';
import { JunoButton } from './JunoButton';

export function Reviews() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).elfsight) {
      (window as any).elfsight.reinit?.();
    }
  }, []);

  return (
    <section className="relative py-20 px-6 pb-32 bg-terracotta-soft font-body">
      <SectionWaveTop fillColor="#faf0ea" />
      
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="reveal">
          <SectionHeader title="WAT ONZE GASTEN ZEGGEN" waveVariant="special" />
        </div>
        
        {/* Elfsight Google Reviews Widget */}
        <div 
          className="elfsight-app-b019b95d-196b-47c2-8856-06161a723b09 reveal"
          data-elfsight-app-lazy="false"
        />
        
        {/* CTA Button */}
        <div className="text-center mt-10 reveal">
          <JunoButton
            variant="outline-dark"
            href="https://www.google.com/search?newwindow=1&sca_esv=539c00fc8c0dc83a&sxsrf=ANbL-n6nUTY6QBRFcoNVr0MDd9JjjOdyWg:1774294691800&q=Boca+grandi&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWRoS2TX12rS_dD2_xCGz4158LHjg6MuRR-Gubpp1vqoQlrPUpevAUfC-w9pYvzXGjh3W3sc%3D&uds=ALYpb_nDBGPPBSbt_mWAKMakwCMVxnvs0hV7aKj8VG-oB0FcCu3BlJYUazTxP-VSsMoW-A4LVPLZst-fs30nQjPzGcfPhpD35exsXtjIamPw9A9kxJ4UE1g&sa=X&ved=2ahUKEwiEmNPm4raTAxVs3QIHHTGUO6QQ3PALegQIExAE&biw=1720&bih=921&dpr=2"
            target="_blank"
          >
            Bekijk alle reviews op Google →
          </JunoButton>
        </div>
      </div>
      
      <WaveTransition fillColor="#3d7183" />
    </section>
  );
}