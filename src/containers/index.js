/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'

import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey'

class App extends Component{
    constructor(){
        super();
        this.state={
            initDone:false,
        }
    }
    componentDidMount(){
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName==null){
            cityName = '北京';
        }

        setTimeout(()=>{
            this.setState({
                initDone:true
            })
        },1500)
    }
    render(){
        return (
            <div className="app">
                {
                    this.state.initDone? this.props.children :<div>加载中...</div>
                }
            </div>
        )
    }
}

export default App;