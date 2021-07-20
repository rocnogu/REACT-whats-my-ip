import "./index.css";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import jsonData from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Bootsrap from "./Bootsrap";

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

  // return  return  return  return  return  return
  return (
    <div className="App">
      <Header />
      <Container>
        <div>
          {data && country ? (
            <Bootsrap data={data} country={country} />
          ) : (
            "loading..."
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
