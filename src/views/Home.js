import React from 'react'
import DefaultButton from '../components/DefaultButton'
import { Nav, Panel, PanelGroup } from 'rsuite';
import { render } from 'react-dom';
import Card from '../components/Card';

const divStyle = {
    background: `url('${process.env.PUBLIC_URL}/img/bg.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    paddingTop: '60px'
}
const Home = () => {
    return (
        <div style={divStyle}>
            
        </div>
    )
}

export default Home

