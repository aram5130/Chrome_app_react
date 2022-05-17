import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
function Weather() {
  const [coords, setSaveCoords] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  function onGeoOk(position) {
    console.log(position);
    const latitude = position.coords.latitude; // 경도
    const longitude = position.coords.longitude; // 위도
    const coordsObj = {
      latitude,
      longitude,
    };
    setSaveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function onGeoError(err) {
    console.log("geo error! " + err);
  }

  function requestCoords() {
    // 유저의 위치정보를 가져옴. (위도/경도)
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }

  const API_KEY = "ef233b818e614738a76c72f77d5f03ba";
  function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const city = data.name;
        const temp = data.main.temp;
        const weather = data.weather[0];
        setCity(city);
        setTemp(temp);
        setWeather(weather.main);
      });
  }
  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <WeatherStyleBox>
      <span>
        {temp} @ {weather}
      </span>
      <span>{city}</span>
    </WeatherStyleBox>
  );
}

export default Weather;

const WeatherStyleBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  color: #fff;
  font-size: 15px;
  text-shadow: 2px 2px 3px #000;
  span {
    display: block;
    text-align: right;
  }
`;
