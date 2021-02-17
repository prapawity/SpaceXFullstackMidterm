import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { FlexboxGrid, Col } from "rsuite";
import axios from "axios";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
};

const Launch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios("https://api.spacexdata.com/v3/launches").then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    };

    fetchData();
  }, []);
  return (
    <div style={divStyle}>
      <ul>
        {data.map((launch) => (
          <div>
            <h1>{launch.flight_number}</h1>
            <h2>{launch.mission_name}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Launch;
