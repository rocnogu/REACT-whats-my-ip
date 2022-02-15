import "leaflet/dist/leaflet.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Map from "./Map";
//
import axios from "axios";
import { useState, useEffect } from "react";
///////////////
export default function App() {
  //
  const [data, setData] = useState();
  //
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.freegeoip.app/json/?apikey=0fbbc510-8e75-11ec-afd4-a744afa5e18c"
      );
      const result = response.data;
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // return  return  return  return  return  return
  return (
    <div className="App">
      <Header />
      <Container>
        <div>{data ? <Map data={data} /> : "loading..."}</div>
      </Container>
      <Footer />
    </div>
  );
}
