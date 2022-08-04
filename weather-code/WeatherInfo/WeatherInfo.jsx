import { useState, useEffect } from "react";
import Loader from "../Loader";
import { WEATHER_API_KEY, WEATHER_URL } from "./config";

const WeatherInfo = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const success = async ({ coords }) => {
    const { latitude, longitude } = coords;

    const finalUrl = `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

    const response = await fetch(finalUrl);
    const data = await response.json();
    setLoading(false);
    const {
      sys: { country },
      name,
      main: { temp }
    } = data;

    const currentWeatherInfo = {
      formattedDate: new Intl.DateTimeFormat("en-US", {
        weekday: "long", // Mon -> short | Monday -> long
        month: "long", // February -> long | Feb -> short
        year: "numeric", // 2022
        day: "numeric" // 10
      }).format(new Date()),
      locationName: name,
      country,
      temperature: temp
    };

    setWeatherInfo(currentWeatherInfo);
  };

  const error = () => {
    console.log("Error retrieving weather data");
  };

  useEffect(() => {
    // Get user location
    setLoading(true);
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <p>Country : {weatherInfo.country} </p>
      <p>Location : {weatherInfo.locationName} </p>
      <p>Temperature : {weatherInfo.temperature} </p>
      <p>Date : {weatherInfo.formattedDate} </p>
    </div>
  );
};

export default WeatherInfo;
