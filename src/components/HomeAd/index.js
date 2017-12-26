/**
 * Created by huang on 2017/12/26.
 */

import React, {Component} from 'react'
import './style.less'

class HomeAd extends Component{
    constructor(){
        super();
    }
    render(){
        const data = this.props.data;
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd;