import React, { useState } from 'react'

const Form = props => {

    const [todo, setTodo] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.addTodo(todo)
        setTodo("")
    }
    
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange = {e => setTodo(e.target.value)} value ={todo}/>
                <input type = "submit" value="add"/>
            </form>
        </div>
    )
}

export default Form;