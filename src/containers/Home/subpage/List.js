/**
 * Created by huang on 2017/12/26.
 */
import React, {Component} from 'react'
import {getListData} from '../../../fetch/home/home'
import ListIterm from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
class List extends Component{
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
        this.loadFirstPageData();
    }
    loadFirstPageData(){
	    const cityName = this.props.cityName;
	    const result = getListData(cityName,0);
	    this.resultHandle(result)
    }
    loadMoreData(){
        console.log(this);
	    //记录状态
        this.setState({
	        isLoadingMore:true
        })
	    const cityName = this.props.cityName;
        const page = this.state.page;
	    const result = getListData(cityName,page);
	    this.resultHandle(result)

        this.setState({
	        isLoadingMore:false,
            page:page+1
        })
    }
    resultHandle(result){
	    result.then(res=>{
		    return res.json()
	    }).then(json=>{
		    let data = json;
		    this.setState({
			    data:this.state.data.concat(data.data),
			    hasMore:data.hasMore
		    })
	    })
    }
    render(){
        return (
            <div className="list-container">
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListIterm data={this.state.data} />
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadingMoreFn={this.loadMoreData.bind(this)} />
                        :<div></div>
                }
            </div>
        )
    }
}

export default List;