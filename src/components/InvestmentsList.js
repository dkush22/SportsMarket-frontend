import React from 'react'
import Investments from './Investments.js'


const InvestmentsList = (props) => {
	
	const filteredInvestments = (props.investments ? props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id'))) : null)
	const netTotal = (filteredInvestments ? (filteredInvestments.length ? filteredInvestments.map((investment) => parseFloat(((investment.nfl_athlete.current_stock_value.toFixed(2) - investment.acquisition_price.toFixed(2)) * investment.quantity).toFixed(2))) : null) : null)
	var netTotalAdded = (netTotal ? netTotal.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue
	}) : null)

	return ( 
		<div>
		<div className="ui clearing segment">
			<h3 className="ui left floated header">{filteredInvestments ? (filteredInvestments.length ? filteredInvestments[0].user.username : null) : null}</h3>
			<h3 className="ui right floated header">Budget: ${filteredInvestments ? (filteredInvestments.length ? (filteredInvestments[0].user.budget.toFixed(2)) : null) : null} </h3>
		</div>
		<table className="ui selectable celled table">
		  <thead>
    		<tr>
      		<th>Athlete</th>
      		<th>Initial Price</th>
     		<th>Price at Acquisition</th>
      		<th>Current Price</th>
      		<th>Quantity</th>
      		<th>Initial Investment</th>
      		<th>Current Value</th>
      		<th>Gains/Losses</th>
      		<th>Action</th>
    		</tr>
  		</thead>
  		<tbody>
		{filteredInvestments ? filteredInvestments.map((investment, index) => <Investments key={index} investment={investment} />) : null}
		<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>TOTAL:</td>
		<td className={netTotalAdded >= 0 ? 'positive' : 'negative'}>${parseFloat(netTotalAdded).toFixed(2)}</td>
		</tr>
		</tbody>
		</table>
		</div>
		)
}

export default InvestmentsList