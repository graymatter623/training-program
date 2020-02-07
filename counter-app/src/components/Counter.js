import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
const Counter = (props)=>{
    return(
        <div style = {{display : "inlineBlock" }}>
            <button className = "btn btn-primary mx-1 my-1" onClick = {props.onIncrement}> + </button>
            <span> {props.value}</span> 
            <button className = "btn btn-primary mx-1 my-1" onClick = {props.onDecrement}>-</button>
            <span style = {{float : "right"}}>=&nbsp;&nbsp;$ {props.totalPrice}</span>
            <hr/><br/>
        </div>
    );
}

Counter.propTypes = {
    value : PropTypes.number.isRequired,
    onIncrement : PropTypes.func.isRequired,
    onDecrement : PropTypes.func.isRequired
};
export default Counter;