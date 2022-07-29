import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

export default function Navbar(){
    return(
        <nav>
            <div className='nav-logo'>
                <h2><FontAwesomeIcon icon={faBookmark} className='icon'></FontAwesomeIcon>airbnb</h2>
            </div>
        </nav>
    )
}