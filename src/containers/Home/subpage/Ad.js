/**
 * Created by huang on 2017/12/26.
 */
import React, {Component} from 'react'
import HomeAd from '../../../components/HomeAd'
import {getAdData} from '../../../fetch/home/home'
class Ad extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        const result = getAdData();
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            let data = json;
            this.setState({
                data:data
            })
        })
    }
    render(){
        return (
            <div className="404-page">
                {
                    this.state.data.length
                    ?<HomeAd data={this.state.data}/>
                    :<div>加载中...</div>
                }
            </div>
        )
    }

}

export default Ad;