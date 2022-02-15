import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
///////////////
export default function Map(data) {
  //
  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
    iconSize: [22, 41],
  });
  console.log(data.data);
  // return  return  return  return  return  return
  return (
    <div>
      <div>
        {data ? (
          <Row>
            <Col sm>
              <p>Region:</p>
              <p>{data.data.region_name},</p>
              <p>{data.data.region_code}</p>
            </Col>
            <Col sm>
              <p>Country:</p>
              <p>{data.data.country_name},</p>
              <p> {data.data.country_code}</p>
            </Col>
            <Col sm>
              <p>City:</p>
              <p>{data.data.city},</p>
              <p> {data.data.zip_code}</p>
            </Col>
            <Col sm>
              <p> latitude:</p>
              <p> {data.data.latitude}</p>
            </Col>
            <Col sm>
              <p>longitude:</p>
              <p>{data.data.longitude}</p>
            </Col>
            <Col sm>
              <p> Timezone: </p>
              <p> {data.data.time_zone}</p>
            </Col>
          </Row>
        ) : (
          "loading Map..."
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
