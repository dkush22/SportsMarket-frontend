import React from 'react'


const Investments = (props) => {
	console.log(props.investment)
	return (
    <tr>
      <td>{props.investment.nfl_athlete.name}</td>
      <td>${props.investment.nfl_athlete.initial_stock_value.toFixed(2)}</td>
      <td>${props.investment.acquisition_price.toFixed(2)}</td>
      <td>${props.investment.nfl_athlete.current_stock_value.toFixed(2)}</td>
      <td>{props.investment.quantity}</td>
      <td>${(props.investment.quantity * props.investment.acquisition_price).toFixed(2)}</td>
      <td>${(props.investment.nfl_athlete.current_stock_value * props.investment.quantity).toFixed(2)}</td>
      <td className={(((props.investment.nfl_athlete.current_stock_value) - (props.investment.acquisition_price)) * (props.investment.quantity)).toFixed(2) > 0 ? 'positive' : 'negative' }>${(((props.investment.nfl_athlete.current_stock_value.toFixed(2)) - (props.investment.acquisition_price.toFixed(2))) * (props.investment.quantity)).toFixed(2)  }</td>
      <td><button className="ui negative button">Sell</button></td>
    </tr>
	)
}


export default Investments