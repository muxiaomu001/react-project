/**
 * Created by huang on 2017/12/27.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActions from '../../store/actions/userInfo';
import {withRouter} from 'react-router-dom'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
class Login extends Component{
    constructor(){
        super();
        this.state={
            checking:true
        }
    }
    componentDidMount(){
        this.doCheck()
        console.log(this.props.userInfo)
    }
    doCheck(){
        const userInfo = this.props.userInfo;
        if(userInfo.username){
            //已登录
            this.goUserPage();
        }else{
            //未登录
            this.setState({
                checking: false
            })
        }
    }
    goUserPage(){
        // this.props.history.push('/user');
        this.props.history.push('/');
    }
    loginHandle(username){
       const actions = this.props.userInfoActions;
       let userInfo = this.props.userInfo;
        userInfo.username = username;
        actions.update({
            username:username
        });
        console.log(this.props.userInfo)

        //跳转
        let router = this.props.match.params.router;
        router =decodeURIComponent(router);
        console.log(123,router)
        if(router){
            //跳转到指定页面
            this.props.history.push(router);
        }else{
            //跳转到默认页面
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <div>
                <Header title="登陆" />
                {
                    this.state.checking
                        ?''
                        :<LoginComponent loginHandle={this.loginHandle.bind(this)} />
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
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))