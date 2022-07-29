import React from "react";
import img1 from "../images/wp3415330-high-quality-wallpaper.jpg"
import img2 from "../images/wp8050744-lock-screen-pc-wallpapers.jpg"
import img3 from "../images/pexels-kammeran-gonzalezkeola-8258043.jpg"
import img4 from "../images/philipp-pilz-LmDtHyqCQb0-unsplash.jpg"
import img5 from "../images/pexels-pok-rie-2049422.jpg"
import img6 from "../images/1.jpg"
import img7 from "../images/2.jpg"
import img8 from "../images/3.jpg"
import img9 from "../images/4.jpg"

export default function Hero(){
    return(
        <div className='hero-con'>
            <div className='hero-grid'>
                <div className='grid grid-1'><img src={img1} alt=""/></div>
                <div className='grid grid-2'><img src={img2} alt=""/></div>
                <div className='grid grid-3'><img src={img3} alt=""/></div>
                <div className='grid grid-4'><img src={img4} alt=""/></div>
                <div className='grid grid-5'><img src={img5} alt=""/></div>
                <div className='grid grid-6'><img src={img6} alt=""/></div>
                <div className='grid grid-7'><img src={img7} alt=""/></div>
                <div className='grid grid-8'><img src={img8} alt=""/></div>
                <div className='grid grid-9'><img src={img9} alt=""/></div>
            </div>
            <div className='hro-info'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}