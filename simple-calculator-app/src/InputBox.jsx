import React from 'react';
import './cal-style-sheet.css';
class InputBox extends React.Component{
    render(){
        return(
             <input className ="form-control input-sm" type= "text" id = "input_value"/>
        );
    }
}

export default InputBox;