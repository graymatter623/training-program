import {connect} from "react-redux";
import CounterList from '../components/CounterList';
import {increment,decrement} from '../actions/actions';

const mapStateToProps = (state)=>({
    counters : state
})

const mapDispatchToProps = (dispatch)=>({
    onIncrement : (id)=> dispatch(increment(id)),
    onDecrement : (id)=> dispatch(decrement(id))
})
const GetCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList); 

export default GetCounter;