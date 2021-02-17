import { Dropdown } from 'rsuite';


const divStyle = {
    backgroudColor: 'wheat',
    paddingTop: '40px',
    paddingLeft: '60px'
}

const Filter = (props) => {
    return (
        <Dropdown title="Filter by" style={divStyle}>
            <Dropdown.Item>Launch year</Dropdown.Item>
            <Dropdown.Item>Launch success</Dropdown.Item>
            <Dropdown.Item>Rocket name</Dropdown.Item>
        </Dropdown>

    )
}
export default Filter