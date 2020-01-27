import React from 'react';

export default class ButtonType extends React.Component {
    render() {
        const operatorType = this.props.operatorType;
        return(

            <button className = "btn btn-dark btn-lg text-white text-center" type = "button" onClick = {operatorType === "=" ? ()=>{this.props.calculateValues("input_value")} : operatorType === "AC" ? ()=>{this.props.clearBox("input_value")} : () => { this.props.putNumbersAndOperators(operatorType)}} > {this.props.operatorType} </button>
        )
    }
};
