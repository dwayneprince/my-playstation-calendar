const API_URL = "https://amock.io/api/dwayneprinc/game-events";

export const fetchEvents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Could not fetch events, please update API path in apiConfig.js. using sample data for now: ",
      error
    );

    try {
      const response = await fetch("/data/events.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  }
};
