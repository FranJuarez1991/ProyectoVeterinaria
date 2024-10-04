import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Card, Row, Col } from "react-bootstrap";
import "../css/Clima.css"; // Asegúrate de crear este archivo

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const apiKey = "0b3faf7e8253a23e8c15b8076e4ec357";

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handlePositionSuccess,
        handlePositionError
      );
    } else {
      setError("Geolocalización no es soportada por este navegador.");
    }
  };

  const handlePositionSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    await fetchWeather(latitude, longitude);
  };

  const handlePositionError = (error) => {
    console.log(error);
    setError("No se pudo obtener la ubicación.");
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      console.log(err.response ? err.response.data : err.message);
      setError("Error al obtener el clima.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="weather-container d-flex justify-content-center align-items-center">
      {error && <Alert variant="danger">{error}</Alert>}

      {weatherData && (
        <Card className="mt-3 weather-card" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Clima en {weatherData.name}</Card.Title>
            <Card.Text>
              <Row>
                <Col md={6}>
                  <strong>Temperatura:</strong> {weatherData.main.temp} °C
                </Col>
                <Col md={6}>
                  <strong>Humedad:</strong> {weatherData.main.humidity}%
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Descripción:</strong>{" "}
                  {weatherData.weather[0].description}
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description}
                    className="weather-icon"
                  />
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Weather;
