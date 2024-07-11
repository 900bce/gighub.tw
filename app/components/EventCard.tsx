import React from 'react';
import dayjs from 'dayjs';

type Props = {
  title: string;
  date: Date;
  artists: string[];
  venue: string;
};

function EventCard({ title, date, artists, venue }: Props) {
  return (
    <div className="pt-2 px-3 border-gray-300 text-center">
      <div className="py-3 text-gray-500 text-sm">
        <p>{dayjs(date).format('MM/DD (ddd)')}</p>
        <p>{dayjs(date).format('HH:mm')}</p>
      </div>
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <p className="pb-1 text-sm text-gray-400">{venue}</p>
      <div className="border-b pb-5 flex justify-center flex-wrap">
        {artists.map((artist, index) => (
          <div key={artist} className="text-sm text-gray-500">
            {artist}
            {index < artists.length - 1 && ','}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
