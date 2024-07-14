import React from 'react';
import EventCard from '@/app/components/EventCard';
import { events } from './lib/mockEvents';

function page() {
  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          artists={event.artists}
          venue={event.venue}
        />
      ))}
    </div>
  );
}

export default page;
