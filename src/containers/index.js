/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="app">
                {this.props.children}
            </div>
        )
    }
}

export default App;