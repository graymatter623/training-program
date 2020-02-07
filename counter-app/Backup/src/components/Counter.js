import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Counter extends PureComponent{   
    render(){
        const {value,onIncrement,onDecrement} = this.props; 
        console.log(this.props.value);
        return(
            <>
                <h3>Add Quantity : {value} </h3>
                <button onClick = {onIncrement}> + </button>
                <button onClick = {onDecrement}> - </button>
                
            </>
        );
    }
}
Counter.propTypes = {
    value : PropTypes.number.isRequired,
    onIncrement : PropTypes.func.isRequired,
    onDecrement : PropTypes.func.isRequired
};

export default Counter;