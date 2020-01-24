import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import 'bootstrap/dist/css/bootstrap.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sumValue : ""
        };
        
    }
    calculateValues = () =>{  
        let input = document.getElementById("inputvalue").value; 
        let answer = eval(input);
        this.setState({
            sumValue : toString(answer)
        });
        console.log(this.state.sumValue);
        document.getElementById("inputvalue").value = answer;
        
    }
    clearBox = (inputId)=>{
        document.getElementById(inputId).value = null;
    }
    putOperators = (inputId,operator)=>{
        if(operator == "**")
            operator = "^";
        document.getElementById(inputId).value += operator; 
    }
    putNumber = (inputId,number)=>{
        document.getElementById(inputId).value +=number;
    }
    render(){
        return(
            <Button putNumber={this.putNumber} putOperators={this.putOperators} calculateValues = {this.calculateValues} clearBox = {this.clearBox} />
        );
    }    
}
//const element = <Button />;
ReactDOM.render(<Calculator/>,document.getElementById('root'));