/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActions from '../../store/actions/userInfo';

import HomeHeader from '../../components/Homeheader'
import Category from  '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="home-page">
                <HomeHeader cityName={this.props.userInfo.cityName} />
	            <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		userInfo:state.userInfo
	}
}
function mapDispatchToProps(dispath) {
	return {}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)