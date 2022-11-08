import "../css/styling.css"
import React from "react"
import { Icon } from 'semantic-ui-react'
import image from  '../image/elephant.jpg'; 

const Try=(props)=>{
    return(
        <div>
        <div className="styling">hello
        <Icon name='home' size='massive' />
        <Icon name='audio description' size='massive' />
        </div>

        <div class="ui cards">
        <div class="card">
        <div class="content">
        <img class="right floated mini ui image" src={image}/>
        <div class="header">
        Elliot Fu
        </div>
        </div>
        </div>

        <div class="extra content">
        <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
        </div>
        </div>

        <Icon.Group size='huge'>
        <Icon size='big' name='circle outline' />
        <Icon name='user' />
        <h1>{props.name}</h1>
        </Icon.Group>
        </div>
        </div>


    )
}
export default Try;