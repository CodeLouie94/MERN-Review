import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Yo this is a message from state",
            buttonstate: "leave"
        }

    }

    leaving = () => {
        if(this.state.message === "Yo this is a message from state"){
            this.setState({
                message : "alright i'll see ya later!",
                buttonstate: "im back"
                })
        }else if(this.state.message === "alright i'll see ya later!"){
            this.setState({
                message: "Yo this is a message from state",
                buttonstate: "leave"
            })
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.leaving}>{this.state.buttonstate}</button>
            </div>
        )
    }
}

export default Message