import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../components/Card';

const divStyle = {
    backgroundColor: 'black',
    height: '100vh',
    minHeight: '100vh',
    paddingTop: '60px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
}

const Rocket = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
                'https://api.spacexdata.com/v3/rockets',
            )
            setData(result.data)
        };
        fetchData();
    },
        []);

    return (
        <div style={divStyle}>
            {data.map(rocket => (
                <div style={{ marginTop: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Card obj={rocket} state={'isRocket'} />
                </div>
            ))}
        </div>
    )
}

export default Rocket;
