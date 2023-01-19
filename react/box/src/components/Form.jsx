import react, { useState } from 'react';

const Form = (props) => {

    const [color, setColor] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        props.addColor(color);
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <p>Color</p>
                <input type="text" onChange = {e => setColor(e.target.value)}/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Form;