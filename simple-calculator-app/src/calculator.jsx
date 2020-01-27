/* eslint no-eval: 0 */
import React from 'react';
import Button from './button.jsx';

class Calculator extends React.Component{
    
    calculateValues = (id) =>{  
        let input = document.getElementById(id).value; 
        let answer = eval(input);
        document.getElementById(id).value = answer;
    }
    clearBox = (id)=>{
        document.getElementById(id).value = null;
    }
    putNumbersAndOperators = (type) =>{
        if(type === "**"){
            type = "^";
        }  
        debugger
        document.getElementById("input_value").value += type;
    }
    render(){
        return(
            <Button putNumbersAndOperators = {this.putNumbersAndOperators} calculateValues = {this.calculateValues} clearBox = {this.clearBox} />
        );
    }    
}
export default Calculator;