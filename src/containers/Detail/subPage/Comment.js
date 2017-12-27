import React, {Component} from 'react'

import LoadMore from '../../../components/LoadMore'
import CommentList from '../../../components/CommentList'
import { getCommentData } from '../../../fetch/detail/detai'
import './style.less'
class Comment extends Component{
	constructor(){
		super();
        this.state={
            data:[],
            hasMore:false,
            isLoadingMore:false,
            page:0,
        }
	}
    componentDidMount(){
        const result = getCommentData(0,this.props.id);
        this.resultHandle(result)
    }
    loadMoreData(){
		this.setState({
            isLoadingMore:true
		})
        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)
        this.setState({
            isLoadingMore:false
        })
	}
    // 处理数据
    resultHandle(result){
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            let data = json;
            this.setState({
                data:this.state.data.concat(data.data),
                page:this.state.page+1,
                hasMore:data.hasMore
            })
        }).catch(ex => {
            console.error('详情页获取用户评论数据出错, ', ex.message)
        })
	}
	render(){
		return (
			<div className="detail-comment-subpage">
				<h2>用户点评</h2>
				{
					this.state.data.length
						?<CommentList data={this.state.data} />
						:<div>加载中...</div>
				}
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadingMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
			</div>
		)
	}
}

export default Comment;