import React, { useEffect, useState } from "react";

// Small utility to create a bounding box (~150 km) around a coordinate
const getBoundingBox = (lon, lat, bufferKm = 150) => {
  const degLat = bufferKm / 111;
  const degLon = bufferKm / (111 * Math.cos((lat * Math.PI) / 180));
  const minLon = lon - degLon;
  const maxLon = lon + degLon;
  const minLat = lat - degLat;
  const maxLat = lat + degLat;
  return [minLon, minLat, maxLon, maxLat];
};

const FloodViewer = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // 1️⃣ Fetch flood events from EONET API
  useEffect(() => {
    const fetchFloods = async () => {
      try {
        const res = await fetch(
          "https://eonet.gsfc.nasa.gov/api/v3/events?category=floods&status=closed&limit=50" //closed for past events and limit 50 is to limit to last 50 floods
        );
        const data = await res.json();
        const floodEvents = data.events || [];
        setEvents(floodEvents);

        if (floodEvents.length > 0) {
          setSelectedEvent(floodEvents[0]);
          console.log(selectedEvent); // pick first flood event
        }
      } catch (error) {
        console.error("Error fetching flood data:", error);
      }
    };
    fetchFloods();
  }, []);

  // 2️⃣ When event changes → Build GIBS Snapshot URL
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.geometry?.length) return;

    const latestGeometry = selectedEvent.geometry[selectedEvent.geometry.length - 1];
    const [lon, lat] = latestGeometry.coordinates;
    const date = latestGeometry.date.split("T")[0]; // YYYY-MM-DD
    const bbox = getBoundingBox(lon, lat, 150).map((x) => x.toFixed(3)).join(",");

    // GIBS Snapshot URL (direct image source — works with <img src>)
    //const snapshotUrl = `https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&LAYERS=VIIRS_SNPP_CorrectedReflectance_TrueColor&CRS=EPSG:4326&BBOX=${bbox}&WIDTH=1024&HEIGHT=1024&FORMAT=image/jpeg&TIME=${date}`;
    const snapshotUrl = "https://global-flood.emergency.copernicus.eu/media/news/2024-06-13-1050319349330000/GloFAS_image_293.jpg";
    //this is a temp plaecholder, gotta fix fetching properly later
    setImageUrl(snapshotUrl);
    console.log(snapshotUrl);
    setLoading(false);
  }, [selectedEvent]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        🌍 NASA Flood Visualization Dashboard
      </h1>

      {/* Event Selector */}
      {/* {events.length > 0 && (
        <div className="mb-6 w-full max-w-md">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Select a Flood Event:
          </label>
          <select
            className="w-full border rounded-lg p-2 shadow-sm"
            value={selectedEvent?.id || ""}
            onChange={(e) => {
              const event = events.find((ev) => ev.id === e.target.value);
              setSelectedEvent(event);
              setLoading(true);
            }}
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </div>
      )} */}

      {/* Image Display */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        {loading ? (
          <p className="text-gray-500 text-sm">Fetching NASA imagery...</p>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Flood Region"
            className="rounded-lg shadow-md w-full h-auto border border-gray-300"
            onError={(e) => {
              e.target.src = "";
              setLoading(false);
            }}
          />
        ) : (
          <p className="text-red-500 text-sm">
            No image available for this event.
          </p>
        )}
      </div>

      {/* Info Section */}
      {selectedEvent && (
        <div className="mt-4 text-center text-gray-600 text-sm">
          <p>
            <strong>Event:</strong> {selectedEvent.title}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {selectedEvent.geometry[selectedEvent.geometry.length - 1].date.split("T")[0]}
          </p>
        </div>
      )}
    </div>
  );
};

export default FloodViewer;
