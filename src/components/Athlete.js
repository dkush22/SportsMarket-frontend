import React from 'react'
import { connect } from 'react-redux'

const Athlete = (props) => {
	return (

		<tr>
		<td>{props.athlete.name}</td>	
		<td>${parseFloat(props.athlete.initial_stock_value).toFixed(2)}</td>
		<td>${parseFloat(props.athlete.current_stock_value).toFixed(2)}</td>
		<td className={(((parseFloat(props.athlete.current_stock_value) - parseFloat(props.athlete.initial_stock_value)) / parseFloat(props.athlete.initial_stock_value)) * 100).toFixed(2) > 0 ? 'positive' : 'negative'}>{(((parseFloat(props.athlete.current_stock_value) - parseFloat(props.athlete.initial_stock_value)) / parseFloat(props.athlete.initial_stock_value)) * 100).toFixed(2)}%</td>	
		</tr>
	)

}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching,
	}
}

export default connect(mapStateToProps)(Athlete)