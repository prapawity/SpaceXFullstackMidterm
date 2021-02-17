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
      <Filter />
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', marginTop:'10px'}}>
        {data.map(launch => (
          <div style={{ paddingLeft: '10px', paddingBottom: '20px' }}>
            <Card obj={launch} state={'isLaunch'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Launch;
