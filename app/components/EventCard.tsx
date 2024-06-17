import React from 'react';

type Props = {
  title: string;
  date: string;
  artists: string[];
};

function EventCard({ title, date, artists }: Props) {
  return (
    <div className="m-1 p-2 border-b border-gray-300">
      <p className='text-gray-500 text-sm'>{date}</p>
      <h3>{title}</h3>
      {artists.map((artist) => (
        <p key={artist} className='text-sm text-gray-500'>{artist}</p>
      ))}
    </div>
  );
}

export default EventCard;
