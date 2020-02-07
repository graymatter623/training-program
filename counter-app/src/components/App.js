import React from 'react';
import GetCounter from '../containers/GetCounter';
import AddButton from '../components/AddButton';
import 'bootstrap/dist/css/bootstrap.css';
const App = () =>{
    //console.log("",props.value)
    return(
        <div className = "container">
            <h2 style = {{textAlign : "center"}}>CART APP</h2>
            <GetCounter />
            <AddButton />
        </div>
    );
}

export default App;