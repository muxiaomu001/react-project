/**
 * Created by huang on 2017/12/25.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import App from '../containers/index';
import Home from '../containers/Home';
import NoFind from '../containers/404.js';
import City from '../containers/City';
import Detail from '../containers/Detail';
import Search from '../containers/Search';
import User from '../containers/User';
import Login from '../containers/Login';

class RouterWrapper extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <Router>
                <App className="app-page">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/city" component={City} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/search/:category/:keyword?" component={Search} />
                        <Route path="/user" component={User} />
                        <Route path="/login/:router?" component={Login} />
                        <Route component={NoFind} />
                    </Switch>
                </App>
            </Router>
        )
    }
}


export default RouterWrapper;