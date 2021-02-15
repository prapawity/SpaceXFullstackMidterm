import { Panel } from 'rsuite'

const Card = () => {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'flex', width: 240, color:'wheat' }}>
            <img src={process.env.PUBLIC_URL + './img/rocket.jpeg'} height="240" />
            <Panel>
                <h3>Name</h3>
                <p>
                    <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                </p>
            </Panel>
        </Panel>
    )
}
export default Card