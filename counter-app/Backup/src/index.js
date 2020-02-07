import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterApp from './reducers/index';
import App from './components/App';
import {increment,decrement} from './actions/actions.js';

const store = createStore(CounterApp);


const render = () =>ReactDOM.render( <App 
            value = {store.getState()}
            onIncrement = { ()=>store.dispatch(increment())}
            onDecrement = {()=>store.dispatch(decrement())}
        />,document.getElementById("root")
);

render();
store.subscribe(render);
