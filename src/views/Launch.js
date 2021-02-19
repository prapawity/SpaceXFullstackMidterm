import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import axios from "axios";
import Modals from "../components/Modals";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
  width: "100%",
};

const Launch = (props) => {
  const [data, setData] = useState([]);
  const [dataShow, setShowData] = useState([]);
  const [showModal, setShow] = useState({ state: false, id: null });
  const [filter, setFilter] = useState({
    year: "Launch year",
    isSuccess: "Launch Success",
    rocket: "Rocket Name",
  });

  const update = (val, index = null) => {
    setShow({
      state: val,
      id: index,
    });
  };

  const updateFilter = (year, isSuccess, rocket) => {
    setFilter({
      year: year,
      isSuccess: isSuccess,
      rocket: rocket,
    });
    updateStateFilter(year, isSuccess, rocket)
  };

  const updateData = (datas) => {
    setData(datas)
  };

  const updateStateFilter = (year = filter.year, isSuccess = filter.isSuccess, rocket = filter.rocket) => {
    const yearData = data.filter((obj) => {
      return year === "Launch year" ? true : obj.launch_year === year;
    });
    const successData = data.filter((obj) => {
      return isSuccess === "Launch Success"
        ? true
        : (obj.launch_success == true ? "Success" : "Fail") === isSuccess;
    });
    const rocketData = data.filter((obj) => {
      return rocket === "Rocket Name"
        ? true
        : obj.rocket.rocket_name === rocket;
    });

    const resultAll = yearData
      .filter((x) => successData.includes(x))
      .filter((y) => rocketData.includes(y));
    console.log(
      data.length,
      year,
      isSuccess,
      rocket,
      yearData.length,
      successData.length,
      rocketData.length,
      "check"
    );
    setShowData(resultAll);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.spacexdata.com/v3/launches").then(
        (response) => {
          updateData(response.data);
          setTimeout(() => {
            props.stateLoading(false);
          }, 3000);
        }
      );
    };
    if (data.length == 0) {
        props.stateLoading(true);
        fetchData();
    } else {
        updateStateFilter()
    }
  }, [data]);

  return (
    <div style={divStyle}>
      <div style={{ marginTop: "40px" }}>
        <Filter updateFilter={updateFilter} />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {dataShow.map((launch, index) => (
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
          obj={dataShow[showModal.id]}
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
