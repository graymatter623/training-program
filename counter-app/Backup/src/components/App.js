import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
const App = (props) =>{
    //console.log("",props.value)
    return(
        <Counter 
            value = {props.value} 
            onIncrement = {props.onIncrement} 
            onDecrement = {props.onDecrement} 
        />
    );
}

App.propTypes = {
    value : PropTypes.number.isRequired,
    onIncrement : PropTypes.func.isRequired,
    onDecrement : PropTypes.func.isRequired

};
export default App;