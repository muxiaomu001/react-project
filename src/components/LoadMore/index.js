
import React, {Component} from 'react'
import './style.less'
class LoadMore extends Component{
	constructor(){
		super()
	}
	componentDidMount(){
		const loadingMoreFn = this.props.loadingMoreFn;
		const wrapper = this.loadMoreDom;
		let timer;
		function callback() {
			const top = wrapper.getBoundingClientRect().top;
			const windowHeight = window.screen.height;
			if (top && top < windowHeight) {
				// 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
				loadingMoreFn()
			}
		}
		window.addEventListener('scroll', ()=> {
			if(this.props.isLoadingMore){
				return;
			}
			if(timer){
				clearTimeout(timer)
			}
			timer = setTimeout(callback,50)
		},false)
	}
	handleLoadingMore(){
		this.props.loadingMoreFn();
	}
	render(){
		return (
			<div
				className="load-more"
				ref={(dom)=>{this.loadMoreDom = dom}}
			>
				{
					this.props.isLoadingMore
						?<span>加载中...</span>
						:<span onClick={this.handleLoadingMore.bind(this)}>加载更多</span>
				}
			</div>
		)
	}
}

export default LoadMore;