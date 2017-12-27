
import React, {Component} from 'react'
import './style.less'
class Header extends Component{
	constructor(){
		super()
	}
	handleClick(){
		window.history.back()
	}
	render(){
		return (
			<div id="common-header">
                <span className="back-icon" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default Header;