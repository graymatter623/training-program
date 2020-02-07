import {INCREMENT,DECREMENT,ADD_COUNTER, GET_BILL} from '../actions/actions';

const changeCounters = (state = {} , action) =>{
    switch(action.type){
       
        case INCREMENT :
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                count : state.count+1
            }
            
        case DECREMENT :
            if(state.id!== action.id){
                return state;
            }

            return {
                ...state,
                count : state.count -1
            }
            
        default:
            return state;         
    }
}
let nextId =0;

const CounterApp = (state = [], action) =>{
    switch(action.type){
        case GET_BILL :
            return state;
        case INCREMENT :
            return state.map( (counter)=> changeCounters(counter,action));
        case DECREMENT :
            return state.map( (counter)=>changeCounters(counter,action));
        case ADD_COUNTER:
            
            return [
                ...state,
                {
                    count : 0,
                    id : nextId++,
                    price : 99
                }
            ];
        default :
            return state
    }
}
export default CounterApp;