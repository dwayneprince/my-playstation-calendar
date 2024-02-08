import React, { useState } from "react";
import { formatDate } from "../utils/formatDate";
import Image from "next/image";

const Spinner = () => (
  <div className="w-full h-2 bg-transparent relative overflow-hidden before:content-'' before:absolute before:left-1/2 before:top-0 before:h-2 before:bg-blue-500 before:animate-growSpinner"></div>
);

interface EventProps {
  event: {
    id: string;
    imageFilenameFull: string;
    title: string;
    summary: string;
    launchDate: string;
    learnMoreLink: string;
    purchaseLink: string;
  };
}

const ExpandedEventDetails: React.FC<EventProps> = ({ event }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageSrc = `/assets/${event.imageFilenameFull}.webp`;

  return (
    <div className="flex flex-col items-center relative w-full">
      {isLoading && <Spinner />}
      <Image
        src={imageSrc}
        width={900}
        height={500}
        alt={event.title}
        onLoad={() => setIsLoading(false)}
        className="w-full max-h-300 object-cover"
      />

      <div className="absolute top-0 left-2 md:left-12 w-2/3 md:w-1/2 h-full flex flex-col justify-center ">
        <h3 className=" md:text-4xl text-white mb-2 font-semibold">
          {event.title}
        </h3>
        <p className="text-xs md:text-base text-white">{event.summary}</p>

        <p className="text-sm md:text-base text-white my-2 md:my-5 font-bold">
          Available {formatDate(event?.launchDate)}
        </p>
        <div>
          <a
            href={event.learnMoreLink}
            className="bg-blue-500 text-white py-[3px] md:py-3 px-2 md:px-5 rounded-3xl text-xs md:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a
            href={event.purchaseLink}
            className="ml-4 bg-orange-600  text-white py-[3px] md:py-3 px-2 md:px-5 rounded-3xl text-xs md:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pre Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpandedEventDetails;
