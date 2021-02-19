import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Modals from "../components/Modals";

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
  const [data, setData] = useState([]);
  const [showModal, setShow] = useState({ state: false, id: null });

  const update = (val, index = null) => {
    setShow({
      state: val,
      id: index,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.spacexdata.com/v3/rockets").then(
        (response) => {
          console.log(props);
          setData(response.data);
          setTimeout(function() {
            props.stateLoading(false)
           }, 3000);           
        }
      );
    };
    props.stateLoading(true);
    fetchData();
  }, []);

  return (
    <div style={divStyle}>
      {data.map((rocket, index) => (
        <div
          key={index} style={{
            marginTop: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginLeft: "10px",
            marginRight: "10px"
          }}
        >
          <Card obj={rocket} state={"isRocket"} onClick={update} id={index} />
        </div>
      ))}
      {showModal.id != null ? (
        <Modals
          obj={data[showModal.id]}
          showModal={showModal}
          updateModalValue={update}
          state={"isRocket"}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Rocket;
