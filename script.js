const calendarButton = document.querySelector('#calendar-button');

const event = {
  title: "Amelie's Quarterlife Crisis",
  start: '20261014T170000',
  end: '20261014T220000',
  location: 'Guacamoles, Unit 1, Hamlet Industrial Estate, 96 White Post Ln, London E9 5EN | ABBA Arena',
  description: "Drinks and dinner at Guacamoles from 5pm, then ABBA Voyage starts at 7:45pm. Book your tickets through the link on the invitation. We'll take the dance floor ticket: £79 (purple ticket)."
};

const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
googleCalendarUrl.searchParams.set('action', 'TEMPLATE');
googleCalendarUrl.searchParams.set('text', event.title);
googleCalendarUrl.searchParams.set('dates', `${event.start}/${event.end}`);
googleCalendarUrl.searchParams.set('details', event.description);
googleCalendarUrl.searchParams.set('location', event.location);
calendarButton.href = googleCalendarUrl.toString();

const ticketButton = document.querySelector('.ticket-button');
ticketButton.addEventListener('click', (clickEvent) => {
  if (ticketButton.getAttribute('aria-disabled') === 'true') {
    clickEvent.preventDefault();
    ticketButton.textContent = 'Ticket link coming soon';
  }
});
