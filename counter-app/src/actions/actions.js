export const INCREMENT = "INCREMENT";
export const DECREMENT  = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const GET_BILL = "GET_BILL";

export const getTotalBill = ()=>({
    type : GET_BILL
})
export const addCounter = () =>({
    type : ADD_COUNTER
})
export const increment = (id)=>({
    type : INCREMENT,
    id
});
export const decrement = (id)=>({
    type : DECREMENT,
    id
});