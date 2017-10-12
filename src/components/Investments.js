import React from 'react'


const Investments = (props) => {
	return (
    <tr>
      <td>{props.investment.nfl_athlete.name}</td>
      <td>${props.investment.nfl_athlete.initial_stock_value}</td>
      <td>${props.investment.nfl_athlete.current_stock_value}</td>
      <td>{props.investment.quantity}</td>
      <td className={(((props.investment.nfl_athlete.current_stock_value) - (props.investment.nfl_athlete.initial_stock_value)) * (props.investment.quantity)).toFixed(2) > 0 ? 'positive' : 'negative' }>${(((props.investment.nfl_athlete.current_stock_value) - (props.investment.nfl_athlete.initial_stock_value)) * (props.investment.quantity)).toFixed(2)  }</td>
    </tr>
	)
}


export default Investments