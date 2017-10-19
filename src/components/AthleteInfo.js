import React from 'react'
import { newInvestment } from '../services/investment.js'
import { Link } from 'react-router-dom'
import { deleteInvestment } from '../services/investment.js'
import { fetchInvestments } from '../actions/investments.js'
import { modifyInvestment } from '../services/investment.js'
import { connect } from 'react-redux'
import Select from './Select.js'



class AthleteInfo extends React.Component {


constructor() {
	super()
	this.state = {
		buyQuantity: "",
		sellQuantity: ""
	}
}

handleBuyButton = (event) => {
	const filteredNFL = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
	const investmentParams = {user_id: parseInt(localStorage.getItem('user_id'), 10), nfl_athlete_id: filteredNFL[0].id, quantity: parseInt(this.state.buyQuantity, 10), acquisition_price: parseFloat(filteredNFL[0].current_stock_value.toFixed(2))}
	if (parseInt(this.state.buyQuantity, 10) !== 0 || !this.state.buyQuantity) {
	newInvestment(investmentParams, this.props.fetchInvestments)
	this.setState({
		buyQuantity: 0,
		sellQuantity: 0,
		buyMessage: "Success! Go to Profile to see your investment!"
	})}
	else {this.setState({
		buyQuantity: 0,
		sellQuantity: 0,
		buyMessage: "Invalid!"
	})}
}

handleSellPartialButton = (event) => {
const filteredNFL = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
const modifiedInvestmentParams = {user_id: parseInt(localStorage.getItem('user_id'), 10), nfl_athlete_id: filteredNFL[0].id, quantity: this.state.sellQuantity}
modifyInvestment(modifiedInvestmentParams, this.props.fetchInvestments)
this.setState({
		buyQuantity: 0,
		sellQuantity: 0,
	})
}

handleSellAllButton = () => {
const filteredNFL = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
const investmentParams = {user_id: parseInt(localStorage.getItem('user_id'), 10), nfl_athlete_id: filteredNFL[0].id}
deleteInvestment(investmentParams, this.props.fetchInvestments)
this.setState({
		buyQuantity: 0,
		sellQuantity: 0,
	})

}

handleChangeBuy = (event) => {

	if (event.target.value > 0) {
	this.setState({
		buyQuantity: parseInt(event.target.value, 10)
	})
} else {
	this.setState({
		buyQuantity: 0
	})	
}
}

handleChangeSell = (event) => {
this.setState({
	sellQuantity: parseInt(event.target.value, 10)
})
}

makeInputs = () => {
const filteredInvestments = this.props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id'), 10))
const furtherFilteredInvestments = filteredInvestments.filter(investment => investment.nfl_athlete_id === parseInt(window.location.pathname.split('/')[2], 10))
let finalArray = []
for (let j = 0; j < furtherFilteredInvestments.length; j++) {
for (let i = 0; i <= furtherFilteredInvestments[j].quantity - 1; i++) {
finalArray.push(<option value={i} key={i}>{i}</option>)
}
}
return finalArray
}

makeSellInvestments = () => {
const filteredNFL = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
const filteredInvestments = this.props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id'), 10))
const furtherFilteredInvestments = filteredInvestments.filter(investment => investment.nfl_athlete_id === parseInt(window.location.pathname.split('/')[2], 10))
let finalArray = []
for (let i = 0; i < furtherFilteredInvestments.length; i++ ) {
finalArray.push(furtherFilteredInvestments ? (furtherFilteredInvestments[i] ? (furtherFilteredInvestments[i].nfl_athlete_id === parseInt(window.location.pathname.split('/')[2], 10) ?	<div className="ui form">
  <h3>You currently own {furtherFilteredInvestments[i].quantity} share(s) of {filteredNFL ? (filteredNFL[0] ? filteredNFL[0].name : null) : null} at a price of ${furtherFilteredInvestments[i].acquisition_price}</h3>
  <div className="fields">
    <div className="field">
      <label># of Shares</label>
      <select className="ui dropdown"  onChange={this.handleChangeSell}>
      <option value="" ></option>
     {this.makeInputs()}
      </select>
    </div>
    <div className="field">
      <label>Total Spending</label>
      <input type="text" placeholder="Total Spending" value={filteredNFL ? (filteredNFL[0] ? (Number.isInteger(parseInt(this.state.sellQuantity, 10)) ? (this.state.sellQuantity * filteredNFL[0].current_stock_value.toFixed(2)) : 0) : '') : ''}/>
    </div>
    <button className="negative ui button" onClick={this.handleSellButton}>Sell</button>
    <button className="negative ui button" onClick={this.handleSellAllButton}>Sell All</button>
    <h3>{this.state.sellMessage ? this.state.sellMessage : null}</h3>
  </div>
</div> : null) : null) : null)
}
return finalArray
}



render() {
	const filteredNFL = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
	const filteredInvestments = this.props.investments.filter(investment => investment.user_id === parseInt(localStorage.getItem('user_id'), 10))
	const furtherFilteredInvestments = filteredInvestments.filter(investment => investment.nfl_athlete_id === parseInt(window.location.pathname.split('/')[2], 10))
	return (
		<div>
		<h1>{filteredNFL ? (filteredNFL[0] ? filteredNFL[0].name : null) : null}</h1>
	<table className="ui blue table">
  			<thead>
    		<tr>
    		<th>Position</th>
    		<th>Team</th>
    		<th>Current Stock Value</th>
    		{filteredNFL ? (filteredNFL[0] ? (filteredNFL[0].position === "QB" ? <th>Passing Yards</th> : filteredNFL[0].position === "RB" ? <th>Rushing Yards</th> : filteredNFL[0].position === "WR" ? <th>Receiving Yards</th> : null) : null) : null}
    		{filteredNFL ? (filteredNFL[0] ? (filteredNFL[0].position === "QB" ? <th>Passing Touchdowns</th> : filteredNFL[0].position === "RB" ? <th>Rushing Touchdowns</th> : filteredNFL[0].position === "WR" ? <th>Receiving Touchdowns</th> : null) : null) : null}
  			</tr>
  			</thead>
  		<tbody>
    	 <tr>
		    <td>{filteredNFL ? (filteredNFL[0] ? filteredNFL[0].position : null) : null}</td>
		    <td>{filteredNFL ? (filteredNFL[0] ? filteredNFL[0].team : null) : null}</td>
		    <td>${filteredNFL ? (filteredNFL[0] ? filteredNFL[0].current_stock_value.toFixed(2) : null) : null}</td>
    		{filteredNFL ? (filteredNFL[0] ? (filteredNFL[0].position === "QB" ? <td>{filteredNFL[0].passing_yards}</td> : filteredNFL[0].position === "RB" ? <td>{filteredNFL[0].rushing_yards}</td> : filteredNFL[0].position === "WR" ? <td>{filteredNFL[0].receiving_yards}</td> : null) : null) : null}
    		{filteredNFL ? (filteredNFL[0] ? (filteredNFL[0].position === "QB" ? <td>{filteredNFL[0].passing_touchdowns}</td> : filteredNFL[0].position === "RB" ? <td>{filteredNFL[0].rushing_touchdowns}</td> : filteredNFL[0].position === "WR" ? <td>{filteredNFL[0].receiving_touchdowns}</td> : null) : null) : null}
    	 </tr>
  		</tbody>
	</table>

	<div className="ui form">
  <div className="fields">
    <div className="field">
      <label># of Shares</label>
      <input onChange={this.handleChangeBuy} type="text" placeholder="Number of Shares" value={this.state.buyQuantity}/>
    </div>
    <div className="field">
      <label>Total Spending</label>
      <input type="text" placeholder="Total Spending" value={filteredNFL ? (filteredNFL[0] ? (Number.isInteger(parseInt(this.state.buyQuantity, 10)) ? (this.state.buyQuantity * filteredNFL[0].current_stock_value.toFixed(2)) : 0) : '') : ''}/>
    </div>
    <button className="positive ui button" onClick={this.handleBuyButton}>Buy</button>
    <h3>{this.state.buyMessage ? this.state.buyMessage : null}</h3>
  </div>
</div>
{furtherFilteredInvestments.map((investment, index) => <Select key={index} investment={investment} nflAthletes={filteredNFL} onSellPartial={this.handleSellPartialButton} onSellAll={this.handleSellAllButton} onHandleSell={this.handleChangeSell}/> ) }
<Link to={`/users/${localStorage.getItem('user_id')}`}><button className="ui button">Go to Profile</button></Link>
</div>
	)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestments: () => {
      dispatch(fetchInvestments())
    }
  }
}



export default connect(null, mapDispatchToProps)(AthleteInfo)