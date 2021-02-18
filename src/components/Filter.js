import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"





const Filter = (props) => {
    return (
        <div>
            <Dropdown as={ButtonGroup} style={{ marginLeft: '1.5rem' }}>
                <DropdownButton id="dropdown-item-button" title="Launch year" variant="Secondary" size="sm"  style={{ marginRight: '10px' }}>
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

                <DropdownButton id="dropdown-item-button" title="Launch success" variant="Secondary"  size="sm" style={{ marginRight: '10px' }}>
                    <Dropdown.Item as="button">Success</Dropdown.Item>
                    <Dropdown.Item as="button">Fail</Dropdown.Item>
                </DropdownButton>

                <DropdownButton id="dropdown-item-button" title="Rocket name" variant="Secondary"  size="sm" style={{ marginRight: '10px' }}>
                    <Dropdown.Item as="button">Falcon 1</Dropdown.Item>
                    <Dropdown.Item as="button">Falcon 9</Dropdown.Item>
                    <Dropdown.Item as="button">Falcon Heavy</Dropdown.Item>
                </DropdownButton>
            </Dropdown>

        </div>

    )
}
export default Filter