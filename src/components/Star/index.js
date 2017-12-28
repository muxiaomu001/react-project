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
	clickHandle(star){
		const clickCallback = this.props.clickStarCallback
		if (!clickCallback) {
			return
		}

		this.setState({
			star: star
		});
		if(clickCallback){
			clickCallback(star)
		}
	}
	render(){
		return (
			<div className="star-container">
				{[1,2,3,4,5].map((iterm,index)=>{
					let lightClass = this.state.star>=index+1?' light' : '';
					return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle.bind(this, iterm)} ></i>
				})}
			</div>
		)
	}
}

export default Star;