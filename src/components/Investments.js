import React from 'react'
import { fetchInvestments } from '../actions/investments.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Investments extends React.Component {


// handleSell = () => {
// 	const investmentParams = {user_id: this.props.investment.user_id, nfl_athlete_id: this.props.investment.nfl_athlete_id}
// 	deleteInvestment(investmentParams, this.props.fetchInvestments)
// }

render() {
	return (
    <tr>
      <td>{this.props.investment.nfl_athlete.name}</td>
      <td>${this.props.investment.nfl_athlete.initial_stock_value.toFixed(2)}</td>
      <td>${this.props.investment.acquisition_price.toFixed(2)}</td>
      <td>${this.props.investment.nfl_athlete.current_stock_value.toFixed(2)}</td>
      <td>{this.props.investment.quantity}</td>
      <td>${(this.props.investment.quantity * this.props.investment.acquisition_price).toFixed(2)}</td>
      <td>${(this.props.investment.nfl_athlete.current_stock_value * this.props.investment.quantity).toFixed(2)}</td>
      <td className={(((this.props.investment.nfl_athlete.current_stock_value) - (this.props.investment.acquisition_price)) * (this.props.investment.quantity)).toFixed(2) > 0 ? 'positive' : 'negative' }>${(((this.props.investment.nfl_athlete.current_stock_value.toFixed(2)) - (this.props.investment.acquisition_price.toFixed(2))) * (this.props.investment.quantity)).toFixed(2)  }</td>
      <td><Link to={`/athletes/${this.props.investment.nfl_athlete_id}`}><button className="ui negative button">Sell</button></Link></td>
    </tr>
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


export default connect(null, mapDispatchToProps)(Investments)