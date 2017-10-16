import React from 'react'
import { newInvestment } from '../services/investment.js'
import { Route, Link } from 'react-router-dom'



class AthleteInfo extends React.Component {

constructor() {
	super()
	this.state = {
		quantity: ""
	}
}

handleBuyButton = (event) => {
	const filtered = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2]))
	const investmentParams = {user_id: parseInt(localStorage.getItem('user_id')), nfl_athlete_id: filtered[0].id, quantity: parseInt(this.state.quantity), acquisition_price: parseFloat(filtered[0].current_stock_value.toFixed(2))}
	if (parseInt(this.state.quantity) !== 0) {
	newInvestment(investmentParams)
	this.setState({
		quantity: 0,
		message: "Success!"
	})}
	else {this.setState({
		quantity: 0,
		message: "Invalid!"
	})}
	
}

handleShares = (event) => {

	if (event.target.value > 0) {
	this.setState({
		quantity: parseInt(event.target.value)
	})
} else {
	this.setState({
		quantity: 0
	})	
}
}



render() {
	const filtered = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2]))
	return (
		<div>
		<h1>{filtered ? (filtered[0] ? filtered[0].name : null) : null}</h1>
	<table className="ui blue table">
  			<thead>
    		<tr>
    		<th>Position</th>
    		<th>Team</th>
    		<th>Current Stock Value</th>
    		{filtered ? (filtered[0] ? (filtered[0].position === "QB" ? <th>Passing Yards</th> : filtered[0].position === "RB" ? <th>Rushing Yards</th> : filtered[0].position === "WR" ? <th>Receiving Yards</th> : null) : null) : null}
    		{filtered ? (filtered[0] ? (filtered[0].position === "QB" ? <th>Passing Touchdowns</th> : filtered[0].position === "RB" ? <th>Rushing Touchdowns</th> : filtered[0].position === "WR" ? <th>Receiving Touchdowns</th> : null) : null) : null}
  			</tr>
  			</thead>
  		<tbody>
    	 <tr>
		    <td>{filtered ? (filtered[0] ? filtered[0].position : null) : null}</td>
		    <td>{filtered ? (filtered[0] ? filtered[0].team : null) : null}</td>
		    <td>${filtered ? (filtered[0] ? filtered[0].current_stock_value.toFixed(2) : null) : null}</td>
    		{filtered ? (filtered[0] ? (filtered[0].position === "QB" ? <td>{filtered[0].passing_yards}</td> : filtered[0].position === "RB" ? <td>{filtered[0].rushing_yards}</td> : filtered[0].position === "WR" ? <td>{filtered[0].receiving_yards}</td> : null) : null) : null}
    		{filtered ? (filtered[0] ? (filtered[0].position === "QB" ? <td>{filtered[0].passing_touchdowns}</td> : filtered[0].position === "RB" ? <td>{filtered[0].rushing_touchdowns}</td> : filtered[0].position === "WR" ? <td>{filtered[0].receiving_touchdowns}</td> : null) : null) : null}
    	 </tr>
  		</tbody>
	</table>

	<div className="ui form">
  <div className="fields">
    <div className="field">
      <label># of Shares</label>
      <input onChange={this.handleShares} type="text" placeholder="Number of Shares" value={this.state.quantity}/>
    </div>
    <div className="field">
      <label>Total Spending</label>
      <input type="text" placeholder="Total Spending" value={filtered ? (filtered[0] ? (Number.isInteger(parseInt(this.state.quantity)) ? (this.state.quantity * filtered[0].current_stock_value.toFixed(2)) : 0) : '') : ''}/>
    </div>
    <button className="positive ui button" onClick={this.handleBuyButton}>Buy</button>
    <h3>{this.state.message ? this.state.message : null}</h3>
    <Link to={`/users/${localStorage.getItem('user_id')}`}><button className="ui button">Go to Profile</button></Link>
  </div>
</div>
		</div>
	)
	}
}

export default AthleteInfo