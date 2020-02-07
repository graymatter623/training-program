import {connect} from "react-redux";
import Counter from '../components/Counter';
import {INCREMENT,DECREMENT} from '..actions/actions';

const mapStateToProps = (state)=>({
    value : state.CounterApp
})
const mapDispatchToProps = (dispatch)=>{

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);