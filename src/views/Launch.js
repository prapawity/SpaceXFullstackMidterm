import axios from "axios";
import react, { useEffect, useState } from "react";
const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  paddingTop: "60px",
};
const Launch = () => {
  const [data, setData] = useState([]);
  const [showContent, setShowContent] = useState(false);

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
