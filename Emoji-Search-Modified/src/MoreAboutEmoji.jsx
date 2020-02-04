import React from 'react';
import filterEmoji from "./filterEmoji";
import {useParams} from 'react-router-dom';


export const MoreAboutEmoji =(props) =>{
    const { title } = useParams();
    
    const emoji = filterEmoji(title,1)[0];
    const codePointHex = emoji.symbol.codePointAt(0).toString(16);
    console.log(title,codePointHex);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return(
        <div>
            <header className="component-header">
                <img
                src = {src}
                width="100"
                height="100"
                alt=""
                />
            </header>
            <center>
                <h3 className = "card-title">{emoji.title}</h3>
                <h5 className = "card-title">{emoji.symbol}</h5>
                <p className = "car-text">{emoji.keywords}</p>
                <button className = "copy-to-clipboard" data-clipboard-text = {emoji.title} onClick = {(event)=>event.target.innerHTML = "Copied" } > Copy to clipboard</button>
            </center>
            
        </div>
    );
}