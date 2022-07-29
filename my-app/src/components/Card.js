import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/2.jpg";
import img2 from "../images/1.jpg"
import img3 from "../images/3.jpg"

export default function Card(){
    return(
        <div className='card-con'>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={img1} alt=""/>
                    <div className='prop'><p>SOLD OUT</p></div>
                </div>
                <div className='card-info'>
                    <small><FontAwesomeIcon icon={faStar} className='icon'></FontAwesomeIcon> 5.0 (6) • USA</small>
                    <p>Life lessons with Katie Zaferes</p>
                    <h5>From $136 <span> / person</span></h5>
                </div>
            </div>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={img2} alt=""/>
                    <div className='prop'><p>ONLINE</p></div>
                </div>
                <div className='card-info'>
                    <small><FontAwesomeIcon icon={faStar} className='icon'></FontAwesomeIcon> 5.0 (6) • USA</small>
                    <p>Life lessons with Katie Zaferes</p>
                    <h5>From $136 <span> / person</span></h5>
                </div>
            </div>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={img3} alt=""/>
                </div>
                <div className='card-info'>
                    <small><FontAwesomeIcon icon={faStar} className='icon'></FontAwesomeIcon> 5.0 (6) • USA</small>
                    <p>Life lessons with Katie Zaferes</p>
                    <h5>From $136 <span> / person</span></h5>
                </div>
            </div>
        </div>
    )
}