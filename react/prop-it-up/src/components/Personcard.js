import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            lastName : this.props.lastName,
            firstName : this.props.firstName,
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }

    birthday = () =>{
        this.setState({
            age: this.state.age+=1
        })
    }

    render() {
        const {lastName, firstName, age, hairColor} = this.state
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.birthday}>Birthday!!!!</button>
            </div>
        )
    }
}

export default PersonCard