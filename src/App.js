import "./index.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import jsonData from "./Data.json";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L from "leaflet";

///////////////
export default function App() {
  //
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  // useEffect useEffect useEffect useEffect
  useEffect(() => {
    setData(jsonData);
  }, []);
  /////////////////
  useEffect(() => {
    if (data) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${data.location.country}`)
        .then((ress) => ress.json())
        .then((country) => setCountry(country))
        .catch((err) => console.log("country error is:", err));
    }
  }, [data]);

  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [3, -46]
  });
  // return  return  return  return  return  return
  return (
    <div className="App">
      <Card className="bg-dark text-white">
        <Header />
        <Card.Text>Find your IP and some info about your country</Card.Text>
        <div>
          {data && country ? (
            <>
              <div className="details">
                <span>
                  IP: <br /> {data.ip}
                </span>
                <span>
                  {" "}
                  Continent:
                  <br />
                  {country.region}, {country.subregion}
                </span>
                <span>
                  Country: <br /> {country.name}, {data.location.country},
                  <img
                    src={country.flag}
                    alt="no flag"
                    style={{
                      height: 20
                    }}
                  />
                </span>
                <span>
                  Region: <br /> {data.location.region}
                </span>
                <span>
                  City: <br /> {data.location.city}
                </span>
                <span>
                  Provider: <br /> {data.isp}
                </span>
                <span>
                  lat: <br /> {data.location.lat}
                </span>
                <span>
                  lng: <br /> {data.location.lng}
                </span>
                <span>
                  Timezone: <br /> {country.timezones}
                </span>
              </div>
              <br />
              <br />
              <MapContainer
                style={{ height: "80vh", width: "100%" }}
                center={[data.location.lat, data.location.lng]}
                zoom={13}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[data.location.lat, data.location.lng]}
                  icon={markerIcon}
                >
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
              <br />
            </>
          ) : (
            "loading..."
          )}
        </div>
      </Card>
      <br />
      <br />
      <br />
      <hr />

      <Container>
        <h1> Bootsrap Version</h1>
        <div>
          {data && country ? (
            <>
              <div>
                <Row>
                  <Col xs={1} md={1}>
                    IP: <br /> {data.ip}
                  </Col>

                  <Col xs={2} md={2}>
                    Continent:
                    <br />
                    {country.region}, {country.subregion}
                  </Col>

                  <Col xs={2} md={2}>
                    Country: <br /> {country.name}, {data.location.country},
                    <img
                      src={country.flag}
                      alt="no flag"
                      style={{
                        height: 20
                      }}
                    />
                  </Col>

                  <Col xs={1} md={1}>
                    {" "}
                    Region: <br /> {data.location.region}
                  </Col>

                  <Col xs={1} md={1}>
                    City: <br /> {data.location.city}
                  </Col>

                  <Col xs={2} md={2}>
                    Provider: <br /> {data.isp}
                  </Col>

                  <Col xs={1} md={1}>
                    lat: <br /> {data.location.lat}
                  </Col>

                  <Col xs={1} md={1}>
                    lng: <br /> {data.location.lng}
                  </Col>

                  <Col xs={2} md={2}>
                    {" "}
                    Timezone: <br /> {country.timezones}
                  </Col>
                </Row>
              </div>
              <br />
              <br />
              <Row>
                <Col xs={12} md={12}>
                  <MapContainer
                    style={{ height: "80vh", width: "100%" }}
                    center={[data.location.lat, data.location.lng]}
                    zoom={13}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                      position={[data.location.lat, data.location.lng]}
                      icon={markerIcon}
                    >
                      <Popup>Your Location</Popup>
                    </Marker>
                  </MapContainer>
                </Col>
              </Row>
              <br />
            </>
          ) : (
            "loading..."
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
