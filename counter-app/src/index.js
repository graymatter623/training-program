import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterApp from './reducers/index';
import App from './components/App';
const store = createStore(CounterApp);
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState())
});
const render = () => ReactDOM.render( 
        <Provider store = {store}> 
            <App />
        </Provider>,document.getElementById("root")
);

render();
