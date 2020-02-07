import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js';
import 'bootstrap/dist/css/bootstrap.css';
class CounterList extends PureComponent{   
    
    render(){
        const {counters,onIncrement,onDecrement} = this.props;   
        return(
            <div className = "container">
                <ul>
                    {
                        counters.map((counter) => <Counter
                            key = {counter.id}
                            value = {counter.count}
                            totalPrice = {counter.price * counter.count}
                            onIncrement = {()=> onIncrement(counter.id)}
                            onDecrement = {()=> onDecrement(counter.id)}
                        />)
                    }
                </ul>
                
            </div>
        );
    }
}
CounterList.propTypes = {
    counters : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            count : PropTypes.number.isRequired
        }
        ).isRequired
    ).isRequired,
    onIncrement : PropTypes.func.isRequired,
    onDecrement : PropTypes.func.isRequired
};

export default CounterList;