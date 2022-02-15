import "leaflet/dist/leaflet.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Bootsrap from "./Bootsrap";
//
import axios from "axios";
import { useState, useEffect } from "react";
///////////////
export default function App() {
  //
  const [data, setData] = useState();
  //

  useEffect(() => {
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
    getData();
  }, []);

  // return  return  return  return  return  return
  return (
    <div className="App">
      <Header />
      <Container>
        <div>{data ? <Bootsrap data={data} /> : "loading..."}</div>
        <div>
          <Bootsrap data={data} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
// <div>{data  ? <Bootsrap data={data} /> : "loading..."}</div>
