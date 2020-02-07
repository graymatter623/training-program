import React from 'react';
import { connect } from 'react-redux';
import {addCounter,getTotalBill} from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.css';
const AddButton = ({totalBill,addItemClick,getBillClick})=>(
    <>
        {console.log(totalBill)}
        <center>
            <button className = "btn btn-success " onClick = {()=>addItemClick() }>ADD ITEM</button>
            <br/>

            &nbsp;&nbsp; <span>Total =&nbsp;&nbsp;${totalBill}</span>
        </center>
    </>
)

const mapStateToProps = (state)=>({
    totalBill : state.reduce( (total,counter) => (total + (counter.price * counter.count)),0)
})
const mapDispatchToProps = (dispatch)=>({
    addItemClick : ()=> dispatch(addCounter()),
    getBillClick : ()=> dispatch(getTotalBill())
})

export default connect(mapStateToProps,mapDispatchToProps)(AddButton);