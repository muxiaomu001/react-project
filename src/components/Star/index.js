import React, {Component} from 'react'
import './style.less'
class Star extends Component{
	constructor(){
		super();
		this.state={
			star:0
		}
	}
	componentDidMount(){
		this.setState({
			star:this.props.star%6
		});
	}
	render(){
		return (
			<div className="star-container">
				{[1,2,3,4,5].map((iterm,index)=>{
					let lightClass = this.state.star>=index+1?' light' : '';
					return <i key={index} className={'icon-star' + lightClass}></i>
				})}
			</div>
		)
	}
}

export default Star;