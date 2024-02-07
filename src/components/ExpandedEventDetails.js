import React, { useState } from "react";
import { formatDate } from "../utils/formatDate";
import imageLoader from "../utils/imageLoader";

const Spinner = () => (
  <div className="w-full h-2 bg-transparent relative overflow-hidden before:content-'' before:absolute before:left-1/2 before:top-0 before:h-2 before:bg-blue-500 before:animate-growSpinner"></div>
);

const ExpandedEventDetails = ({ event, imageContext }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center relative w-full">
      {isLoading && <Spinner />}
      <img
        src={imageLoader(imageContext, event.imageFilenameFull)}
        alt={event.title}
        onLoad={() => setIsLoading(false)}
        className="w-full max-h-300 object-cover"
      />
      <div className="absolute text-white font-system-ui left-24 top-1/2 transform -translate-x-3/100 -translate-y-1/2">
        <h3>{event.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: event.summary }}></p>
        <p className="text-xs w-1/2">
          Available: {formatDate(event.launchDate)}
        </p>
        <a
          href={event.learnMoreLink}
          target="_blank"
          className="inline-block text-white rounded-full text-xs px-15 py-10 bg-blue-500 mr-10"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <a
          href={event.purchaseLink}
          target="_blank"
          className="inline-block text-white rounded-full text-xs px-15 py-10 bg-red-500"
          rel="noopener noreferrer"
        >
          Pre Order Now
        </a>
      </div>
    </div>
  );
};

export default ExpandedEventDetails;

// import React, { useState } from "react";
// import { formatDate } from "../utils/formatDate";
// import imageLoader from "../utils/imageLoader";

// const Spinner = () => <div className="spinner"></div>;

// const ExpandedEventDetails = ({ event, imageContext }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div className="expanded-event-details">
//       {isLoading && <Spinner />}
//       <img
//         src={imageLoader(imageContext, event.imageFilenameFull)}
//         alt={event.title}
//         onLoad={() => setIsLoading(false)}
//         className="expanded-event-image"
//       />
//       <div className="expanded-event-text">
//         <h3>{event.title}</h3>
//         <p dangerouslySetInnerHTML={{ __html: event.summary }}></p>
//         <p>Available: {formatDate(event.launchDate)}</p>
//         <a
//           href={event.learnMoreLink}
//           target="_blank"
//           className="blue-btn"
//           rel="noopener noreferrer"
//         >
//           Learn More
//         </a>
//         <a
//           href={event.purchaseLink}
//           target="_blank"
//           className="red-btn"
//           rel="noopener noreferrer"
//         >
//           Pre Order Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExpandedEventDetails;
