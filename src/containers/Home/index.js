/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'

import HomeHeader from '../../components/Homeheader'

class Home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="home-page">
                <HomeHeader/>
                <h2>home page</h2>
            </div>
        )
    }
}

export default Home;