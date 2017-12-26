import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import RouterWrapper from './router/index';

import configureStore from './store/index'

//引入公共css
import './static/style/common.less'
import './static/style/font.css'


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<RouterWrapper/>
	</Provider>,
	document.getElementById('root')
);
