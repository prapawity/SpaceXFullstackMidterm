import { useState, useEffect } from "react";
import axios from "axios";

const divStyle = {
    background: `url('${process.env.PUBLIC_URL}/img/bg3.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    color: 'white',
}

const Home = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios("https://api.spacexdata.com/v3/info").then(
            (response) => {
              console.log(response.data)
              setData(response.data);
              setTimeout(function() {
                props.stateLoading(false)
               }, 1000);           
            }
          );
        };
        fetchData();
      }, []);

    return (
        <div className='home' style={divStyle}>
            <div className="homeComponent">
                <p className='home-txt'>
                    <h1 className='homeH1'><b>SpaceX</b></h1> 
                    {data && data.summary} <br />
                    <b>Address:</b> {data && data.headquarters && data.headquarters.address}, {data && data.headquarters && data.headquarters.city}, {data && data.headquarters && data.headquarters.state}  <br />
                    <b>CEO:</b> {data.ceo}
                </p>
            </div>
        </div>
    )
}

export default Home

