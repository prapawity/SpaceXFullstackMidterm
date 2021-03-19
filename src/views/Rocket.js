import { useState } from "react";
import { APIManager } from "../APIManager";
import Card from "../components/Card";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
};

const Rocket = (props) => {
  const { loading, error, dataFetch: rocket } = APIManager(`/rockets`);
  const [shouldLoading, setShouldLoading] = useState(null);
  const [data, setData] = useState([]);

  if (shouldLoading != loading) {
    setData(rocket);
    setShouldLoading(loading)
    if (loading == false) {
      setTimeout(() => props.stateLoading(false), 1000)
    }else {
      props.stateLoading(true);
    }
  } else if (shouldLoading == null) {
    props.stateLoading(true);
  }

  
  return (
    <div style={divStyle}>
      {data && data.map((rocket, index) => (
        <div
          key={index}
          style={{
            marginTop: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Card obj={rocket} state={"isRocket"} id={index} />
        </div>
      ))}
    </div>
  );
};

export default Rocket;
