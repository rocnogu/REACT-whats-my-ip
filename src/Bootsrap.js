import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
//

export default function Bootsrap({ data, country }) {
  //
  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
    iconSize: [22, 41]
  });
  return (
    <div>
      <div>
        <h1> Bootsrap Version</h1>
        <Row>
          <Col sm>
            IP: <br /> {data.ip}
          </Col>

          <Col sm>
            Continent:
            <br />
            {country.region}, {country.subregion}
          </Col>

          <Col sm>
            Country: <br /> {country.name}, {data.location.country},
            <img
              src={country.flag}
              alt="no flag"
              style={{
                height: 20
              }}
            />
          </Col>

          <Col sm>
            Region: <br /> {data.location.region}
          </Col>

          <Col sm>
            City: <br /> {data.location.city}
          </Col>

          <Col sm>
            Provider: <br /> {data.isp}
          </Col>

          <Col sm>
            lat: <br /> {data.location.lat}
          </Col>

          <Col sm>
            lng: <br /> {data.location.lng}
          </Col>

          <Col sm>
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
    </div>
  );
}
