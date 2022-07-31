import React from "react";
import './style.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Separate from "./components/Separate";

export default function App(){
    let details = Separate.map(data => {
        return <Main 
                    id={data.id}
                    {...data}
                />
    })
        return(
            <div className="container">
                <Navbar />
                {details}
            </div>
        )
}