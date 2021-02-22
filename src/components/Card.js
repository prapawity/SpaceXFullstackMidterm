import { Link } from "react-router-dom";
import { Button, Card, Badge } from 'react-bootstrap'
import TextTruncate from 'react-text-truncate'


const CardComponent = (props) => {
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
                    <Card.Img variant="top" src="/img/rocket.jpeg" />
                    <Card.Body>
                        <Card.Title>{props.obj.rocket_name}</Card.Title>
                        <Card.Text>
                            <TextTruncate
                                line={4}
                                element="span"
                                truncateText="…"
                                text={props.obj.description}
                                textTruncateChild={<a ></a>}
                            />
                        </Card.Text>
                        <Link to={`/rockets/${props.obj.rocket_id}`}><Button variant="outline-primary" block>Read more</Button></Link>
                    </Card.Body>
                </Card>
            )
        } else if (props.state == 'isLaunch') {
            return (
                <Card text='white' border="light" style={{ width: '18rem', minHeight: '430px', backgroundColor: 'black'}}>
                    <div style={{maxWidth:'240px', marginLeft: '1.5rem', marginTop: '1rem' }}>
                    <Card.Img variant="top" src={props.obj.links.mission_patch == null ? '/img/white.png' : props.obj.links.mission_patch} 
                        onClick={updateModal} 
                        height='240'
                        />
                    </div>
                    <Card.Body>
                        <Card.Title>{props.obj.mission_name}</Card.Title>
                        <Card.Text>
                            <Badge pill variant="primary">
                                {props.obj.launch_year}
                            </Badge>{' '}
                            <Badge pill variant="secondary">
                                {props.obj.launch_success == true ? 'SUCCESS' : 'FAILED'}
                            </Badge>{' '}
                            <Badge pill variant="primary">
                                {props.obj.rocket.rocket_name}
                            </Badge>{' '}
                        </Card.Text>
                        <Button onClick={updateModal} variant="outline-primary" size="sm" block>Read more</Button>
                    </Card.Body>
                </Card>

            )
        }
    }
}

export default CardComponent