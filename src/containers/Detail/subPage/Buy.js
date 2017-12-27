import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as storeActionsFromFile from '../../../store/actions/store';
import BuyAndStore from '../../../components/BuyAndStore'
class Buy extends Component{
    constructor(){
        super()
		this.state={
        	isStore:false
		}
    }
    componentDidMount(){
    	// this.loginCheck();
		this.checkStoreState();
	}
	checkStoreState(){
		const id = this.props.id;
		const store = this.props.store;
		store.map(iterm=>{
			if(iterm.id===id){
				this.setState({
                    isStore:true
				})
				return true;
			}

		})
	}
    buyHandle(){
		const loginFlag = this.loginCheck();
		if(!loginFlag){
			return false;
		}

		//购买流程


		//跳转
		this.props.history.push('/user');
	}
    storeHandle(){
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return false;
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;

        if(this.state.isStore){
        	//取消收藏
            storeActions.rm({id:id})
		}else{
        	//收藏
            storeActions.add({id:id})
		}
		//修改状态
		this.setState({
			isStore:!this.state.isStore
		})

	}
	loginCheck(){
    	const id = this.props.id;
    	const userInfo = this.props.userInfo;

    	if(!userInfo.username){
    		this.props.history.push('/login/'+encodeURIComponent('/detail/'+id));
    		return false;
		}
		return true;
	}
    render(){
        return (
			<div>
				<BuyAndStore
					isStore = {this.state.isStore}
					buyHandle={this.buyHandle.bind(this)}
					storeHandle={this.storeHandle.bind(this)}
				/>
			</div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userInfo:state.userInfo,
		store:state.store
    }
}
function mapDispatchToProps(dispath) {
    return {
        storeActions:bindActionCreators(storeActionsFromFile,dispath)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy))