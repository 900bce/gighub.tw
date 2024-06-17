import React from 'react';
import EventCard from '@/app/components/EventCard';

function page() {
  return (
    <>
      <EventCard
        title="拍謝少年噪音公寓厝邊倒彈演唱會"
        date="08/24 (六)"
        artists={['拍謝少年']}
      />
    </>
  );
}

export default page;
