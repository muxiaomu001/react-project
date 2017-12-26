/**
 * Created by huang on 2017/12/26.
 */

import React, {Component} from 'react'
import Iterm from './Iterm'

import './style.less'

class List extends Component{
    constructor(){
        super();
    }
    render(){
        const data = this.props.data
        return (
            <div className="list-container">
                {data.map((iterm,index)=>{
                    return (
                        <div key={index}>
                            <Iterm data={iterm}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List;