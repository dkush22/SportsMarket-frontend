import React from 'react'
import AthleteList from './AthleteList.js'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import { fetchInvestments } from '../actions/investments.js'
// import * as NFLAthleteActions from '../actions/nflAthletes.js'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import AthletesForm from './AthletesForm.js'

class AthleteContainer extends React.Component {

componentDidMount() {
	this.props.fetchNFLAthletes()
	this.props.fetchInvestments()
}

render() {
	return (
	<div>
		<AthletesForm/>
		{localStorage.getItem('jwtToken') ? null : <strong>You are not logged in <div className="ui buttons"><Link to={'/login'}><button className="ui button">Login</button></Link><div className="or"></div><Link to={'/signup'}><button className="ui button">Signup</button></Link></div></strong>}
		<Route exact path="/athletes" render={(props) => <AthleteList nflAthletes={this.props.nflAthletes} investments={this.props.investments} {...props} />} /> 

	</div>
)
}
}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching,
		id: state.users.user.id,
		investments: state.users.user.investments
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchNFLAthletes: () => {
			dispatch(fetchNFLAthletes())
		}, 
		fetchInvestments: () => {
			dispatch(fetchInvestments())
		}
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(AthleteContainer)