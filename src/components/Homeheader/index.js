import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import SearchInput from '../SearchInput'
import './style.less'

class HomeHeader extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div id="home-header" className="clear-fix">
				<div className="home-header-left float-left">
					<Link to="/city">
						<span>{this.props.cityName}</span>
						&nbsp;
						<i className="icon-angle-down"></i>
					</Link>
				</div>
				<div className="home-header-right float-right">
					<Link to="/login">
						<i className="icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput/>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeHeader;