/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'


import Header from '../../components/Header'
import Info from './subPage/Info'
import Comment from './subPage/Comment'

class Detail extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log('page datail id '+this.props.match.params.id)
    }
    render(){
        return (
            <div>
                <Header  title="商户详情" type="share"/>
                <Info id={this.props.match.params.id}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default withRouter(Detail);