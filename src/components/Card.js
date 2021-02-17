import { Panel } from 'rsuite'

const Card = (props) => {
    const { img, onImgOpenClick } = props;
    return (
        <Panel shaded bordered bodyFill style={{ display: 'flex', width: 240, color:'wheat' }}>
            <img src='/img/rocket.jpeg' height="240" onClick={() => {onImgOpenClick(img)}}/>
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