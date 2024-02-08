import React from "react";
import Image from "next/image";

interface Event {
  id: string;
  imageFilenameFull: string;
  title: string;
  summary: string;
}

interface EventProps {
  event: {
    id: string;
    imageFilenameFull: string;
    title: string;
    summary: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  const imageSrc = `/assets/${event.imageFilenameFull}.webp`;

  return (
    <div key={event.id} className="event">
      <Image
        src={imageSrc}
        className="poster"
        width={500}
        height={400}
        alt={event.title}
      />
    </div>
  );
};

export default Event;
