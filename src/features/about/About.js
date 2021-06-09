import React, {useState} from 'react';
import Dashboard from '../dashboard/DashBoard'; 
import {useLocation} from 'react-router-dom';

export function About(){
    const { pathname } = useLocation();
    alert(pathname)

    const [ok, setOk] = useState('about text testing in Dashboard component ');
    
    const handleFunc = () =>{
    setOk("changed value on click")
    alert('about function testing in Dashboard component')
}
    return(
        <>
        About us...
        <br />
        <p><u>Below is DashBoard component</u></p>
        <br />
        <Dashboard
        ok = {ok}
        handleFunc = {handleFunc}
        />
        </>
    )
}