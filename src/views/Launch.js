import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import axios from "axios";
import Modals from "../components/Modals";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
};

const Launch = () => {
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
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        {data.map((launch, index) => (
          <div style={{ paddingLeft: "10px", paddingBottom: "20px" }}>
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
      {/* <Modals showModal={showModal} updateModalValue={update} state={'isLaunch'} /> */}
    </div>
  );
};

export default Launch;
