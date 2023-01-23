import react, { useState } from 'react';

const Todo = props => {

    const [done, setDone] = useState(false)
    
    const handleDelete = e => {
        e.preventDefault()
        props.toDelete(props.id)
    }



    return(
        <div>
            <form onSubmit = {handleDelete} style = {{display: "flex"}}>
                {
                    done == false?
                    <p>{props.todo}</p> :
                    <p style={{textDecoration: "line-through"}}>{props.todo}</p>
                }
                <input type="checkbox" onChange = {e => setDone(!done)}/>
                <input type = "submit" value = "Delete"/>
            </form>
        </div>
    )
}

export default Todo;