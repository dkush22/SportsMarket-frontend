import React from 'react'
import AthleteList from './AthleteList.js'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import * as NFLAthleteActions from '../actions/nflAthletes.js'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import AthletesForm from './AthletesForm.js'

class AthleteContainer extends React.Component {

componentDidMount() {
	this.props.fetchNFLAthletes()
}

render() {
	return (
	<div>
		<AthletesForm/>
		{localStorage.getItem('jwtToken') ? null : <strong>You are not logged in <div className="ui buttons"><Link to={'/login'}><button className="ui button">Login</button></Link><div className="or"></div><Link to={'/signup'}><button className="ui button">Signup</button></Link></div></strong>}
		<Route exact path="/athletes" render={(props) => <AthleteList nflAthletes={this.props.nflAthletes} {...props} />} /> 

	</div>
)
}
}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchNFLAthletes: () => {
			dispatch(fetchNFLAthletes())
		}
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(AthleteContainer)