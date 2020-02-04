import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import {BrowserRouter , Switch,Route} from 'react-router-dom';
import { MoreAboutEmoji } from './MoreAboutEmoji';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }
  
  handleSearchChange = event => {
    this.setState({
      filteredEmoji:filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
       <BrowserRouter>
          
          <div>
            <Switch>
              <Route exact path = "/"> 
                <Header />
                <SearchInput textChange={this.handleSearchChange} />
                <EmojiResults emojiData={this.state.filteredEmoji} />
              </Route>    
              <Route exact path = "/emoji-result/:title">         
                <MoreAboutEmoji />
              </Route>
             </Switch>
          </div>
      </BrowserRouter>
       
      
    );
  }
}
