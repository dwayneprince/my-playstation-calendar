import React from "react";
import { Event as EventType } from "../types";

interface EventDetailsProps {
  event: EventType;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <img src={event.image} alt={event.title} />
    </div>
  );
};

export default EventDetails;
