import "./index.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // this was missing
///////////////
import L from "leaflet";
L.Icon.Default.imagePath = "leaflet_images/";
///////////////
///////////////

const { REACT_APP_GEOLOCATION_IP_API_KEY } = process.env;
console.log(REACT_APP_GEOLOCATION_IP_API_KEY);
export default function App() {
  //
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  //
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${REACT_APP_GEOLOCATION_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("data erros is:", err));
  }, []);
  console.log("this is the data", data);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${data.location.country}`)
      .then((res) => res.json())
      .then((country) => setCountry(country))
      .catch((err) => console.log("country erros is:", err));
  }, [data]);

  //
  console.log("this is the country", country);
  // return
  return (
    <div className="App">
      {data ? (
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
          <MapContainer
            style={{ height: "80vh", width: "100%" }}
            center={[data.location.lat, data.location.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.location.lat, data.location.lng]}>
              <Popup></Popup>
            </Marker>
          </MapContainer>
          <br />
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}
