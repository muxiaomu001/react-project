/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subPage/List'

class Search extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    render(){
        return (
            <div className="search-page">
                <SearchHeader/>
                <SearchList keyword={this.props.match.keyword} category={this.props.match.category}/>
            </div>
        )
    }
}

export default Search;