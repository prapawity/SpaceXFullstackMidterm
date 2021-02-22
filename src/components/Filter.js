import { useState } from 'react'
import { Dropdown, DropdownButton, ButtonGroup, Col, Container, Row } from "react-bootstrap"


const Filter = (props) => {
    const [launchYear, setLaunchYear] = useState("Launch year")
    const [launchSuccess, setLaunchSuccess] = useState("Launch Success")
    const [rocketName, setRocketName] = useState("Rocket Name")
    const updateLaunchYear = (year) => {
        props.updateFilter(year, launchSuccess, rocketName)
        setLaunchYear(year)
    }
    const updateLaunchSuccess = (isSuccess) => {
        props.updateFilter(launchYear, isSuccess, rocketName)
        setLaunchSuccess(isSuccess)
    }
    const updateRocketName = (name) => {
        props.updateFilter(launchYear, launchSuccess, name)
        setRocketName(name)
    }

    const allLaunchYear = ["Launch year","2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
    const allLaunchSuccess = ["Launch Success", "Success", "Fail"]
    const allRockets = ["Rocket Name", "Falcon 1", "Falcon 9", "Falcon Heavy"]
    const components = [
        ({ "type": launchYear, "data": allLaunchYear, "updateData": updateLaunchYear }), 
        ({ "type": launchSuccess, "data": allLaunchSuccess, "updateData": updateLaunchSuccess }), 
        ({ "type": rocketName, "data": allRockets, "updateData": updateRocketName })]
    return (
        <Container>
            <Row>
                {components.map((component, index) => (
                    <Col key={index} xs={12} sm={4} style={{ marginBottom: '10px' }}>
                        <Dropdown as={ButtonGroup} style={{ margin: '5px', width: "100%" }} >
                            <DropdownButton id="dropdown-item-button" title={component.type} variant="Secondary" size="sm" style={{ width: "100%" }} onSelect={component.updateData} >
                                {component.data.map((launch, indexComponent) => (<Dropdown.Item key={indexComponent} eventKey={launch} as="button">{launch}</Dropdown.Item>))}
                            </DropdownButton>
                        </Dropdown>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
export default Filter