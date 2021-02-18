
import { Button, Card } from 'react-bootstrap'
import TextTruncate from 'react-text-truncate'


const CardComponent = (props) => {
    console.log(props)
    const updateModal = (val) => {
        props.onClick(val, props.id)
    }

    if (props.obj == null) {
        return (
            <div></div>
        )
    } else {
        if (props.state == 'isRocket') {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button onClick={updateModal} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                // <Panel shaded bordered bodyFill style={{ display: 'flex', width: 240, color: 'wheat' }}>
                //     <img src='/img/rocket.jpeg' height="240" onClick={updateModal}/>
                //     <Panel>
                //         <h3>{props.obj.rocket_name}</h3>
                //         <TextTruncate
                //             line={4}
                //             element="span"
                //             truncateText="…"
                //             text={props.obj.description}
                //             textTruncateChild={<a onClick={updateModal}>Read more</a>}
                //         />
                //     </Panel>
                // </Panel>
            )
        } else if (props.state == 'isLaunch') {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button onClick={updateModal} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                // <Panel shaded bordered bodyFill style={{ display: 'flex', width: 270, color: 'wheat', minHeight: '420px', paddingTop: '15px' }}>
                //     <div style={{ marginLeft: '15px' }}>
                //         <img src={props.obj.links.mission_patch == null ? '/img/white.png' : props.obj.links.mission_patch} height='240' onClick={updateModal} />
                //     </div>
                //     <Panel>
                //         <h4>{props.obj.mission_name}</h4>
                //         <TagGroup>
                //             <Tag>{props.obj.launch_year}</Tag>
                //             <Tag>{props.obj.launch_success == true ? 'SUCCESS' : 'FAILED'}</Tag>
                //             <Tag>{props.obj.rocket.rocket_name}</Tag>
                //         </TagGroup>
                //         <div style={{ marginTop: '10px' }}><Button color="blue" size="xs" onClick={updateModal}>Read more</Button></div>
                //     </Panel>
                // </Panel>
            )
        }
    }
}

export default CardComponent