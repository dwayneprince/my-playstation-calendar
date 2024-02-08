import React from "react";
import Image from "next/image";

const Event = ({ event }) => {
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
