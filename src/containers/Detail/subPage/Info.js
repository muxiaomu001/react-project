import React, {Component} from 'react'

import DetailInfo from '../../../components/DetailInfo'
import { getInfoData } from '../../../fetch/detail/detai'
class Info extends Component{
	constructor(){
		super();
		this.state={
			info:undefined
		}
	}
	componentDidMount(){
		const result = getInfoData(this.props.id);
		result.then((res)=>{
			return res.json()
		}).then((json)=>{
			let data = json;
			this.setState({
				info:data
			})
		})
	}
	render(){
		return (
			<div>
				{
					this.state.info
						?<DetailInfo info={this.state.info} />
						:''
				}
			</div>
		)
	}
}

export default Info;