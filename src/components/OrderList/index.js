
import React from 'react'
import Item from './iterm'

import './style.less'

class OrderList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data

		return (
			<div>
				{data.map((item, index) => {
					return <Item key={index} data={item}/>
				})}
			</div>
		)
	}
}

export default OrderList