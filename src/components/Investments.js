import React from 'react'
import { deleteInvestment } from '../services/investment.js'


const Investments = (props) => {

function handleSell() {
	const investmentParams = {user_id: props.investment.user_id, nfl_athlete_id: props.investment.nfl_athlete_id}
	deleteInvestment(investmentParams)
}
console.log(props)
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
      <td><button className="ui negative button" onClick={handleSell}>Sell</button></td>
    </tr>
	)
}


export default Investments