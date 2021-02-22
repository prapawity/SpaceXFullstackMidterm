import { useState } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import axios from "axios";
import Modals from "../components/Modals";
import InfiniteScroll from "react-infinite-scroll-component";
import { APIManager } from "../APIManager";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  minHeight: "100vh",
  paddingTop: "60px",
  width: "100%",
};

const Launch = (props) => {
  const { loading, error, dataFetch: launchs } = APIManager(`/launches`);
  const [shouldLoading, setShouldLoading] = useState(null);
  const [data, setData] = useState([]);
  const [dataShow, setShowData] = useState([]);
  const [showModal, setShow] = useState({ state: false, id: null });
  const [indexShowing, updateIndex] = useState(9)
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
    updateStateFilter(year, isSuccess, rocket, true);
  };

  const fetchNew = () => {
    setTimeout(() => {
      if ((indexShowing + 10) < 111) {
        updateIndex(indexShowing+10)
        updateStateFilter();
      } else {
        updateIndex(110)
        updateStateFilter();
      }
    }, 1000);
  };

  const updateData = (datas) => {
    setData(datas);
    updateIndex(10)
    setShowData(datas)
  };

  const updateStateFilter = (
    year = filter.year,
    isSuccess = filter.isSuccess,
    rocket = filter.rocket,
    ShouldUpdateIndex = false
  ) => {
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
      if (ShouldUpdateIndex) {
        updateIndex(resultAll.length == 111 ? 10 : resultAll.length)
      }
    setShowData(resultAll);
  };

  if (shouldLoading != loading) {
    updateData(launchs);
    setShouldLoading(loading);
    if (loading == false) {
      setTimeout(() => props.stateLoading(false), 1000);
    } else {
      props.stateLoading(true);
    }
  }

  return (
    <div style={divStyle}>
      <div style={{ marginTop: "40px" }}>
        <Filter updateFilter={updateFilter} />
      </div>
      <InfiniteScroll
        dataLength={dataShow && indexShowing}
        next={fetchNew}
        hasMore={true}
        loader={indexShowing == 110 ? <p></p> : <h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dataShow && dataShow.filter((_, stateIndex) => {
            return stateIndex < indexShowing
          }).map((launch, index) => (
            <div
              key={index}
              style={{ paddingLeft: "10px", paddingBottom: "20px" }}
            >
              <Card
                obj={launch}
                state={"isLaunch"}
                onClick={update}
                id={index}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>

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
