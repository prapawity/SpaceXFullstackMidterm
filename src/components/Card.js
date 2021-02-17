import { useState } from 'react'
import { Panel, Tag, TagGroup } from 'rsuite'


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
                        <p>
                            <small>{props.obj.description}</small>
                        </p>
                    </Panel>
                </Panel>
            )
        } else if (props.state == 'isLaunch') {
            
            return (
                <Panel shaded bordered bodyFill style={{ display: 'flex', width: 240, color: 'wheat' }}>
                    <img src='/img/rocket.jpeg' height="240" />
                    <Panel>
                        <h3>{props.obj.mission_name}</h3>
                        <TagGroup>
                            <Tag>{props.obj.launch_year}</Tag>
                            <Tag>{props.obj.launch_success == true ? 'true' : 'false'}</Tag>
                        </TagGroup>
                    </Panel>
                </Panel>
            )
        }
    }
}

export default Card