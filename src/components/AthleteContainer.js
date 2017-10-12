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
	console.log(this.props)
	return (
	<div>
		<AthletesForm/>
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