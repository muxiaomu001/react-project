/**
 * Created by huang on 2017/12/25.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActions from '../../store/actions/userInfo';

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends Component{
    constructor(){
        super()
    }
	handleCityChange(cityname){
		this.props.userInfoActions.update({
			cityName: cityname
		});
		localStore.setItem(CITYNAME,cityname);
		window.history.back()
    }
    render(){
        return (
            <div className="city-page">
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.userInfo.cityName} />
                <CityList changeCity={this.handleCityChange.bind(this)}/>
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
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)