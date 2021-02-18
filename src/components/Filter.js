import { Dropdown, DropdownButton, ButtonGroup, Col, Container, Row } from "react-bootstrap"





const Filter = (props) => {
    return (
        <Container>
            <Row>

                <Col xs={12} sm={4} style={{ marginBottom: '10px'}}>
                    <Dropdown as={ButtonGroup} style={{ margin: '5px', width: "100%"}}>
                        <DropdownButton id="dropdown-item-button" title="Launch year" variant="Secondary" size="sm" style={{width: "100%"}}>
                            <Dropdown.Item as="button">2006</Dropdown.Item>
                            <Dropdown.Item as="button">2007</Dropdown.Item>
                            <Dropdown.Item as="button">2008</Dropdown.Item>
                            <Dropdown.Item as="button">2009</Dropdown.Item>
                            <Dropdown.Item as="button">2010</Dropdown.Item>
                            <Dropdown.Item as="button">2012</Dropdown.Item>
                            <Dropdown.Item as="button">2013</Dropdown.Item>
                            <Dropdown.Item as="button">2014</Dropdown.Item>
                            <Dropdown.Item as="button">2015</Dropdown.Item>
                            <Dropdown.Item as="button">2016</Dropdown.Item>
                            <Dropdown.Item as="button">2018</Dropdown.Item>
                            <Dropdown.Item as="button">2019</Dropdown.Item>
                            <Dropdown.Item as="button">2020</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={4} style={{ marginBottom: '10px'}}>
                    <Dropdown as={ButtonGroup} style={{ margin: '5px', width: "100%"}}>
                        <DropdownButton id="dropdown-item-button" title="Launch success" variant="Secondary" size="sm" style={{width: "100%"}}>
                            <Dropdown.Item as="button">Success</Dropdown.Item>
                            <Dropdown.Item as="button">Fail</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={4} style={{ marginBottom: '10px'}}>
                    <Dropdown as={ButtonGroup} style={{ margin: '5px', width: "100%"}}>
                        <DropdownButton id="dropdown-item-button" title="Rocket name" variant="Secondary" size="sm" style={{width: "100%"}}>
                            <Dropdown.Item as="button">Falcon 1</Dropdown.Item>
                            <Dropdown.Item as="button">Falcon 9</Dropdown.Item>
                            <Dropdown.Item as="button">Falcon Heavy</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </Col>

            </Row>
        </Container>

    )
}
export default Filter