import event from './event';
import artist from './artist';
import siteSettings from './siteSettings';
import homePage from './homePage';
import watersportActivity from './watersportActivity';
import faqPage from './faqPage';

export const schemaTypes = [
  event,
  artist,
  siteSettings,
  homePage,
  watersportActivity,
  faqPage,
];
// artist is een object type ingebed in event, geen standalone document