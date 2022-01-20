import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./deails.css";
function Deatil() {
  let { eventid } = useParams();
  const [details, setDetails] = useState({
    place: "hawler",
    time: "2022 12 2",
    magnitude: "mag",
    latitude: "lang",
    longitude: "long",
    url: "url",
  });

  useEffect(async () => {
    const respond = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventid}`
    );
    const data = await respond.json();
    const newdetails = {
      place: data.properties.place,
      time: data.properties.time,
      magnitude: data.properties.mag,
      latitude: data.properties.products.origin[0].properties.latitude,
      longitude: data.properties.products.origin[0].properties.longitude,
      url: data.properties.url,
    };
    setDetails(newdetails);
  }, [eventid]);

  return (
    <>
      <div className="deatils">
        <h1>{details.place}</h1>
        <p>time: {details.time} </p>
        <p>magnitude: {details.magnitude}</p>
        <p>latitude: {details.latitude}</p>
        <p>longitude: {details.longitude}</p>
        <a href={details.url}>Visit the location at map</a>
      </div>
    </>
  );
}

export default Deatil;
