import React from 'react'
import { connect } from 'react-redux'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import { Link } from 'react-router-dom'
import '../App.css';



class Welcome extends React.Component {

componentDidMount() {
	this.props.fetchNFLAthletes()
}




render() {
const mappedAthletes = this.props.nflAthletes.map(player => `${player.name}: $${player.current_stock_value.toFixed(2)}`)
const runningBacks = this.props.nflAthletes.filter(player => player.position === "RB")
const wideReceivers = this.props.nflAthletes.filter(player => player.position === "WR")
const tightEnds = this.props.nflAthletes.filter(player => player.position === "TE")
return (
	<div>
	<h3 className="ui block header"><marquee>{mappedAthletes.toString().replace(/\,/g,"   ||  ")}</marquee></h3>
<table className="ui celled table">
  <thead>
    <tr>
    <th>Quarterbacks</th>
    <th>Running backs</th>
    <th>Wide Receivers</th>
    <th>Tight Ends</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>{this.props.nflAthletes ? (this.props.nflAthletes[0] ? (`${this.props.nflAthletes[0].name}: $${this.props.nflAthletes[0].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{runningBacks ? (runningBacks[0] ? (`${runningBacks[0].name}: $${runningBacks[0].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{wideReceivers ? (wideReceivers[0] ? (`${wideReceivers[0].name}: $${wideReceivers[0].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{tightEnds ? (tightEnds[0] ? (`${tightEnds[0].name}: $${tightEnds[0].current_stock_value.toFixed(2)}`) : null) : null}</td>
      </tr>
    <tr>
      <td>{this.props.nflAthletes ? (this.props.nflAthletes[1] ? (`${this.props.nflAthletes[1].name}: $${this.props.nflAthletes[1].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{runningBacks ? (runningBacks[1] ? (`${runningBacks[1].name}: $${runningBacks[1].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{wideReceivers ? (wideReceivers[1] ? (`${wideReceivers[1].name}: $${wideReceivers[1].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{tightEnds ? (tightEnds[1] ? (`${tightEnds[1].name}: $${tightEnds[1].current_stock_value.toFixed(2)}`) : null) : null}</td>
    </tr>
    <tr>
      <td>{this.props.nflAthletes ? (this.props.nflAthletes[2] ? (`${this.props.nflAthletes[2].name}: $${this.props.nflAthletes[2].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{runningBacks ? (runningBacks[2] ? (`${runningBacks[2].name}: $${runningBacks[2].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{wideReceivers ? (wideReceivers[2] ? (`${wideReceivers[2].name}: $${wideReceivers[2].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{tightEnds ? (tightEnds[2] ? (`${tightEnds[2].name}: $${tightEnds[2].current_stock_value.toFixed(2)}`) : null) : null}</td>
    </tr>
    <tr>
      <td>{this.props.nflAthletes ? (this.props.nflAthletes[3] ? (`${this.props.nflAthletes[3].name}: $${this.props.nflAthletes[3].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{runningBacks ? (runningBacks[3] ? (`${runningBacks[3].name}: $${runningBacks[3].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{wideReceivers ? (wideReceivers[3] ? (`${wideReceivers[3].name}: $${wideReceivers[3].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{tightEnds ? (tightEnds[3] ? (`${tightEnds[3].name}: $${tightEnds[3].current_stock_value.toFixed(2)}`) : null) : null}</td>
    </tr>
    <tr>
      <td>{this.props.nflAthletes ? (this.props.nflAthletes[4] ? (`${this.props.nflAthletes[4].name}: $${this.props.nflAthletes[4].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{runningBacks ? (runningBacks[4] ? (`${runningBacks[4].name}: $${runningBacks[4].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{wideReceivers ? (wideReceivers[4] ? (`${wideReceivers[4].name}: $${wideReceivers[4].current_stock_value.toFixed(2)}`) : null) : null}</td>
      <td>{tightEnds ? (tightEnds[4] ? (`${tightEnds[4].name}: $${tightEnds[4].current_stock_value.toFixed(2)}`) : null) : null}</td>
    </tr>
  </tbody>
</table>
{!localStorage.getItem('jwtToken') ? <div className="ui buttons"><Link to={'/login'}><button className="ui button">Login</button></Link><div className="or"></div><Link to={'/signup'}><button className="ui button">Signup</button></Link></div> : null}
</div>
	
)
}
}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchNFLAthletes: () => {
			dispatch(fetchNFLAthletes())
		}
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(Welcome)