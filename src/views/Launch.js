import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import axios from "axios";
import Modals from "../components/Modals";
import { Row, Col, Container } from "react-bootstrap";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
  width: "100%"
};

const Launch = (props) => {
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
      const result = await axios("https://api.spacexdata.com/v3/launches").then(
        (response) => {
          setData(response.data);
          setTimeout(function () {
            props.stateLoading(false);
          }, 3000);
        }
      );
    };
    props.stateLoading(true);
    fetchData();
  }, []);

  return (
    <div style={divStyle}>
      <div style={{ marginTop: "40px" }}>
        <Filter />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {data.map((launch, index) => (
          <div
            key={index}
            style={{ paddingLeft: "10px", paddingBottom: "20px" }}
          >
            <Card obj={launch} state={"isLaunch"} onClick={update} id={index} />
          </div>
        ))}
      </div>
      {showModal.id != null ? (
        <Modals
          obj={data[showModal.id]}
          showModal={showModal}
          updateModalValue={update}
          state={"isLaunch"}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default Launch;
