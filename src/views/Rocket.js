import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../components/Card';

const divStyle = {
    backgroundColor: 'black',
    height: '100vh',
    minHeight: '100vh',
    paddingTop: '60px'
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
            <ul>
                {data.map(rocket => (
                    <div>
                        <Card obj={rocket} state={'isRocket'} />
                    </div>
                    
                ))}
            </ul>
        </div>
    )
}

export default Rocket;
