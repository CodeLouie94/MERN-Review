import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")
    }

    return(
        <div>
            <form onSubmit = {createUser}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange ={ (e) => setFirstname(e.target.value) } value={ firstname } />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange ={ (e) => setLastname(e.target.value) } value={ lastname } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange ={ (e) => setEmail(e.target.value) } value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange ={ (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange ={ (e) => setConfirmpassword(e.target.value) } value={ confirmpassword } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h1>Your Form</h1>
                <p>Firstname: {firstname}</p>
                <p>Lastname: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
        
    )
}

export default Form