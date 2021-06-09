import React from 'react';
import { About } from '../about/About'
import {Link} from 'react-router-dom';

export function ContactUs(){
    // const userId = parseInt(pathname.replace("/About", ""));
    return(
        <>
        Contact us...
        <p>
        <Link to="/About">
            <button className="button-primary">About Tab</button>
        </Link>
        </p>
        </>
    )
}