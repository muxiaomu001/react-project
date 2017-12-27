/**
 * Created by huang on 2017/12/27.
 */
import React, {Component} from 'react'
import './style.less'
import Star from '../../Star'
class Iterm extends Component{
    constructor(){
        super()
    }
    render(){
        // 获取数据
        const item = this.props.data
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}

export default Iterm;