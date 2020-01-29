import React from 'react';
import {ListData} from './ListData.jsx';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : null
        };

    }
    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            users : data 
        });
    }
    render(){
        return(
            <div class = "table table-sm table-bordered table-hover table-responsive-sm">
               <ListData userData = {this.state.users}/>
            </div>
            
        );
    }
}
export default App;