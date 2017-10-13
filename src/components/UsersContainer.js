import React from 'react'
// import AthleteList from './AthleteList.js'
import { fetchInvestments } from '../actions/investments.js'
// import * as InvestmentActions from '../actions/investments.js'
import { connect } from 'react-redux'
// import { Route, Link, Switch, Redirect } from 'react-router-dom'
import InvestmentsList from './InvestmentsList.js'


class UsersContainer extends React.Component {

componentDidMount() {
this.props.fetchInvestments()
}


	render() {
		return(
		<InvestmentsList investments={this.props.investments} />


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
		fetchInvestments: () => {
			dispatch(fetchInvestments())
		}
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)