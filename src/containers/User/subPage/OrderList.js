import React, {Component} from 'react'
import List from '../../../components/OrderList'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'
import './style.less'
class OrderList extends Component{
	constructor(){
		super()
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		const username = this.props.username;
		if(username){
			this.loadOrderList(username)
		}
	}
	loadOrderList(username){
		const result = getOrderListData(username)
		result.then((res)=>{
			return res.json()
		}).then((json)=>{
			let data = json;
			this.setState({
				list:data
			})
		}).catch(ex => {
			console.error('获取数据出错, ', ex.message)
		})
	}
	render(){
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				<List data={this.state.list}/>
			</div>
		)
	}
}

export default OrderList;