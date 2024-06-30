import React from 'react';
import EventCard from '@/app/components/EventCard';

type Event = {
  id: string;
  title: string;
  venue: string;
  date: Date;
  artists: string[];
};

const mockData: Event[] = [
  {
    id: '0001',
    title: '拍謝少年噪音公寓厝邊倒彈演唱會',
    venue: '台北流行音樂中心',
    date: new Date('2024-08-24 18:00:00'),
    artists: ['拍謝少年', '台灣通勤第一品牌'],
  },
  {
    id: '0002',
    title: '拍謝少年噪音公寓厝邊倒彈演唱會',
    venue: '高雄流行音樂中心',
    date: new Date('2024-08-25 19:30:00'),
    artists: ['拍謝少年', '台灣通勤第一品牌'],
  },
];

function page() {
  return (
    <div>
      {mockData.map((event) => (
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
