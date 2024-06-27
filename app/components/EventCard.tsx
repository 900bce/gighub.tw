import React from 'react';
import dayjs from 'dayjs';

type Props = {
  title: string;
  date: Date;
  artists: string[];
};

function EventCard({ title, date, artists }: Props) {
  return (
    <div className="m-1 p-2 border-b border-gray-300">
      <div className="flex justify-between mt-2">
        <p className="text-gray-500 text-sm">
          {dayjs(date).format('MM/DD (ddd) HH:mm')}
        </p>
        <button className="text-sm text-white bg-gray-400 px-3">購票</button>
      </div>
      <h3 className="text-lg font-thin py-1">{title}</h3>
      <p>{}</p>
      <div>
        {artists.map((artist) => (
          <p key={artist} className="text-sm text-gray-500">
            {artist}
          </p>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
