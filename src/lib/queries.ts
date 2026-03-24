import { sanityClient, urlFor } from './sanity';
import type {
  SanityEvent, SiteSettings, WatersportActivity, FaqGroup,
} from './types';

export async function getFeaturedEvents(): Promise<SanityEvent[]> {
  return sanityClient.fetch(
    `*[_type == "event" && featured == true] | order(order asc)[0...3]`
  );
}

export async function getAllEvents(): Promise<SanityEvent[]> {
  return sanityClient.fetch(
    `*[_type == "event"] | order(date asc)`
  );
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getWatersportActivities(): Promise<WatersportActivity[]> {
  return sanityClient.fetch(
    `*[_type == "watersportActivity"] | order(order asc)`
  );
}

export async function getFaqGroups(): Promise<FaqGroup[]> {
  const result = await sanityClient.fetch(
    `*[_type == "faqPage"][0].groups`
  );
  return result ?? [];
}

export { urlFor };
