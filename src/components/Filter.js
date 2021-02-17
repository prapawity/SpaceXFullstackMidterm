import { Dropdown, ButtonToolbar } from 'rsuite';


const divStyle = {
    backgroudColor: 'wheat',
    paddingTop: '40px',
    paddingLeft: '25px'
}

const Filter = (props) => {
    return (
        <ButtonToolbar style={divStyle}>
            <Dropdown title="Launch year" >
                <Dropdown.Item>2006</Dropdown.Item>
                <Dropdown.Item>2007</Dropdown.Item>
                <Dropdown.Item>2008</Dropdown.Item>
                <Dropdown.Item>2009</Dropdown.Item>
                <Dropdown.Item>2010</Dropdown.Item>
                <Dropdown.Item>2012</Dropdown.Item>
                <Dropdown.Item>2013</Dropdown.Item>
                <Dropdown.Item>2014</Dropdown.Item>
                <Dropdown.Item>2015</Dropdown.Item>
                <Dropdown.Item>2016</Dropdown.Item>
                <Dropdown.Item>2018</Dropdown.Item>
                <Dropdown.Item>2019</Dropdown.Item>
                <Dropdown.Item>2020</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Launch success" >
                <Dropdown.Item>Success</Dropdown.Item>
                <Dropdown.Item>Failed</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Rocket name" >
                <Dropdown.Item>Falcon 1</Dropdown.Item>
                <Dropdown.Item>Falcon 9</Dropdown.Item>
                <Dropdown.Item>Falcon Heavy</Dropdown.Item>
            </Dropdown>
        </ButtonToolbar>
    )
}
export default Filter