import React, {Component} from 'react'
import {withRouter } from 'react-router-dom'
import './style.less'
class SearchInput extends Component{
	constructor(){
		super();
		this.state={
			keyword:'',
		}
	}
	handleChange(event){
		this.setState({
			keyword:event.target.value
		});
	}
	handleKeyUp(event){
		if(event.keyCode !== 13){
			return;
		}
		this.props.history.push('/search/all/' + event.target.value);
	}
	render(){
		return (
			<input
				className="search-input"
				type="text"
				value={this.state.keyword}
				onChange={this.handleChange.bind(this)}
				onKeyUp={this.handleKeyUp.bind(this)}
				placeholder="请输入关键字"
			/>
		)
	}
}

export default withRouter(SearchInput);