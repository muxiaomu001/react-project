/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux';
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subPage/OrderList'
class User extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="user-page">
                <Header title="用户中心"/>
                <UserInfo username={this.props.userInfo.username}  city={this.props.userInfo.cityName}/>
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
	return {
		userInfo:state.userInfo,
		store:state.store
	}
}
function mapDispatchToProps(dispath) {
	return {

	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User)