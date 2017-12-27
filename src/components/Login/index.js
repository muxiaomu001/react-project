/**
 * Created by huang on 2017/12/27.
 */
import React, {Component} from 'react'

import './style.less'
class Login extends Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    handleChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleClick(){
        const username = this.state.username;
        if(!username){
            return;
        }
        this.props.loginHandle(username);
    }
    render(){
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
}

export default Login;