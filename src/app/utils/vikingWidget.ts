const VIKING_BASE_URL = 'https://app.vikingbookings.com/widget/booking';

// Opent de Viking Bookings widget voor een specifiek product/widget-ID
// Viking gebruikt geen los script zoals MICE, maar directe links naar een
// volledige booking-flow (stappen, betaling, waiver). Daarom een gewoon
// nieuw tabblad, geen beperkt popup-venster.
export function openVikingWidget(widgetId: string): void {
  const url = `${VIKING_BASE_URL}/${widgetId}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
