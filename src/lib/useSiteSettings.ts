import { useState, useEffect } from 'react';
import { getSiteSettings } from './queries';
import type { SiteSettings } from './types';

const STATIC_DEFAULTS: SiteSettings = {
  phone: '+31624734660',
  email: 'info@clubjuno.nl',
  address: {
    street: 'Strand Zuid 18',
    postal: '2554 ZZ',
    city: 'Den Haag',
  },
  openingHours: [
    { days: 'Ma - Do', hours: '10:00 - 22:00' },
    { days: 'Vr - Za', hours: '10:00 - 01:00' },
    { days: 'Zo', hours: '10:00 - 22:00' },
  ],
  instagram: '#',
  facebook: '#',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.6928813641894!2d4.210399193146445!3d52.067115599610986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b08dc0d19d8b%3A0xc3d99879c097fa70!2sBoca%20Grandi!5e0!3m2!1snl!2snl!4v1773924227964!5m2!1snl!2snl',
};

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(STATIC_DEFAULTS);
  useEffect(() => {
    getSiteSettings()
      .then(data => { if (data) setSettings(data); })
      .catch(() => {});
  }, []);
  return settings;
}
