/**
 * Created by huang on 2017/12/26.
 */
import React, {Component} from 'react'
import {getListData} from '../../../fetch/home/home'
import ListIterm from '../../../components/List'
class List extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            hasMore:false,
        }
    }
    componentDidMount(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        console.log(result)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            let data = json;
            console.log(json)
            this.setState({
                data:data.data,
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
            </div>
        )
    }
}

export default List;