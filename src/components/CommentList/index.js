/**
 * Created by huang on 2017/12/27.
 */
import React, {Component} from 'react'
import Iterm from './Iterm'
import './style.less'
class CommentList extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="comment-list">
                {this.props.data.map((iterm,index)=>{
                    return <Iterm key={index} data={iterm} />
                })}
            </div>
        )
    }
}

export default CommentList;