// "use client";

// import React, { useEffect, useState } from "react";

// import { fetchEvents } from "../../../utils/api";
// import EventDetails from "@/components/EventDetails";
// import { useParams } from "next/navigation";

// const Event: React.FC = () => {
//   const router = useParams();

//   const { eventId } = router;
//   console.log("🚀 ~ router:", eventId);

//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchEvents();
//       setEvents(data);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const selectedEvent = events.find((event) => event.id === eventId);

//   if (!selectedEvent) {
//     // handle event not found
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <h1>{selectedEvent.title} Details</h1>
//       <EventDetails event={selectedEvent} />
//     </div>
//   );
// };

// export default Event;
