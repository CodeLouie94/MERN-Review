
const Button = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.buttonPress()
    } 

    return(
        <form onSubmit = {handleSubmit}>
            <input type="submit" value="Fetch" />
        </form>
    )
}


export default Button