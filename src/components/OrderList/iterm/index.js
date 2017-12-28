
import React, {Component} from 'react'
import Star from '../../Star'
import './style.less'
class Iterm extends Component{
	constructor(){
		super();
		this.state={
			commentState:2,
			textarea:null,
			star:0
		}
	}
	componentDidMount(){
		this.setState({
			commentState:this.props.data.commentState
		})
	}
	showComment(){
		this.setState({
			commentState:1
		})
	}
	hideComment(){
		this.setState({
			commentState:0
		})
	}
	commentCallback(){
		this.setState({
			commentState:2
		})
	}
	submitClickHandle(){
		const submitComment = this.props.submitComment;
		const id = this.props.data.id;
		const value = this.textarea.value;
		const star = this.state.star;
		if(!value){
			return;
		}
		submitComment(id,value,star,this.commentCallback.bind(this))
	}
	clickStarCallback(star){
		this.setState({
			star:star
		})
	}
	render(){
		const data = this.props.data;
		return (
			<div className="order-item-container">
				<div className="clear-fix">
					<div className="order-item-img float-left">
						<img src={data.img}/>
					</div>
					<div className="order-item-comment float-right">
						{
							this.state.commentState===0
								?<button className="btn" onClick={this.showComment.bind(this)}>评价</button>
								:this.state.commentState===1
									?''
									:<button className="btn unseleted-btn">已评价</button>
						}

					</div>
					<div className="order-item-content">
						<span>商户：{data.title}</span>
						<span>数量：{data.count}</span>
						<span>价格：￥{data.price}</span>
					</div>
				</div>
				{
					this.state.commentState===1
						?   (<div>
								<textarea
									style={{width: '100%', height: '80px'}}
									className="comment-text"
									ref={(dom)=>{this.textarea=dom}}
								></textarea>
								<div style={{paddingTop: '10px', paddingBottom: '10px'}}>
									<Star star="0" clickStarCallback={this.clickStarCallback.bind(this)}/>
								</div>
								<button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
								&nbsp;
								<button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
							</div>)
						:   ''
				}
			</div>
		)
	}
}

export default Iterm;