import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import loadingData from "../loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingScreen = (props) => {
  const emptyDiv = () => (<div className="empty"></div>);
  return (
    <div>
      {props.isLoading == null
        ? emptyDiv
        : props.isLoading == true
        ? (<div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              zIndex: "100"
            }}
          >
            <header className="App-header" style={{ width: "100%", height: "100%" }}>
              <FadeIn className="div-loading">
                <div style={{ display: "box", margin: "auto" }}>
                  <Lottie options={defaultOptions} height="auto" width="40%" />
                </div>
              </FadeIn>
            </header>
          </div>)
        : emptyDiv}
    </div>
  );
};

export default LoadingScreen;
