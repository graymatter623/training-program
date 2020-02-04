import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";
import {Link} from 'react-router-dom';


export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }
  onClick = (event) =>{
    
  }
  render() {
    
    return (  
       
            <div className = "component-emoji-results" >
               
                    {
                    this.props.emojiData.map( (emojiData ,index )=> (
                    <Link to = {`/emoji-result/${emojiData.title}`} key = {index.toString()}> 
                        <EmojiResultRow
                                key={emojiData.title}
                                symbol={emojiData.symbol}
                                title={emojiData.title}
                                keywords = {emojiData.keywords}
                            
                        />
                    </Link>
                    ))
                    }
                   
            </div> 
         
          
    );
  }
}
