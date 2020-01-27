import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cal-style-sheet.css';
import ButtonType from './ButtonType';
import InputBox from './InputBox.jsx';
class Button extends Component{
    render(){
        let numbersAndOperators = ["0","1","2","3","4","5","6","7","8","9","+","-","/","**","%",".","=","AC"];

        return(
            <div className = "container">
                <div className = "form-group-sm input-button">
                    <InputBox/>
                </div>
                <div className = "btn btn-dark text-white">
                    {
                        numbersAndOperators.map( (value,index) =>  
                            <ButtonType key = {index} operatorType = {value} putNumbersAndOperators = {this.props.putNumbersAndOperators}  clearBox  = {this.props.clearBox}  calculateValues = {this.props.calculateValues } /> 
                            
                        )
                    }
                </div>   
            </div>
        );
    }
}

export default Button;