import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
//
export default function Bootsrap(data) {
  //
  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
    iconSize: [22, 41],
  });
  console.log(data.data);
  return (
    <div>
      <div>
        {data ? (
          <Row>
            <Col sm>
              Region:
              <br />
              {data.data.region_name},
              <br />
              {data.data.region_code}
            </Col>
            <Col sm>
              Country: <br /> {data.data.country_name},
              <br />
              {data.data.country_code}
            </Col>
            <Col sm>
              City: <br /> {data.data.city},
              <br />
              {data.data.zip_code}
            </Col>
            <Col sm>
              lat: <br /> {data.data.latitude}
            </Col>
            <Col sm>
              lng: <br /> {data.data.longitude}
            </Col>
            <Col sm>
              Timezone: <br /> {data.data.time_zone}
            </Col>
          </Row>
        ) : (
          "loading..."
        )}
      </div>
      <br />
      <br />
      {data ? (
        <Row>
          <Col xs={12} md={12}>
            <MapContainer
              style={{ height: "80vh", width: "100%" }}
              center={[data.data.latitude, data.data.longitude]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[data.data.latitude, data.data.longitude]}
                icon={markerIcon}
              >
                <Popup>Your Internet Provider Server Location</Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      ) : (
        "loading..."
      )}
      <br />
    </div>
  );
}
