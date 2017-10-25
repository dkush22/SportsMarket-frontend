import React from 'react'
import Investments from './Investments.js'
import InvestmentsPie from './InvestmentsPie.js'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import { fetchInvestments } from '../actions/investments.js'
import { fetchUsers } from '../actions/users.js'
import { connect } from 'react-redux'

class InvestmentsList extends React.Component {
	


componentDidMount() {
this.props.fetchUsers()
this.props.fetchInvestments()
this.props.fetchNFLAthletes()

}
	
// <h3 className="ui block header"><marquee>{mappedAthletes.toString().replace(/\,/g,"   ||  ")}</marquee></h3>
	render() {
	const mappedAthletes = this.props.nflAthletes.map(player => `${player.name}: $${player.current_stock_value.toFixed(2)}`)
	const filteredUser = this.props.users.filter(user => user.id === parseInt(localStorage.getItem('user_id'), 10))
	const filteredInvestments = (this.props.investments ? this.props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id'), 10)) : null)
	const netTotal = (filteredInvestments ? (filteredInvestments.length ? filteredInvestments.map((investment) => parseFloat(((investment.nfl_athlete.current_stock_value.toFixed(2) - investment.acquisition_price.toFixed(2)) * investment.quantity).toFixed(2))) : null) : null)
	var netTotalAdded = (netTotal ? netTotal.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue
	}) : null)
	return ( 
		<div>
		<h3 className="ui block header"><marquee>{mappedAthletes.toString().replace(/\,/g,"   ||  ")}</marquee></h3>
		<div className="ui clearing segment">
			<h3 className="ui left floated header">{filteredUser ? (filteredUser.length ? filteredUser[0].username : null) : null}</h3>
			<h3 className="ui right floated header">Budget: ${filteredUser ? (filteredUser.length ? (filteredUser[0].budget.toFixed(2)) : null) : null} </h3>
		</div>
		<h3>{!filteredInvestments.length ? "You currently have no investments." : null}<a href="/athletes"> Make an investment</a><br/><a href="/compare"> Compare Athletes</a></h3>
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
		<td>{!isNaN(netTotalAdded) || netTotalAdded === 0 ? 'TOTAL:' : null}</td>
		<td className={netTotalAdded >= 0 ? 'positive' : 'negative'}>{!isNaN(netTotalAdded) || netTotalAdded === 0 ? `$${parseFloat(netTotalAdded).toFixed(2)}` : null}</td>
		</tr>
		</tbody>
		</table>
		<InvestmentsPie investments={filteredInvestments} />
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching,
		id: state.users.user.id,
		investments: state.users.user.investments,
		users: state.users.user.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchNFLAthletes: () => {
			dispatch(fetchNFLAthletes())
		}, 
		fetchInvestments: () => {
			dispatch(fetchInvestments())
		},
		fetchUsers: () => {
			dispatch(fetchUsers())
		}	
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(InvestmentsList)