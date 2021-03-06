/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActions from '../store/actions/userInfo';

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

	    // 模拟登陆
	    this.props.userInfoActions.update({
		    cityName: cityName
	    });
    }
    render(){
        return (
            <div className="app">
                {
                    this.state.initDone
                        ? this.props.children
                        :<div>加载中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		userInfo:state.userInfo
	}
}
function mapDispatchToProps(dispath) {
	return {
		userInfoActions:bindActionCreators(userInfoActions,dispath)
	}
}


// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App)

//解决路由变了页面却没有变问题
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));