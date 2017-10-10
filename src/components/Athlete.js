import React from 'react'


const Athlete = (props) => {
	return (
	
		<tr>
		<td>{props.athlete.name}</td>	
		<td>${parseFloat(props.athlete.initial_stock_value).toFixed(2)}</td>
		<td>${parseFloat(props.athlete.current_stock_value).toFixed(2)}</td>
		<td>{(((parseFloat(props.athlete.current_stock_value) - parseFloat(props.athlete.initial_stock_value)) / parseFloat(props.athlete.initial_stock_value)) * 100).toFixed(2)}%</td>	
		</tr>
	)

}

export default Athlete
