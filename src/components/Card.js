import { useState } from 'react'
import { Panel, Tag, TagGroup, Button } from 'rsuite'
import TextTruncate from 'react-text-truncate'


const Card = (props) => {

    console.log(props)

    if (props.obj == null) {
        return (
            <div></div>
        )
    } else {
        if (props.state == 'isRocket') {
            return (
                <Panel shaded bordered bodyFill style={{ display: 'flex', width: 240, color: 'wheat' }}>
                    <img src='/img/rocket.jpeg' height="240" />
                    <Panel>
                        <h3>{props.obj.rocket_name}</h3>
                        <TextTruncate
                            line={4}
                            element="span"
                            truncateText="…"
                            text={props.obj.description}
                            textTruncateChild={<a href="#">Read more</a>}
                        />
                    </Panel>
                </Panel>
            )
        } else if (props.state == 'isLaunch') {

            return (
                <Panel shaded bordered bodyFill style={{ display: 'flex', width: 270, color: 'wheat', minHeight:'420px',paddingTop:'15px'}}>
                    <div style={{marginLeft: '15px'}}>
                        <img src={props.obj.links.mission_patch == null ? '/img/white.png' : props.obj.links.mission_patch} height='240'/>
                    </div>
                    <Panel>
                        <h4>{props.obj.mission_name}</h4>
                        <TagGroup>
                            <Tag>{props.obj.launch_year}</Tag>
                            <Tag>{props.obj.launch_success == true ? 'SUCCESS' : 'FAILED'}</Tag>
                            <Tag>{props.obj.rocket.rocket_name}</Tag>
                        </TagGroup>
                        <div style={{marginTop: '10px'}}><Button color="blue" size="xs">Read more</Button></div>
                    </Panel>
                </Panel>
            )
        }
    }
}

export default Card