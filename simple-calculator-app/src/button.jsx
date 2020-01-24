import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
    const divStyles = {
        width :"15%"
    };
    return(
        
        <div style = {divStyles}  className = "container-lg bg-dark" id = "container-small-width"  >
        <div className = "form-group row">
            <div className = "col-xs-1">
                <input className = "form-control input-lg" type = "text" name = "inputvalue" id = "inputvalue"/>
            </div>
        </div>
        
        <div className = "btn-group">
            <button className = "btn btn-dark btn-lg text-white text-center" type = "button" onClick = { () =>this.props.clearBox('inputvalue')} >AC</button>
        </div>
        <div className = "btn-group">
               
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","7")}> 7</button>
                <button className = "btn btn-dark btn-lg  text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","8")}> 8</button>
                <button className = "btn btn-dark btn-lg  text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","9")}> 9</button>
                <button className = "btn btn-dark btn-lg text-white text-center" type = "button" onClick = {()=> this.props.putOperators("inputvalue","*")}> x </button>
        </div> 
        <br/>
        <div className = "btn-group">
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","4")}> 4</button>
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","5")}> 5</button>
                
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","6")}> 6</button>
                <button className = "btn btn-dark btn-lg text-white text-center" type = "button" onClick = {()=> this.props.putOperators("inputvalue","+")}> + </button>
        </div>
        <br/>
        <div className = "btn-group">   
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","1")}> 1</button> 
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","2")}> 2</button>
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","3")}> 3</button><br/>
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue","-")}> - </button> 
        </div>
        <br/>
        <div className = "btn-group">
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue","/")}> /</button>

                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue","(")}> (</button>
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putNumber("inputvalue","0")}> 0</button>
                <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue",")")}> )</button>
        </div>   
        <br/>
        <div className = "btn-group">
          
            <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue","%")}>%</button>
            <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue","**")}>x<sup>y</sup></button>
            <button className = "btn btn-dark btn-lg text-white text-center"type = "button" onClick = {()=> this.props.putOperators("inputvalue",".")}>.</button>
            <button  className = "btn btn-warning btn-lg text-white text-center"type = "button" onClick = {()=> this.props.calculateValues("inputvalue")}>=</button>
        </div>     
    </div>
    );
    }
}
export default Button;