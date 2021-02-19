import React from 'react'
const divStyle = {
    background: `url('${process.env.PUBLIC_URL}/img/bg3.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    color: 'white',
}

const Home = () => {
    return (
        <div className='home' style={divStyle}>
            <div className="homeComponent">
                <p className='home-txt'>
                    <h1><b>SpaceX</b></h1> 
                    Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation
                    services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with 
                    the goal of reducing space transportation costs to enable the colonization of Mars.
                </p>
            </div>
        </div>
    )
}

export default Home

