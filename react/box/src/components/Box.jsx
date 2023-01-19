import react, { useState } from 'react';

const Box = (props) => {
    return (
        <div style={{
            width: "50px",
            height: "50px", 
            margin: "10px", 
            background: props.color}}></div>
    )
}

export default Box;