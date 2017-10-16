import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import AthleteInfo from './AthleteInfo.js'
import { newInvestment } from '../services/investment.js'

const Athlete = (props) => {


// function handleBuyButton(event) {
// 	const investmentParams = {user_id: parseInt(localStorage.getItem('user_id')), nfl_athlete_id: props.athlete.id, quantity: 1}
// 	newInvestment(investmentParams)
// }


	const filteredInvestments = props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id')))
	const ownedAthletes = filteredInvestments.map(investment => investment.nfl_athlete.name)
	return (

		<tr>
		<td><strong>{props.athlete.name}</strong><Link to={`athletes/${props.athlete.id}`}><button className="mini ui button">More Info</button></Link><Route path={`/athletes/${props.athlete.id}`} render = {(props) => <AthleteInfo athlete={props.athlete} />}/></td>	
		<td>${parseFloat(props.athlete.initial_stock_value).toFixed(2)}</td>
		<td>${parseFloat(props.athlete.current_stock_value).toFixed(2)}</td>
		<td className={(((parseFloat(props.athlete.current_stock_value) - parseFloat(props.athlete.initial_stock_value)) / parseFloat(props.athlete.initial_stock_value)) * 100).toFixed(2) > 0 ? 'positive' : 'negative'}>{(((parseFloat(props.athlete.current_stock_value) - parseFloat(props.athlete.initial_stock_value)) / parseFloat(props.athlete.initial_stock_value)) * 100).toFixed(2)}%</td>	
		{localStorage.getItem('jwtToken') ? (ownedAthletes.includes(props.athlete.name) ? <td><Link to={`athletes/${props.athlete.id}`}><button className="positive ui button">Buy</button></Link><button className="negative ui button">Sell</button></td> : <td><Link to={`athletes/${props.athlete.id}`}><button className="positive ui button">Buy</button></Link></td> ) : null}
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


// <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>