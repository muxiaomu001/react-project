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

class RouterWrapper extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <Router>
                <App className="app-page">
                    <Route exact path="/" component={Home} />
                    <Route path="/404" component={NoFind} />
                    <Route path="/city" component={City} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/search" component={Search} />
                    <Route path="/user" component={User} />
                </App>
            </Router>
        )
    }
}

export default RouterWrapper;