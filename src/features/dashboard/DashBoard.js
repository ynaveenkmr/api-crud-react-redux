import React from 'react';

export default function Dashboard(props){
    return(
        <>
        Dashboard...
        <p>{props.ok}</p>
       <p><button onClick={props.handleFunc}>props function on click test</button></p>
        </>
    )
}