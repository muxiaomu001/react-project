import React, {Component} from 'react'
import SearchInput from '../SearchInput'
import './style.less'
class CurrentCity extends Component{
	constructor(){
		super();
	}
	clickHandle(){
		window.history.back()
	}
	render(){
		return (
			<div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
				<div className="input-container">
					<i className="icon-search"></i>
					&nbsp;
					<SearchInput />
				</div>
			</div>
		)
	}
}

export default CurrentCity;