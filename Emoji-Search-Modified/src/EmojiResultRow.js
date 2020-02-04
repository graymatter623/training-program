import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    keywords : PropTypes.string,
    id : PropTypes.number
  };
  
  render() {
	const codePointHex = this.props.symbol.codePointAt(0).toString(16);
	
	const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
	// const element = <Router> 
		  
	// 	<div className = "accordion" id = "accordionExample">
	// 	<div className = "card">
	// 		<div className = "card-header" id = {`heading${this.props}`}>
	// 		<Link to = {`/emoji-result/${codePointHex}/${ this.props.title }`} >
	// 			<div
	// 			className = "component-emoji-result-row copy-to-clipboard"
	// 			data-clipboard-text={this.props.symbol}
	// 			data-toggle = "collapse"
	// 			data-target = {`#collapse${this.props.id}`}
	// 			aria-expanded = "false"
	// 			aria-controls = {`collapse${this.props.id}`}
	// 			onClick = {this.handleClick}
	// 			>

	// 			<img alt={this.props.title} src={src} />
	// 			<span className="title"> {this.props.title} </span> 
	// 			<span className="info">Click to copy emoji</span>
	// 			</div>
	// 		</Link>
	// 		</div>
	// 		<div 
	// 		id = {`collapse${this.props.id}`} 
	// 		className = "collapse-show" 
	// 		aria-labelledby = {`heading${this.props.id}`} 
	// 		data-parent = "#accordionExample">
		
	// 			<Switch>
	// 			<Route path = { `/emoji-result/${codePointHex}/${ this.props.title}`}>
	// 				<MoreAboutEmoji 
	// 				src = {src} 
	// 				title = {this.props.title} 
	// 				symbol = {this.props.symbol} 
	// 				keywords = {this.props.keywords}/>
	// 			</Route>
	// 			</Switch>
			
	// 		</div>
	// 	</div>
	// 	</div>
	  
	//   </Router>;
	  
	return (
		<div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol} 
		>
        <img alt = {this.props.title} src={src} />
        <span className="title"> {this.props.title} </span>
       
        <span className="info">Click to copy emoji</span>
      </div>
			
    );
  }
}
