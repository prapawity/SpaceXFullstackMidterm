import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useState, useEffect, useParams } from "react";
import { APIManager } from '../APIManager';

const divStyle = {
    backgroundColor: "#1c1444",
    height: "100%",
    minHeight: "100vh",
};
const itemStyle = {
    backgroundColor: 'transparent',
    borderTop: '1px solid #ddd',
    borderRadius: 0,
    color: '#fff'
}

const RocketDetail = (props) => {
    const [rocketID, setID] = useState(props.match.params.rocketID);
    const { loading, error, dataFetch: rocket } = APIManager(`/rockets/${rocketID}`);

    return (
        <div style={divStyle}>
            <Jumbotron style={{ backgroundColor: 'black', color: 'white', minHeight: '250px' }}>
                <Container>
                    <Row style={{ marginTop:'3rem', width: '100%'}}>
                        <h1>{rocket && rocket.rocket_name}</h1>
                        <p> {rocket && rocket.description} </p>
                    </Row>
                </Container>
            </Jumbotron>
            <Row style={{}}>
                <Col xs={12} sm={6}>
                    <img src="/img/rocket.gif" width='100%' />
                </Col>
                <Col xs={12} sm={6}>
                    <ListGroup variant="flush" >
                        <ListGroup.Item style={itemStyle}><b>Country:</b> {rocket && rocket.country}</ListGroup.Item>
                        <ListGroup.Item style={itemStyle}><b>Company:</b> {rocket && rocket.company}</ListGroup.Item>
                        <ListGroup.Item style={itemStyle} ><b>Height:</b>  {rocket && rocket.height.meters} meter/ {rocket && rocket.height.feet} feet </ListGroup.Item>
                        <ListGroup.Item style={itemStyle} ><b>Diameter:</b>  {rocket && rocket.diameter.meters} meter/ {rocket && rocket.diameter.feet} feet </ListGroup.Item>
                        <ListGroup.Item style={itemStyle}><b>Mass:</b> {rocket && rocket.mass.kg} kg/ {rocket && rocket.mass.lb} lb</ListGroup.Item>
                        <ListGroup.Item style={itemStyle}><b>Engines:</b> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Type- {rocket && rocket.engines.type} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Version- {rocket && rocket.engines.version} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Layout- {rocket && rocket.engines.layout}  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Propellant- {rocket && rocket.engines.propellant_1}/{rocket && rocket.engines.propellant_2} <br />
                        </ListGroup.Item>
                        <ListGroup.Item style={itemStyle}><b>Wikipedia:</b> <a href={rocket && rocket.wikipedia} target="_blank">Click This!</a></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}
export default RocketDetail;